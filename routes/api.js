const express = require("express");
const router = express.Router();
const { Country, ImaginaryCountry } = require("../models/country");

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

router.post("/imaginarycountries", function (req, res) {
  //new instance of County object
  ImaginaryCountry.create(req.body).then(function (country) {
    res.send(country);
  });
});

//get country by name//working!
router.get("/countries/:id", function (req, res) {
  Country.findOne({ name: req.params.id }, req.body, { new: true }).then(
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

//get country with region
router.get("/region", function (req, res) {
  Country.find({}).then(function (country) {
    res.send(country);
  });
});

//get country by region name//working!// but region need to start capital
router.get("/region/:id", function (req, res) {
  Country.find({ region: req.params.id }, req.body, { new: true }).then(
    function (country) {
      res.send(country);
    }
  );
});
module.exports = router;
