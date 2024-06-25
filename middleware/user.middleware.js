import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const { jwt_secret } = process.env;
export async function userMiddleware(req, res, next) {
  if (res.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.auth.split(" ")[1]; // token
    if (!token) {
      return res.status(401).json({ message: "User login first" });
    }
    const decode = jwt.decode(token, jwt_secret);
    if (!decode) {
      return res.status(401).json({ message: "User login first" });
    }
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).json({ message: "User permission denied" });
  }
}
