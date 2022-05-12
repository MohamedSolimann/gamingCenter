import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../d-layer/user-data/user-crud-data.js";

const userCRUDRouter = express.Router();

userCRUDRouter.post("/", async (req, res) => {
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
userCRUDRouter.get("/", async (req, res) => {
  const users = await getUsers();
  res.status(200).json({ message: "Success", data: users });
});
userCRUDRouter.get("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await getUser(userId);
    res.status(201).json({ message: "Success", data: user });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "server error" });
    }
  }
});
userCRUDRouter.put("/:id", async (req, res) => {
  const { username, password, image, bio, age, mobile, videos, email, games } =
    req.body;
  const userId = req.params.id;
  try {
    const user = await getUser(userId);
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
    res.status(201).json({ message: "Success", data: updatedUser });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "server error" });
    }
  }
});
userCRUDRouter.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await getUser(userId);
    const deletedUser = await deleteUser(userId);
    res.status(201).json({ message: "Success", data: deletedUser });
  } catch (error) {
    if (error.message) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "server error" });
    }
  }
});
export { userCRUDRouter };
