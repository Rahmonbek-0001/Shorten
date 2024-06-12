import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDataBase = async () => {
  try {
    await connect(process.env.mongodb_key);
    console.log("database connect");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
