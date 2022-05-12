import express from "express";
import { userModel } from "../models/user-model";
const userAuthRouter = express.Router();

userAuthRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
  } catch (error) {}
});
