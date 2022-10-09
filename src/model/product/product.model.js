const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true, default: 0 },
  img: { type: String },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
  category: { type: String },
  status: { type: Boolean, default: true },
});
module.exports = mongoose.model("product", productSchema);
