import { Router } from "express";
import { signUp, login } from "@/controllers/user.js";

const authRouter = Router();
authRouter.post("/register", signUp);
authRouter.post("/login", login);

export default authRouter; 
 