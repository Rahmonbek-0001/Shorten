import { Router } from "express";
import { signUp, login } from "../controllers/user.js";

const authRouter = Router();
<<<<<<< Updated upstream
authRouter.post("/hi", signUp);
=======
authRouter.post("/register", signUp);
authRouter.post("/login", login);
>>>>>>> Stashed changes

export default authRouter; 
 