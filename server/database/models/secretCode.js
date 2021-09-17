const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CodeSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
});

module.exports.Code = mongoose.model("Code", CodeSchema);
