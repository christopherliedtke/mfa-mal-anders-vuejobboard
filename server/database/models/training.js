const mongoose = require("mongoose");
const { Schema } = mongoose;

const TrainingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      default: "",
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    remote: {
      type: Boolean,
      default: false,
    },
    startAnytime: {
      type: Boolean,
      default: false,
    },
    location: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    company: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      default: "",
    },
    startAt: {
      type: Date,
    },
    endAt: {
      type: Date,
    },
    duration: {
      type: String,
      default: "",
    },
    effort: {
      type: String,
      default: "",
    },
    cost: {
      type: Number,
    },
    extUrl: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
    pending: {
      type: Boolean,
      default: false,
    },
    paid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.Training = mongoose.model("Training", TrainingSchema);
