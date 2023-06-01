const express = require("express")
const router = express.Router()
const Listing = require("../models/Listing.model")
const { isAdmin, isEditor } = require("../middleware/jwt.middleware.js")

// LISTING GET - everyone

router.get("/", async (req, res, next) => {
  try {
    const listings = await Listing.find()
    res.json(listings)
  } catch (err) {
    next(err)
  }
})

// LISTING POST - editor, admin

router.post("/", [isEditor, isAdmin], async (req, res, next) => {
  try {
    const newListing = await Listing.create(req.body)
    res.json(newListing)
  } catch (err) {
    next(err)
  }
})

// LISTING PATCH - editor, admin

router.patch("/:id", [isEditor, isAdmin], async (req, res, next) => {
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedListing)
  } catch (err) {
    next(err)
  }
})
// LISTING DELETE - editor, admin

router.delete("/:id", [isEditor, isAdmin], async (req, res, next) => {
  const { id } = req.params
  try {
    await Listing.findByIdAndRemove(id)
    res.json({ message: "Listing has been removed." })
  } catch (err) {
    next(err)
  }
})

module.exports = router
