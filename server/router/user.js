import { Router } from "express";
import { signUp, login } from "../controllers/user.js";
export const authRouter = Router();

authRouter.post("/", signUp);
