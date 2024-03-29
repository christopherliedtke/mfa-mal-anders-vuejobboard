const mongoose = require("mongoose");
const textToSlug = require("../../lib/textToSlug");
const Schema = mongoose.Schema;

const CompanySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    noLocation: {
      type: Boolean,
      default: false,
    },
    street: {
      type: String,
      // required: true,
      default: "",
    },
    location: {
      type: String,
      // required: true,
      default: "",
    },
    zipCode: {
      type: String,
      // required: true,
      default: "",
    },
    state: {
      type: String,
      // required: true,
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
    size: {
      type: String,
      default: "",
    },
    url: {
      type: String,
    },
    logoUrl: {
      type: String,
    },
    slug: {
      type: String,
      default: function () {
        if (this.name) {
          return textToSlug(
            `${this.name}${this.location ? "-in-" + this.location : ""}`
          );
        } else {
          return "";
        }
      },
    },
  },
  { timestamps: true }
);

module.exports.Company = mongoose.model("Company", CompanySchema);
