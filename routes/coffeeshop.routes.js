const express = require("express")
const router = express.Router()
const CoffeeShop = require("../models/CoffeeShop.model")

const {
  isAuthenticated,
  isAdmin,
  isEditor,
} = require("../middleware/jwt.middleware.js")

// COFFEESHOP GET ALL user, editor, admin
router.get("/allcoffeeshops", async (req, res, next) => {
  try {
    const coffeeShops = await CoffeeShop.find()
    res.json(coffeeShops)
  } catch (err) {
    next(err)
  }
})
// COFFEESHOP GET a random coffee shop - user, editor, admin
router.get("/random", async (req, res, next) => {
  try {
    const coffeeShops = await CoffeeShop.find()
    // Get a random coffee shop from the list of all
    const randomIndex = Math.floor(Math.random() * coffeeShops.length)
    const randomCoffeeShop = coffeeShops[randomIndex]
    res.json(randomCoffeeShop)
  } catch (err) {
    next(err)
  }
})

//GET ONE CS by its ID

router.get("/:id", async (req, res, next) => {
  try {
    const coffeeShops = await CoffeeShop.find({ _id: req.params.id })
    res.json(coffeeShops)
  } catch (err) {
    next(err)
  }
})

// COFFEESHOP POST editor, admin
router.post("/", isAuthenticated, isEditor, async (req, res, next) => {
  const { name, image, address, openingHours, services } = req.body
  try {
    const newCoffeeShop = await CoffeeShop.create({
      name,
      image,
      address,
      openingHours,
      services,
    })
    res.status(201).json(newCoffeeShop)
  } catch (err) {
    next(err)
  }
})

// COFFEESHOP UPD editor, admin

router.patch("/edit/:id", isAuthenticated, isEditor, async (req, res, next) => {
  const { id } = req.params
  const { name, image, address, openingHours, servings, services, rating } =
    req.body
  try {
    const updatedCoffeeShop = await CoffeeShop.findByIdAndUpdate(
      id,
      { name, image, address, openingHours, services },
      { new: true }
    )
    res
      .status(200)
      .json({ message: "CoffeeShop has been updated!", updatedCoffeeShop })
  } catch (err) {
    next(err)
  }
})

// COFFEESHOP DELETE editor, admin

router.delete("/:id", isAuthenticated, isEditor, async (req, res, next) => {
  const { id } = req.params
  try {
    await CoffeeShop.findByIdAndRemove(id)
    res.json({ message: "Coffee shop has been removed." })
  } catch (err) {
    next(err)
  }
})

module.exports = router
