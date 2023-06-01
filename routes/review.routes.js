const express = require("express")
const router = express.Router()
const Review = require("../models/Review.model.js")

const { isAdmin, isEditor } = require("../middleware/jwt.middleware.js")

// REVIEW GET - all visitors, editor, admin

router.get("/", async (req, res, next) => {
  try {
    const reviews = await Review.find()
    res.json(reviews)
  } catch (err) {
    next(err)
  }
})

// REVIEW POST - editor, admin

router.post("/", [isEditor, isAdmin], async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body)
    res.json(newReview)
  } catch (err) {
    next(err)
  }
})

// REVIEW UPD - editor, admin

router.patch("/:id", [isEditor, isAdmin], async (req, res, next) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedReview)
  } catch (err) {
    next(err)
  }
})

// REVIEW DELETE - editor, admin

router.delete("/:id", [isEditor, isAdmin], async (req, res, next) => {
  const { id } = req.params
  try {
    await Review.findByIdAndRemove(id)
    res.json({ message: "Review has been removed." })
  } catch (err) {
    next(err)
  }
})

module.exports = router
