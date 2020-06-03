var express = require("express");
var router = express.Router();

let sample = require("./testAPI.js");

let array = sample.array;

router.post("/create", function (req, res) {
  const newItem = {
    Title: req.body.itemTitle,
  };

  array.push(newItem);
  console.log(items);
});

module.exports = router;
