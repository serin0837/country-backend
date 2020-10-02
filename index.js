const express = require("express");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://serin:serin0837@cluster0.ai95b.mongodb.net/countyList?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("mongo connect"));
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use("/api", require("./routes/api")); // we can use router from api.js// and add "api" url

// app.use("/api", require("./routes/api"));

// app.use(function (err, req, res, next) {
//   res.status(422).send({ error: err._message });
// });

app.listen(process.env.PORT || 4000, () => {
  console.log("now listening for request");
});
