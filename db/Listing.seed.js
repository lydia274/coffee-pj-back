const mongoose = require("mongoose")
const Listing = require("../models/Listing.model")

const listings = [
  {
    name: "Top-10 places",
    description: "very good",
    creator: "b647890e70c4821fe8dcd1166la",
    list: [], //an array of ids
  },
]

module.exports = async function listingSeed() {
  try {
    await Listing.deleteMany()
    await Listing.create(listings)
    console.log("Created a listing")
    process.exit()
  } catch (error) {
    console.log(error)
  }
}
