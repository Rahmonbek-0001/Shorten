import express from "express";
import dotenv from "dotenv";
import links from "./router/links.js";
import authRouter from "./router/user.js";
import { redirectRoute } from "./router/redirect.js";
// import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
import { connectDataBase } from "./db/db.js";
import cors from "cors";
import path from "path";
dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();

const __dirname = path.resolve();
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Api Cors
app.use(cors());

// Router
app.use("/api/auth", authRouter);
app.use("/api/links", links);
app.use("/t", redirectRoute);
// Error hendler
// app.use(notFound);
app.use(errorHandler);
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

// Connect db
connectDataBase();

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
