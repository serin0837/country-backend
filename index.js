const express = require("express");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://localhost/countryList");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use("/api", require("./routes/api")); // we can use router from api.js// and add "api" url

// app.use("/api", require("./routes/api"));

// app.use(function (err, req, res, next) {
//   res.status(422).send({ error: err._message });
// });

app.listen(process.env.port || 4000, () => {
  console.log("now listening for request");
});
