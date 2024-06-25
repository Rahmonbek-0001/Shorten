import bcrypt from "bcrypt";
import Users from "../models/users.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await Users.find({ $or: [{ name }, { email }] });

    if (user?.length !== 0) {
      return res.status(401).json({ message: "User already registered" });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new Users({
      email,
      name,
      password: hashPassword,
    });
    await newUser.save();
    const token = jwt.sign(
      {
        name: newUser.name,
        email: newUser.email,
      },
      process.env.jwt_secret
    );
    return res.status(201).json({
      message: "User sign Up succes full",
      token,
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found please sign up first" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(404).json({ message: "password incorrect" });
    }
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.jwt_secret
    );
    return res.status(200).json({ message: "login successfully", token, user });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
