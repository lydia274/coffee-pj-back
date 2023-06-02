const mongoose = require("mongoose")
const Comment = require("../models/Comment.model")

const comments = [
  {
    creator: "647890e70c4821fe8dcd1166", //id of a user
    coffeeshop: "6478aa680e71a9509ea1f995", //id of a cs

    text: "It’s nice, cozy atmosphere, modern design. In nice Paris district, established in 2021. Specialty coffee, they also do filter.",
  },
]

module.exports = async function commentSeed() {
  try {
    await Comment.deleteMany()
    await Comment.create(comments)
    console.log("Created comments")
    process.exit()
  } catch (error) {
    console.log(error)
  }
}
