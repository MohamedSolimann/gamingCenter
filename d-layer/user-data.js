import mongoose from "mongoose";
import { userModel } from "../models/user-model.js";
import { updatedBody } from "./index.js";

async function createUser(userInfo) {
  userInfo._id = mongoose.Types.ObjectId();
  userInfo.createdAt = Date();
  const newUser = new userModel(userInfo);
  await newUser.save();
  return newUser;
}
async function getUsers() {
  const users = await userModel.find();
  return users;
}
async function getUser(userId) {
  const user = await userModel.findOne({ _id: userId });
  if (user) {
    return user;
  } else {
    throw new Error("No user found!");
  }
}
async function updateUser(userInfo, userId) {
  let updatedReqBody = updatedBody(userInfo);
  const updatedUser = await userModel.findOneAndModify(
    { _id: userId },
    { $set: { updatedReqBody } },
    { new: true }
  );
  return updatedUser;
}
async function deleteUser(userId) {
  const deletedUser = await userModel.findOneAndModify(
    { _id: userId },
    { $set: { deletedAt: Date() } }
  );
}
export { createUser, getUser, getUsers, deleteUser, updateUser };
