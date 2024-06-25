import express from "express";
import {
  getLink,
  getLinks,
  createLink,
  updateLink,
  deleteLink,
} from "../controllers/linkController.js";
import { userMiddleware } from "../middleware/user.middleware.js";
const router = express.Router();

//Get all posts
router.get("/", getLinks);

// Get single post
router.get("/:id", getLink);

// Crate new posts
router.post("/", userMiddleware, createLink);

// Update Post
router.put("/:id", updateLink);

//Delete post
router.delete("/:id", deleteLink);

export default router;
