const express = require("express");
const router = express.Router();
const Country = require("../models/country");

//get every country
router.get("/countries", function (req, res) {
  Country.find({}).then(function (country) {
    res.send(country);
  });
});

// add a country to db -> working!!!!
router.post("/countries", function (req, res) {
  //new instance of County object
  Country.create(req.body).then(function (country) {
    res.send(country);
  });
});

//get country by id//working
router.get("/countries/:id", function (req, res) {
  Country.findById({ _id: req.params.id }, req.body, { new: true }).then(
    function (country) {
      res.send(country);
    }
  );
});

//update country//working
router.patch("/countries/:id", function (req, res) {
  Country.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then(function (country) {
    res.send(country);
  });
});
//delete country//working
router.delete("/countries/:id", function (req, res) {
  Country.findByIdAndRemove({ _id: req.params.id }).then(function (country) {
    res.send(country);
  });
});

module.exports = router;
