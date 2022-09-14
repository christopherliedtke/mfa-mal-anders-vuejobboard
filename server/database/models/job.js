const mongoose = require("mongoose");
const textToSlug = require("../../lib/textToSlug");
const sanitizeHtml = require("sanitize-html");
const Schema = mongoose.Schema;

const JobSchema = new Schema(
  {
    status: {
      type: String,
      default: "unpublished",
    },
    firstPublishedAt: {
      type: Date,
    },
    publishedAt: {
      type: Date,
    },
    paid: {
      type: Boolean,
      default: false,
    },
    stripeInvoiceStatus: {
      type: String,
    },
    paidAt: {
      type: Date,
    },
    paidExpiresAt: {
      type: Date,
    },
    invoiceNo: {
      type: Number,
      default: 0,
    },
    paidAmount: {
      type: Number,
      default: 0,
    },
    sentReminder: {
      type: Boolean,
      default: false,
    },
    refreshFrequency: {
      type: Number,
      default: 0,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      default: function () {
        if (this.description) {
          return (
            sanitizeHtml(
              this.description.replace(/<\/([a-z, 0-9]*)>/g, "</$1> "),
              {
                allowedTags: [],
                allowedAttributes: {},
              }
            )
              .substring(0, 200)
              .trim() + "..."
          );
        } else {
          return "";
        }
      },
    },
    slug: {
      type: String,
      default: function () {
        if (this.title) {
          return textToSlug(this.title);
        } else {
          return "";
        }
      },
    },
    profession: {
      type: String,
      default: "",
    },
    employmentType: {
      type: String,
      required: true,
    },
    applicationDeadline: {
      type: Date,
    },
    simpleApplication: {
      type: Boolean,
      default: false,
    },
    specialization: {
      type: String,
    },
    extJobUrl: {
      type: String,
    },
    applicationEmail: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    videoUrl: {
      type: String,
      default: "",
    },
    salaryMin: {
      type: String,
      default: "",
    },
    salaryMax: {
      type: String,
      default: "",
    },
    contactGender: {
      type: String,
    },
    contactTitle: {
      type: String,
    },
    contactFirstName: {
      type: String,
      default: "",
    },
    contactLastName: {
      type: String,
      default: "",
    },
    contactPosition: {
      type: String,
      default: "",
    },
    contactEmail: {
      type: String,
    },
    contactPhone: {
      type: String,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    payment: {
      type: Schema.Types.ObjectId,
      ref: "Payment",
    },
  },
  { timestamps: true }
);

module.exports.Job = mongoose.model("Job", JobSchema);
