const mongoose = require("mongoose")
const Comment = require("../models/Comment.model")

const Comment = [
  {
    creator: "creator", //id create a user
    coffeeshop: "coffeeshop", //id create a CS

    text: "It’s nice, cozy atmosphere, modern design. In nice Paris district, established in 2021. Specialty coffee, they also do filter.",
  },
]

async function comment() {
  try {
    await Comment.deleteMany()
    await Comment.create(comments)
    console.log("Created comments")
    process.exit()
  } catch (error) {
    console.log(error)
  }
}

comment()
