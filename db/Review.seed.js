const mongoose = require("mongoose")
const Review = require("../models/Review.model")

const Review = [
  {
    creator: ,//id create an editor
    coffeeshop: ,//id create a CS

    text: "WHATEVER REVIEW It’s nice, cozy atmosphere, modern design. In nice Paris district, established in 2021. Specialty coffee, they also do filter."
  }  
]

async function review() {
  try {
    await Review.deleteMany()
    await Review.create(reviews)
    console.log("Created reviews")
    process.exit()
  } catch (error) {
    console.log(error)
  }
}

review()
