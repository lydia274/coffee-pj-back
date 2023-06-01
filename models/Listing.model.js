const { Schema, model } = require("mongoose")
const CoffeeShop = require("./CoffeeShop.model")

const listingSchema = new Schema(
  {
    name: String,
    description: String,
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    list: [
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
