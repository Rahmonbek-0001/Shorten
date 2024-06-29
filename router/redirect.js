import { Router } from "express";
import { Links } from "../models/links.js";
export const redirectRoute = Router();
redirectRoute.get("/:code", async (req, res, next) => {
  try {
    const { code } = req.params;
    const link = await Links.findOne({ linkCode: code });
    if (!link) {
      res.status(404).json("cannot find Link");
    }
    link.clicks += 1;
    await link.save()
    res.redirect(link.linkFrom);
    res.status(200);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
