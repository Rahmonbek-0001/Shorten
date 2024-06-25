import express from "express";
import dotenv from "dotenv";
import links from "./router/links.js";
import authRouter from "./router/user.js";
// import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
import { connectDataBase } from "./db/db.js";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Api Cors
app.use(cors);

// Router
app.use("/api/auth", authRouter);
app.use("/api/links", links);

// Error hendler 
app.use(notFound);
app.use(errorHandler);

// Connect db
connectDataBase();

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
