const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const textToSlug = require("../../lib/textToSlug");

const JobSeekSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    tasks: {
      type: String,
      default: "",
    },
    experiences: {
      type: String,
      default: "",
    },
    isMfa: {
      type: Boolean,
      default: false,
    },
    isZfa: {
      type: Boolean,
      default: false,
    },
    qualifications: {
      type: [String],
    },
    partTime: {
      type: Boolean,
    },
    fullTime: {
      type: Boolean,
    },
    training: {
      type: Boolean,
    },
    miniJob: {
      type: Boolean,
    },
    freelance: {
      type: Boolean,
    },
    salaryMin: {
      type: Number,
    },
    anonymized: {
      type: Boolean,
      default: true,
    },
    gender: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    publicFirstName: {
      type: String,
      default: function () {
        if (this.firstName && this.anonymized) {
          return this.firstName.charAt(0) + ".";
        } else if (this.firstName) {
          return this.firstName;
        } else {
          return "";
        }
      },
    },
    publicLastName: {
      type: String,
      default: function () {
        if (this.lastName && this.anonymized) {
          return this.lastName.charAt(0) + ".";
        } else if (this.lastName) {
          return this.lastName;
        } else {
          return "";
        }
      },
    },
    birthDate: {
      type: Date,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    geoCodeLat: {
      type: Number,
    },
    geoCodeLng: {
      type: Number,
    },
    published: {
      type: Boolean,
      default: false,
    },
    wasPublic: {
      type: Boolean,
      default: false,
    },
    sentReminder: {
      type: Boolean,
      default: false,
    },
    accepted: {
      type: Boolean,
      default: false,
    },
    slug: {
      type: String,
      default: function () {
        if (this.title) {
          return textToSlug(
            `${this.title}${this.location ? "-in-" + this.location : ""}`
          );
        } else {
          return "";
        }
      },
    },
  },
  { timestamps: true }
);

module.exports.JobSeek = mongoose.model("JobSeek", JobSeekSchema);
