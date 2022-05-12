import mongoose from "mongoose";
import config from "config";

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

export { dbConnect };
