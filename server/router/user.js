import { Router } from "express";
import { signUp, login } from "../controllers/user.js";

const authRouter = Router();
authRouter.post("/hi", signUp);

export default authRouter;
