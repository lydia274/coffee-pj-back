const express = require("express");
const router = express.Router();
const CoffeeShop = require("../models/CoffeeShop.model.");
const { isAdmin, isEditor } = require("../middleware/role.middleware.js");

// BROWSE GET user, editor, admin
router.get("/browse", async (req, res, next) => {
  try {
    const coffeeShops = await CoffeeShop.find();
    res.json(coffeeShops);
  } catch (err) {
    next(err);
  }
});

// BROWSE POST editor, admin
router.post("/browse", [isEditor, isAdmin], async (req, res, next) => {
  const { name, image, address, openingHours, servings, services, rating } =
    req.body;
  try {
    const newCoffeeShop = await CoffeeShop.create({
      name,
      image,
      address,
      openingHours,
      servings,
      services,
      rating,
    });
    res.json(newCoffeeShop);
  } catch (err) {
    next(err);
  }
});

// BROWSE UPDATE editor, admin
router.patch("/browse/:id", [isEditor, isAdmin], async (req, res, next) => {
  const { id } = req.params;
  const { name, image, address, openingHours, servings, services, rating } =
    req.body;
  try {
    const updatedCoffeeShop = await CoffeeShop.findByIdAndUpdate(
      id,
      { name, image, address, openingHours, servings, services, rating },
      { new: true }
    );
    res.json(updatedCoffeeShop);
  } catch (err) {
    next(err);
  }
});

// BROWSE DELETE editor, admin
router.delete("/browse/:id", [isEditor, isAdmin], async (req, res, next) => {
  const { id } = req.params;
  try {
    await CoffeeShop.findByIdAndRemove(id);
    res.json({ message: "CoffeeShop has been removed." });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
