const express = require("express");
const router = express.Router();
const CoffeeShop = require("../models/CoffeeShop.model.");
const { isAdmin, isEditor } = require("../middleware/role.middleware.js");

router.get("/coffeeshop", async (req, res, next) => {
  try {
    const coffeeShops = await CoffeeShop.find();
    res.json(coffeeShops);
  } catch (err) {
    next(err);
  }
});

router.post("/coffeeshop", [isEditor, isAdmin], async (req, res, next) => {
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

router.patch("/coffeeshop/:id", [isEditor, isAdmin], async (req, res, next) => {
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

router.delete(
  "/coffeeshop/:id",
  [isEditor, isAdmin],
  async (req, res, next) => {
    const { id } = req.params;
    try {
      await CoffeeShop.findByIdAndRemove(id);
      res.json({ message: "CoffeeShop has been removed." });
    } catch (err) {
      next(err);
    }
  }
);

// Comment GET
router.get("/comment", async (req, res, next) => {
  try {
    const comment = await Comment.find();
    res.json(comment);
  } catch (err) {
    next(err);
  }
});

// Comment POST
router.post("/comment", [isEditor, isAdmin], async (req, res, next) => {
  try {
    const newComment = await Comment.create(req.body);
    res.json(newComment);
  } catch (err) {
    next(err);
  }
});

// Comment UPDATE
router.patch("/comment/:id", [isEditor, isAdmin], async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedComment = await Comment.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedComment);
  } catch (err) {
    next(err);
  }
});

// Comment DELETE
router.delete("/comment/:id", [isEditor, isAdmin], async (req, res, next) => {
  const { id } = req.params;
  try {
    await Comment.findByIdAndRemove(id);
    res.json({ message: "Comment has been removed." });
  } catch (err) {
    next(err);
  }
});

// Review routes

router.get("/review", async (req, res, next) => {
  try {
    const review = await Review.find();
    res.json(review);
  } catch (err) {
    next(err);
  }
});

router.post("/review", [isEditor, isAdmin], async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    res.json(newReview);
  } catch (err) {
    next(err);
  }
});

router.patch("/review/:id", [isEditor, isAdmin], async (req, res, next) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedReview);
  } catch (err) {
    next(err);
  }
});

router.delete("/review/:id", [isEditor, isAdmin], async (req, res, next) => {
  try {
    await Review.findByIdAndRemove(req.params.id);
    res.json({ message: "Review has been removed." });
  } catch (err) {
    next(err);
  }
});

// Listing routes

router.get("/listing", async (req, res, next) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    next(err);
  }
});

router.post("/listing", [isEditor, isAdmin], async (req, res, next) => {
  try {
    const newListing = await Listing.create(req.body);
    res.json(newListing);
  } catch (err) {
    next(err);
  }
});

router.patch("/listing/:id", [isEditor, isAdmin], async (req, res, next) => {
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedListing);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

// Services routes

// GET all services - accessible to user, editor, admin
router.get("/service", isUser, async (req, res, next) => {
  try {
    const service = await Services.find();
    res.json(service);
  } catch (error) {
    next(error);
  }
});

// POST a new service - accessible to editor, admin
router.post("/service", isEditor, async (req, res, next) => {
  try {
    const newService = await Service.create(req.body);
    res.json(newService);
  } catch (error) {
    next(error);
  }
});

// PATCH an existing service - accessible to editor, admin
router.patch("/service/:id", isEditor, async (req, res, next) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedService);
  } catch (error) {
    next(error);
  }
});

// DELETE a service - accessible to admin
router.delete("/service/:id", isAdmin, async (req, res, next) => {
  try {
    await Services.findByIdAndRemove(req.params.id);
    res.json({ message: "Service deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
