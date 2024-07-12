const mongoose = require("mongoose");

const commentscoll = mongoose.Schema({
  text: {
    type: String,
  },
  blogId: {
    type: String,
  },
  commentOwner: {
    type: String,
  },
});

module.exports = mongoose.model("commentscoll", commentscoll);
