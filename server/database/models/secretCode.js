const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CodeSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    validUntil: {
      type: Date,
      default: () => {
        return Date.now() + 1000 * 60 * 60;
      },
      expires: 0,
    },
  },
  { timestamps: true }
);

module.exports.Code = mongoose.model("Code", CodeSchema);
