const mongoose = require("mongoose");
const memberSchema = mongoose.Schema({
  name: String,
  email: String,
  credit: Number,
});
module.exports = mongoose.model("Member", memberSchema);
