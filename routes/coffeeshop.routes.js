const express = require("express")
const router = express.Router()
const CoffeeShop = require("../models/CoffeeShop.model")

const { isAdmin, isEditor } = require("../middleware/jwt.middleware.js")

// COFFEESHOP GET user, editor, admin
router.get("/", async (req, res, next) => {
  try {
    const coffeeShops = await CoffeeShop.find()
    res.json(coffeeShops)
  } catch (err) {
    next(err)
  }
})

// COFFEESHOP POST editor, admin

// [isEditor, isAdmin]
router.post("/", async (req, res, next) => {
  const { name, image, address, openingHours, servings, services, rating } =
    req.body
  try {
    const newCoffeeShop = await CoffeeShop.create({
      name,
      image,
      address,
      openingHours,
      servings,
      services,
      rating,
    })
    res.status(201).json(newCoffeeShop)
  } catch (err) {
    next(err)
  }
})

// COFFEESHOP UPD editor, admin

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

// COFFEESHOP DELETE editor, admin

router.delete("/:id", [isEditor, isAdmin], async (req, res, next) => {
  const { id } = req.params
  try {
    await CoffeeShop.findByIdAndRemove(id)
    res.json({ message: "CoffeeShop has been removed." })
  } catch (err) {
    next(err)
  }
})

module.exports = router
