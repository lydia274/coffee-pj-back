const mongoose = require("mongoose")
const Listing = require("../models/Listing.model")

const Listing = [
  {
    name: "Top-10 places",
    description: "very good",
    creator: "bla", //id create the editor
    list: [], //an array of ids
  },
]

async function listing() {
  try {
    await Listing.deleteMany()
    await Listing.create(listings)
    console.log("Created a listing")
    process.exit()
  } catch (error) {
    console.log(error)
  }
}

listing()
