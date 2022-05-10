const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  bio: {
    type: String,
  },
  videos: {
    type: String,
  },
  age: {
    type: String,
    required: true,
  },
  games: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
