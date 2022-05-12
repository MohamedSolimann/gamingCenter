import mongoose from "mongoose";
var userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  moblie: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  videos: {
    type: Array,
  },
  age: {
    type: Number,
  },
  games: {
    type: Array,
  },
  createdAt: {
    type: Date,
  },
  deletedAt: {
    type: Date,
  },
});
const userModel = mongoose.model("User", userSchema);
export { userModel };
