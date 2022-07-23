const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    gender: {
      type: String,
    },
    title: {
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
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "basic",
    },
    isEmployer: {
      type: Boolean,
      default: false,
    },
    isEmployee: {
      type: Boolean,
      default: false,
    },
    isEducational: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "pending",
    },
    sentReminder: {
      type: Boolean,
      default: false,
    },
    accepted: {
      type: Boolean,
      required: true,
    },
    stripeCustomerId: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports.User = mongoose.model("User", UserSchema);
