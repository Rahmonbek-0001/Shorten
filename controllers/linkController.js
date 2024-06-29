import { Links } from "../models/links.js";
import dotenv from "dotenv";
import Users from "../models/users.js";
import { customAlphabet } from "nanoid";
dotenv.config();
const nanoid = customAlphabet("1234567890abcdefhijklmnopqrstuvyz", 10);
// @desc Get all links
// @route GET api/links
export const getLinks = async (req, res) => {
  try {
    const links = await Links.find();
    return res.status(200).json(links);
  } catch (error) {
    return res.status(500).json(error);
  }
};
// @desc    Get single links
// @route   GET api/links:id
export const getLink = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const link = links.find((link) => link.id === id);
  if (!link) {
    const error = new Error(`A link with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(link);
};
// @desc    Create new links
// @route   POST api/links
export const createLink = async (req, res, next) => {
  const { url } = req.body;
  if (!url) {
    const error = new Error(`Please url required`);
    error.status = 400;
    return next(error);
  }
  const user = req.user;
  const userData = await Users.findOne({ name: user?.name });
  console.log(userData);
  if (!userData) {
    const error = new Error(`User not found`);
    error.status = 400;
    return next(error);
  }
  const link = await Links.findOne({ owner: userData?._id, linkFrom: url });
  if (link) {
    const error = new Error(`Url already exist`);
    error.status = 400;
    return next(error);
  }
  const baseUrl = process.env.BASE_URL;
  const code = nanoid(7);
  const to = baseUrl + "/t/" + code;
  const newLink = await Links({
    linkFrom: url,
    linkTo: to,
    linkCode: code,
    owner: userData?._id,
  });
  await newLink.save();

  res.status(201).json({ message: "generated successfully" });
};
// @desc    Update links
// @route   update api/links:id
export const updateLink = (req, res, next) => {
  const id = parseInt(req.params.id);
  const link = links.find((link) => link.id === id);
  if (!link) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  link.title = req.body.title;
  res.status(200).json(links);
};
// @desc    Delete links
// @route   Delete api/links:id
export const deleteLink = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const link = links.find((link) => link.id === id);
  if (!link) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  links = links.filter((link) => link.id !== id);
  res.status(200).json(links);
};
