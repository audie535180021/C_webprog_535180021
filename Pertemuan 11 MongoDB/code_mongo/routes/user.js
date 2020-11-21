const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/db-untar-cafe", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose");
});

const User = require("../model/users");

module.exports = () => {
  router.get("/", (req, res) => {
    res.json({
      body: {
        message: "Ini router user",
      },
    });
  });

  router.post("/add", async (req, res) => {
    const user1 = new User({
      name: req.body.name,
      email: req.body.email,
      credit: req.body.credit,
    });

    // res.send(user1);
    const save = await user1.save();
    try {
      res.send(save);
    } catch (err) {
      res.send(err);
    }
  });

  router.get("/all", async (req, res) => {
    const users = await User.find();
    try {
      res.send(users);
    } catch (err) {
      res.send(err);
    }
  });

  router.get("/:id", async (req, res) => {
    const id = req.params.id;

    const users = await User.findById(id);
    try {
      res.send(users);
    } catch (err) {
      res.send(err);
    }
  });

  router.get("/email/:email", async (req, res) => {
    const email = req.params.email;

    const users = await User.find({ email: email });
    try {
      res.send(users);
    } catch (err) {
      res.send(err);
    }
  });

  router.get("/credit/:credit", async (req, res) => {
    const credit = req.params.credit;

    const users = await User.where("credit").equals(credit);
    try {
      res.send(users);
    } catch (err) {
      res.send(err);
    }
  });

  router.delete("/del/:id", async (req, res) => {
    const id = req.params.id;

    const deleteUsers = await User.deleteMany({
      _id: id,
    });
    try {
      res.send(deleteUsers);
    } catch (err) {
      res.send(err);
    }
  });

  router.patch("/update/:id", async (req, res) => {
    const id = req.params.id;

    const updateUsers = await User.updateMany(
      {
        _id: id,
      },
      {
        $set: req.body,
      }
    );
    try {
      res.send(updateUsers);
    } catch (err) {
      res.send(err);
    }
  });

  return router;
};
