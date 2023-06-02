const express = require("express")
const router = express.Router()
const Comment = require("../models/Comment.model")

const {
  isAuthenticated,
  isAdmin,
  isEditor,
} = require("../middleware/jwt.middleware.js")

// COMMENT GET all visitors, editor, admin
router.get("/", async (req, res, next) => {
  try {
    const comments = await Comment.find()
    res.json(comments)
  } catch (err) {
    next(err)
  }
})

// Comment POST only auth users, editor, admin
router.post("/", isAuthenticated, async (req, res, next) => {
  try {
    const newComment = await Comment.create(req.body)
    res.json(newComment)
  } catch (err) {
    next(err)
  }
})

// Comment DELETE - editor, admin
router.delete("/:id", [isEditor, isAdmin], async (req, res, next) => {
  const { id } = req.params
  try {
    await Comment.findByIdAndRemove(id)
    res.json({ message: "Comment has been removed." })
  } catch (err) {
    next(err)
  }
})

//extra feature: a user can delete their own comment, but not the comment of other users

module.exports = router
