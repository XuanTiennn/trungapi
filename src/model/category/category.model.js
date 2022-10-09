const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, require: true },
  createAt: { type: Date, default: Date.now },
  code: { type: String, require: true },
});
module.exports = mongoose.model("category", categorySchema);
