const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/db-untar-cafe", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose");
});

const Member = require("./model/Member");

var myQuery = Member.findOne({
  name: "Starship Enterprise",
}).where("email", /boldly/);

myQuery.exec((err, data) => {
  if (data) console.log(data.name);
});
