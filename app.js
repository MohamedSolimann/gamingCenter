import express from "express";
import config from "config";
import mongoose from "mongoose";
import cors from "cors";
import { userCRUDRouter } from "./routes/user-crud-router.js";
import { dbConnect } from "./d-layer/db/index.js";

const app = express();
app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());
app.use("/users", userCRUDRouter);

dbConnect();

const dbConnection = mongoose.connection;

dbConnection.on("open", () => {
  app.listen(config.get("Server.port"), () => {
    console.log("running");
  });
});
