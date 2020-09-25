const express = require("express");
const router = express.Router();
const Country = require("../models/country");

//get every country
router.get("/countries", function (req, res) {
  Country.find({}).then(function (country) {
    res.send(country);
  });
});
//get country by id
router.get("/countries/:id", function (req, res) {
  res.send({ type: "GET" });
});

// add a country to db -> working!!!!
router.post("/countries", function (req, res) {
  //new instance of County object
  Country.create(req.body).then(function (country) {
    res.send(country);
  });
});

// router.post("/countries", function (req, res, next) {
//   console.log(req.body);
//   Country.create(req.body)
//     .then(function (country) {
//       res.send(country);
//     })
//     .catch(next);
// });

module.exports = router;
