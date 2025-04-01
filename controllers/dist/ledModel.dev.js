"use strict";

var mongoose = require("mongoose");

var ledSchema = new mongoose.Schema({
  nombre: String,
  color: String,
  estado: {
    type: String,
    "enum": ['on', 'off'],
    "default": 'off'
  }
});
var Led = mongoose.model('Led', ledSchema);
module.exports = Led;