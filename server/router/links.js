import express from 'express'
import {
  getLink,
  getLinks,
  createLink,
  updateLink,
  deleteLink
} from '../controllers/linkController.js'
const router = express.Router()

//Get all posts

router.get('/', getLink)

// Get single post

router.get('/:id', getLinks)

// Crate new posts

router.post('/', createLink)

// Update Post
router.put('/:id', updateLink)

//Delete post

router.delete('/:id', deleteLink)

export default router
