const express = require("express");

const materiKuliahRoute = require("./materikuliah");
const feedbackRoute = require("./feedback");
const userRoute = require("./user");
const { Template } = require("ejs");

const router = express.Router();
router.use(express.json());

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
  router.use("/user", userRoute());
  return router;
};
