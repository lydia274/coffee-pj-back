const express = require("express")
const router = express.Router()
const Serving = require("../models/Serving.model.js")
const { isAdmin, isEditor } = require("../middleware/jwt.middleware.js")

// Serving GET user, editor, admin
router.get("/", async (req, res, next) => {
  try {
    const servings = await Serving.find()
    res.json(servings)
  } catch (err) {
    next(err)
  }
})

// Serving POST editor, admin
router.post("/", [isEditor, isAdmin], async (req, res, next) => {
  const { name, image } = req.body
  try {
    const newServing = await Serving.create({
      name,
      image,
    })
    res.status(201).json(newServing)
  } catch (err) {
    next(err)
  }
})

// Serving UPD editor, admin

router.patch("/:id", [isEditor, isAdmin], async (req, res, next) => {
  const { id } = req.params
  const { name, image } = req.body
  try {
    const updatedServing = await Serving.findByIdAndUpdate(
      id,
      { name, image },
      { new: true }
    )
    res.json(updatedServing, { message: "Serving has been updated!" })
  } catch (err) {
    next(err)
  }
})

// Serving DELETE editor, admin

router.delete("/:id", [isEditor, isAdmin], async (req, res, next) => {
  const { id } = req.params
  try {
    await Serving.findByIdAndRemove(id)
    res.json({ message: "Serving has been removed." })
  } catch (err) {
    next(err)
  }
})

module.exports = router
