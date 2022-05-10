import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../d-layer/user-data.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password, image, bio, age, mobile, videos, email, games } =
    req.body;
  const newUser = await createUser({
    username,
    password,
    image,
    bio,
    age,
    mobile,
    videos,
    email,
    games,
  });
  res.status(201).json({ message: "Success", data: newUser });
});
router.get("/", async (req, res) => {
  const users = await getUsers();
  res.status(200).json({ message: "Success", data: users });
});
router.post("/", async (req, res) => {
  const { username, password, image, bio, age, mobile, videos, email, games } =
    req.body;
  const newUser = await createUser({
    username,
    password,
    image,
    bio,
    age,
    mobile,
    videos,
    email,
    games,
  });
  res.status(201).json({ message: "Success", data: newUser });
});
router.post("/", async (req, res) => {
  const { username, password, image, bio, age, mobile, videos, email, games } =
    req.body;
  const newUser = await createUser({
    username,
    password,
    image,
    bio,
    age,
    mobile,
    videos,
    email,
    games,
  });
  res.status(201).json({ message: "Success", data: newUser });
});

export { router };
