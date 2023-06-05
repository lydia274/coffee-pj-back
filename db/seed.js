const coffeeSeed = require("./CoffeeShop.seed")
const commentSeed = require("./Comment.seed")
const listingSeed = require("./Listing.seed")
const reviewSeed = require("./Review.seed")
const serviceSeed = require("./Service.seed")
const servingSeed = require("./Serving.seed")
const userSeed = require("./User.seed")
require("../db/index")
console.log("!!Hello from seed!!")

async function seed() {
  await coffeeSeed()
  await commentSeed()
  await listingSeed()
  await reviewSeed()
  await serviceSeed()
  await servingSeed()
  await userSeed()
  process.exit()
}

seed()
