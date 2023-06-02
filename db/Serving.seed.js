const mongoose = require("mongoose")
const Serving = require("../models/Serving.model")

const servings = [
  {
    name: "Espresso",
    image: "https://example.com/espresso.jpg",
  },
  {
    name: "Filter Coffee",
    image: "https://example.com/filtercoffee.jpg",
  },
  {
    name: "Cold Brew/Drip",
    image: "https://example.com/coldbrew.jpg",
  },
  {
    name: "Breakfast",
    image: "https://example.com/breakfast.jpg",
  },
  {
    name: "Plant-based Milk",
    image: "https://example.com/plantbasedmilk.jpg",
  },
]

module.exports = async function servingSeed() {
  try {
    await Serving.deleteMany()
    await Serving.create(servings)
    console.log("Created serving")
  } catch (error) {
    console.log(error)
  }
}
