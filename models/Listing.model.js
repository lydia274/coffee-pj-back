const { Schema, model } = require("mongoose")
const CoffeeShop = require("./CoffeeShop.model.js")

const listingSchema = new Schema(
  {
    name: String,
    description: String,
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    coffeeshop: [
      {
        type: Schema.Types.ObjectId,
        ref: "CoffeeShop",
      },
    ],
  },

  {
    timestamps: true,
  }
)

const Listing = model("Listing", listingSchema)

module.exports = Listing
