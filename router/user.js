import { Router } from "express";
import { signUp, login } from "../controllers/user.js";

const authRouter = Router();
<<<<<<< HEAD:server/router/user.js
authRouter.post("/hi", signUp);
=======
authRouter.post("/register", signUp);
>>>>>>> 99d5452e8c544ed2c8cbc24abc571530ecd91bb7:router/user.js
authRouter.post("/login", login);

export default authRouter; 
 