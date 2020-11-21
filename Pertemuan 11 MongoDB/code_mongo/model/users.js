const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  credit: Number,
});

module.exports = mongoose.model("users", userSchema);
