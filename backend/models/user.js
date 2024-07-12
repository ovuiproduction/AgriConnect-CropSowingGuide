const mongoose = require("mongoose");

const usercoll = mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("usercoll", usercoll);
