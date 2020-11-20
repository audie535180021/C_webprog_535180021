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

Member.updateOne(
  { name: "Starship Enterprise" },
  { credit: 1031000 },
  (err, raw) => {
    Member.findOne({ name: "Starship Enterprise" }).exec((err, data) => {
      if (data) console.log("Find One: " + JSON.stringify(data));
    });
  }
);
