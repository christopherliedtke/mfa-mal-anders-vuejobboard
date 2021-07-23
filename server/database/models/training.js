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
      required: true,
      trim: true,
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
    },
    state: {
      type: String,
    },
    company: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    startAt: {
      type: Date,
    },
    endAt: {
      type: Date,
    },
    duration: {
      type: String,
    },
    effort: {
      Type: String,
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
