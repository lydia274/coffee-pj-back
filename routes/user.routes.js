const express = require("express")
const router = express.Router()
const User = require("../models/User.model")

const {
  isAdmin,
  isEditor,
  isAuthenticated,
} = require("../middleware/jwt.middleware.js")

//Get all the users - available only to admin

router.get("/", isAuthenticated, isAdmin, async (req, res, next) => {
  try {
    const allUsers = await User.find()
    res.json(allUsers)
  } catch (err) {
    next(err)
  }
})

router.patch("/:id", [isEditor, isAdmin], async (req, res, next) => {
  const { id } = req.params
  const { name, image, address, openingHours, servings, services, rating } =
    req.body
  try {
    const updatedCoffeeShop = await CoffeeShop.findByIdAndUpdate(
      id,
      { name, image, address, openingHours, servings, services, rating },
      { new: true }
    )
    res.json(updatedCoffeeShop, { message: "CoffeeShop has been updated!" })
  } catch (err) {
    next(err)
  }
})

module.exports = router
