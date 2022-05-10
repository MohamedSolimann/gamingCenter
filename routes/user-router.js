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
router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await getUser(userId);
    res.status(201).json({ message: "Success", data: user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.put("/:id", async (req, res) => {
  const { username, password, image, bio, age, mobile, videos, email, games } =
    req.body;
  const userId = req.params.id;
  const updatedUser = await updateUser(
    {
      username,
      password,
      image,
      bio,
      age,
      mobile,
      videos,
      email,
      games,
    },
    userId
  );
  res.status(201).json({ message: "Success", data: newUser });
});

export { router };
