const express = require("express");

const router = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    res.send("Ini Response List Materi Kuliah");
  });
  router.get("/:matkul", (req, res) => {
    res.send(`Ini Response Materi Kuliah ${req.params.matkul}`);
  });
  return router;
};
