import express from "express";
import config from "config";
import mongoose from "mongoose";
import { router } from "./routes/user-router.js";
import { dbConnect } from "./d-layer/index.js";

const app = express();
app.use(express.json());
app.use("/users", router);

dbConnect();

const dbConnection = mongoose.connection;

dbConnection.on("open", () => {
  app.listen(config.get("Server.port"), () => {
    console.log("running");
  });
});
