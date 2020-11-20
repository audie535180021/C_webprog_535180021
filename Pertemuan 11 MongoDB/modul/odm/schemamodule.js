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

var member1 = new Member({
  name: "Space The Final Frontier",
  email: "these-are@the-voyages.com",
});
member1.save((error, savedDocument) => {
  if (error) console.log(error);
  console.log(savedDocument);
});
