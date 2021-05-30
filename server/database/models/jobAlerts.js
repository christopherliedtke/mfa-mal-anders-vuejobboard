const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobAlertSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

module.exports.JobAlert = mongoose.model("JobAlert", JobAlertSchema);
