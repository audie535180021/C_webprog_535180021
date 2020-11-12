const express = require("express");

const materiKuliahRoute = require("./materikuliah");
const feedbackRoute = require("./feedback");
const { Template } = require("ejs");

const router = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    // res.send("Hello World Express");
    // res.sendFile(path.join(__dirname, "./static/index.html"));
    // Penggunaan EJS
    res.render("layout", {
      pageTitle: "Coffeteria | Landing Page",
      Template: "index",
    });
  });

  router.use("/materikuliah", materiKuliahRoute());
  router.use("/feedback", feedbackRoute());
  return router;
};
