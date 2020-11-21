const { request } = require("express");
const express = require("express");

// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://127.0.0.1:27017/db-untar-cafe";
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/db-untar-cafe", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected");
});

const path = require("path");

const routes = require("./routes");

const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./static")));
app.use("/", routes());

app.listen(port, () => {
  console.log(`Express Server berjalan pada port ${port}`);
});

// MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
//   if (err) {
//     throw err;
//   } else {
//     console.log("Connected");
//   }
//   db.close();
// });
