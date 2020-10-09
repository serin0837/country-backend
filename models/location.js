const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  name: {
    type: String,
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
  description: {
    type: String,
  },
  color: {
    type: String,
  },
});

const Location = mongoose.model("location", LocationSchema);

module.exports =  Location ;
