const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
      required: true,
    },
    experiences: {
      type: String,
      required: true,
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
    contactEmail: {
      type: String,
      required: true,
      lowercase: true,
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
    lastCheckedAt: {
      type: Date,
      default: function () {
        if (this.updatedAt) {
          return this.updatedAt;
        } else {
          return null;
        }
      },
    },
    published: {
      type: Boolean,
      default: false,
    },
    accepted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports.JobSeek = mongoose.model("JobSeek", JobSeekSchema);
