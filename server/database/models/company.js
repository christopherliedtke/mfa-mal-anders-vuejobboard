const mongoose = require("mongoose");
const textToSlug = require("../../utils/textToSlug");
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
    street: {
      type: String,
      required: true,
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
            `${this.name}${this.location ? "-" + this.location : ""}`
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
