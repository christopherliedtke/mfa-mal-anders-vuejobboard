const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StarredJobSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    job: {
      type: String,
      ref: "Job",
    },
  },
  { timestamps: true }
);

module.exports.StarredJob = mongoose.model("StarredJob", StarredJobSchema);
