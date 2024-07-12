const mongoose = require("mongoose");

const cropcoll = mongoose.Schema({
  state: {
    type: String,
  },
  division: {
    type: String,
  },
  cropname: {
    type: String,
  },
  area: {
    type: Number,
  },
});

module.exports = mongoose.model("cropcoll", cropcoll);
