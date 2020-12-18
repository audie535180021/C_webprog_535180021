const express = require("express");
const app = express();

const mongoose = require("mongoose");
const { PORT, mongoUri } = require("./config");

const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const TodoListItem = require("./models/TodoListItem");
const TodoListItemRoutes = require("./routes/api/todoListItem");

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.log("Failed to Connect to MongoDB...");
  });

app.use("/api/todolistitems", TodoListItemRoutes);

// app.get("/", (req, res) => res.send("Hello World"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Aplikasi Berjalan Pada Port ${PORT}...`));
