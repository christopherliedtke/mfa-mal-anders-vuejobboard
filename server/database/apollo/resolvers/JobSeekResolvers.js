const {
  UserInputError,
  AuthenticationError,
  ApolloError,
} = require("apollo-server-express");
const sanitizeHtml = require("sanitize-html");
const s3 = require("../../../middleware/s3");
const getLocation = require("../../../lib/geocoder");
const { JobSeek } = require("../../models/jobSeek");
const publicJobSeeksCache = require("../../../cache/publicJobSeeksCache");

const JobSeekResolvers = {
  Query: {
    publicJobSeek: async (root, args) => {
      const jobSeeks = await publicJobSeeksCache.get("jobSeeks");

      const jobSeek = jobSeeks.find(jobSeek => jobSeek._id == args._id);

      return jobSeek;
    },
    publicJobSeeks: async (root, args) => {
      let location;
      if (args.location) {
        const locations = await getLocation(args.location);

        if (locations) {
          // location =
          //   locations[0].address.city ||
          //   locations[0].address.county ||
          //   locations[0].address.state;

          location = {
            location:
              locations[0].address.city ||
              locations[0].address.county ||
              locations[0].address.state,
            zipCode: locations[0].address.postalCode,
            country: locations[0].address.countryName,
          };

          args.position = locations[0].position;
        } else {
          throw new UserInputError(
            `Es konnte kein passender Ort für '${args.location}' gefunden werden oder der Ortungsservice funktioniert aktuell nicht. Bitte stellen Sie sicher, dass der Ort bzw. die PLZ korrekt und komplett angegeben ist.`,
            { argumentName: "location" }
          );
        }
      }

      let jobSeeks = await publicJobSeeksCache.get("jobSeeks");

      // filter by ausbildung
      if (args.isMfa && args.isZfa) {
        jobSeeks = jobSeeks.filter(jobSeek => jobSeek.isMfa || jobSeek.isZfa);
      } else if (args.isMfa) {
        jobSeeks = jobSeeks.filter(jobSeek => jobSeek.isMfa);
      } else if (args.isZfa) {
        jobSeeks = jobSeeks.filter(jobSeek => jobSeek.isZfa);
      }

      // filter by employmentType
      if (args.employmentType) {
        if (args.employmentType === "part_full") {
          jobSeeks = jobSeeks.filter(
            jobSeek => jobSeek.fullTime || jobSeek.partTime
          );
        } else if (args.employmentType === "full") {
          jobSeeks = jobSeeks.filter(jobSeek => jobSeek.fullTime);
        } else if (args.employmentType === "part") {
          jobSeeks = jobSeeks.filter(jobSeek => jobSeek.partTime);
        } else if (args.employmentType === "training") {
          jobSeeks = jobSeeks.filter(jobSeek => jobSeek.training);
        } else if (args.employmentType === "mini") {
          jobSeeks = jobSeeks.filter(jobSeek => jobSeek.miniJob);
        } else if (args.employmentType === "freelance") {
          jobSeeks = jobSeeks.filter(jobSeek => jobSeek.freelance);
        }
      }

      // fitler & sort by location / radius
      if (args.position) {
        jobSeeks = sortJobSeeksByPosition(args.position, jobSeeks);

        if (args.radius) {
          jobSeeks = filterJobSeeksByDistance(
            args.radius,
            args.position,
            jobSeeks
          );
        }
      }

      const count = jobSeeks.length;

      jobSeeks = sliceJobSeeks(jobSeeks, args.limit || undefined, args.skip);

      return { jobSeeks, count, location };
    },
    myJobSeek: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const filter = {
        _id: args._id,
      };

      if (!context.user.isAdmin) {
        filter.user = context.user._id;
      }

      const jobSeek = await JobSeek.findOne(filter);

      return jobSeek;
    },
    myJobSeeks: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const jobSeeks = await JobSeek.find({
        user: context.user._id,
      }).sort({ createdAt: "desc" });

      // await JobSeek.updateMany(
      //   {
      //     user: context.user._id,
      //   },
      //   { updatedAt: new Date().getTime() }
      // );

      return jobSeeks;
    },
    adminJobSeek: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing permission!");
      }

      const jobSeek = await JobSeek.findOne({
        _id: args._id,
      });

      return jobSeek;
    },
    adminJobSeeks: async (root, args, context) => {
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Missing persmission!");
      }

      const jobSeek = await JobSeek.find({}).sort({ createdAt: "desc" });

      return jobSeek;
    },
  },

  Mutation: {
    addJobSeek: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      const locations = await getLocation(`${args.zipCode} ${args.location}`);

      if (!locations) {
        throw new ApolloError(
          `Es konnte kein passender Ort für "${args.zipCode} ${args.location}" gefunden werden oder der Ortungsservice funktioniert aktuell nicht. Bitte überprüfe ggfls. Ort und PLZ.`
        );
      }

      const addObj = cleanUpJobSeek({
        ...args,
        user: context.user._id,
        location: locations[0].address.city,
        zipCode: locations[0].address.postalCode,
        state: locations[0].address.state,
        country: locations[0].address.countryName,
        geoCodeLat: locations[0].position.lat,
        geoCodeLng: locations[0].position.lng,
      });

      const newJobSeekObj = new JobSeek(addObj);
      const newJobSeek = await newJobSeekObj.save();

      publicJobSeeksCache.flush();

      return newJobSeek;
    },
    updateJobSeek: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }

      if (args.zipCode && args.location) {
        const locations = await getLocation(`${args.zipCode} ${args.location}`);

        if (!locations) {
          throw new ApolloError(
            `Es konnte kein passender Ort für "${args.zipCode} ${args.location}" gefunden werden oder der Ortungsservice funktioniert aktuell nicht. Bitte überprüfe ggfls. Ort und PLZ.`
          );
        }

        args.location = locations[0].address.city;
        args.zipCode = locations[0].address.postalCode;
        args.state = locations[0].address.state;
        args.country = locations[0].address.countryName;
        args.geoCodeLat = locations[0].position.lat;
        args.geoCodeLng = locations[0].position.lng;
      }

      const updateObj = cleanUpJobSeek({
        ...args,
        // user: context.user._id,
      });

      if (args.published) {
        updateObj.wasPublic = true;
      }
      delete updateObj._id;

      const filter = { _id: args._id };
      if (!context.user.isAdmin) {
        filter.user = context.user._id;
      }

      const updatedJobSeek = await JobSeek.findOneAndUpdate(filter, updateObj, {
        new: true,
      });

      publicJobSeeksCache.flush();

      return updatedJobSeek;
    },
    deleteJobSeek: async (root, args, context) => {
      if (!context.user._id) {
        throw new AuthenticationError("Must be logged in!");
      }
      const filter = { _id: args._id };
      if (!context.user.isAdmin) {
        filter.user = context.user._id;
      }
      const deletedJobSeek = await JobSeek.findOneAndDelete(filter);
      if (deletedJobSeek.imageUrl) {
        await s3.delete(deletedJobSeek.imageUrl);
      }

      publicJobSeeksCache.flush();

      return deletedJobSeek;
    },
  },
};

function cleanUpJobSeek(jobSeek) {
  for (const key in jobSeek) {
    if (typeof jobSeek[key] === "string" && key != "imageUrl") {
      jobSeek[key] = sanitizeHtml(jobSeek[key], {
        allowedTags: [
          // "address",
          // "article",
          // "aside",
          // "footer",
          // "header",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          // "hgroup",
          // "main",
          // "nav",
          // "section",
          // "blockquote",
          // "dd",
          "div",
          // "dl",
          // "dt",
          // "figcaption",
          // "figure",
          "hr",
          "li",
          // "main",
          "ol",
          "p",
          "pre",
          "ul",
          "a",
          // "abbr",
          // "b",
          // "bdi",
          // "bdo",
          "br",
          "cite",
          // "code",
          // "data",
          // "dfn",
          // "em",
          // "i",
          // "kbd",
          // "mark",
          // "q",
          // "rb",
          // "rp",
          // "rt",
          // "rtc",
          // "ruby",
          // "s",
          "samp",
          "small",
          "span",
          "strong",
          "sub",
          "sup",
          // "time",
          // "u",
          // "var",
          // "wbr",
          // "caption",
          // "col",
          // "colgroup",
          // "table",
          // "tbody",
          // "td",
          // "tfoot",
          // "th",
          // "thead",
          // "tr",
        ],
        transformTags: {
          h1: "h3",
          h2: "h4",
        },
      });
    }
  }

  return jobSeek;
}

function sliceJobSeeks(jobSeeks = [], limit = 15, offset = 0) {
  return jobSeeks.slice(offset, offset + limit);
}

function sortJobSeeksByPosition(position, jobSeeks) {
  if (!position.lat || !position.lng) {
    return jobSeeks;
  }

  return jobSeeks.sort((a, b) => {
    return (
      calcDistance(a.geoCodeLat, a.geoCodeLng, position.lat, position.lng) -
      calcDistance(b.geoCodeLat, b.geoCodeLng, position.lat, position.lng)
    );
  });
}

function filterJobSeeksByDistance(radius, position, jobSeeks) {
  if (!position.lat || !position.lng) {
    return jobSeeks;
  }

  return jobSeeks.filter(
    jobSeek =>
      calcDistance(
        jobSeek.geoCodeLat,
        jobSeek.geoCodeLng,
        position.lat,
        position.lng
      ) /
        1000 <
      radius
  );
}

function calcDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000; // metres
  const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // in metres

  return d;
}

module.exports = JobSeekResolvers;
