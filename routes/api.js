const express = require("express");
const router = express.Router();
const { Country, ImaginaryCountry } = require("../models/country");
const Location = require("../models/location")

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

//add a imaginary countries -> working!!
router.post("/imaginarycountries", function (req, res) {
  ImaginaryCountry.create(req.body).then(function (country) {
    res.send(country).catch((err)=>res.status(400).json("error"+err));
  });
});

//get imaginary countries 
router.get("/imaginarycountries", function (req, res) {
  ImaginaryCountry.find({}).then(function (country) {
    res.send(country).catch((err)=>res.status(400).json("error"+err));
  });
});

//get imaginary countries by id 
router.get("/imaginarycountries/:id", function (req, res) {
  ImaginaryCountry.findOne({ _id: req.params.id}).then(function (country) {
    res.send(country).catch((err)=>res.status(400).json("error"+err));
  });
});

//update country//working
router.patch("/imaginarycountries/:id", function (req, res) {
  ImaginaryCountry.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then(function (country) {
    res.send(country);
  });
});
//delete country//working
router.delete("/imaginarycountries/:id", function (req, res) {
  ImaginaryCountry.findByIdAndRemove({ _id: req.params.id }).then(function (country) {
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

//get every location
router.get("/locations", function (req, res) {
  Location.find({}).then(function (location) {
    res.send(location);
  });
});

// add a location to db
router.post("/locations", function (req, res) {
  Location.create(req.body).then(function (location) {
    res.send(location);
  });
});
module.exports = router;
