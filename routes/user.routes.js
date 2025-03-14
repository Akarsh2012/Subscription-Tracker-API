import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: " Get all the users" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: " Get  a user by its id" });
});

userRouter.post("/", (req, res) => {
  res.send({ title: " Create a new user" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: " Update user" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: " DELETE user" });
});

export default userRouter;
