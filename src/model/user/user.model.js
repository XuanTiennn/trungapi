const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  createAt: { type: Date, default: Date.now },
  userName: { type: String },
  password: { type: String, require: true },
  loginAt: { type: Date, default: Date.now },
  logoutAt: { type: Date, default: Date.now },
  email: { type: String, require: true },
});
module.exports = mongoose.model("user", userSchema);
