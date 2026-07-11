import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const UserRouter = express.Router();

UserRouter.post("/login", loginUser);
UserRouter.post("/register", registerUser);

export default UserRouter;
