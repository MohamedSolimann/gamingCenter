import config from "config";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const dbConnect = () => {
  mongoose.connect(
    `mongodb://${config.get("DB.host")}:${config.get("DB.port")}/${config.get(
      "DB.name"
    )}`,
    () => {
      console.log("db connected");
    }
  );
};

const updateReqBody = (body) => {
  let updatedBody = {};
  if (body.username) {
    updatedBody.username = body.username;
  }
  if (body.email) {
    updatedBody.email = body.email;
  }
  if (body.age) {
    updatedBody.age = body.age;
  }
  if (body.image) {
    updatedBody.image = body.image;
  }
  if (body.games) {
    updatedBody.games = body.games;
  }
  if (body.password) {
    updatedBody.password = body.password;
  }
  if (body.mobile) {
    updatedBody.mobile = body.mobile;
  }
  if (body.videos) {
    updatedBody.username = body.username;
  }
  return updatedBody;
};
const udpateUserInfo = (userInfo) => {
  userInfo._id = mongoose.Types.ObjectId();
  userInfo.createdAt = Date();
  userInfo.passowrd = bcrypt.hashSync(passowrd, 8);
  return userInfo;
};
export { dbConnect, updateReqBody, udpateUserInfo };
