import express from "express";
import config from "config";
import mongoose from "mongoose";
import { dbConnect } from "./d-layer/index.js";

const app = express();
app.use(express.json());

dbConnect();

const dbConnection = mongoose.connection;

dbConnection.on("open", () => {
  app.listen(config.get("Server.port"), () => {
    console.log("running");
  });
});
