const { Schema, model } = require("mongoose")

const CoffeeShopSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the name of the coffee shop"],
    },
    image: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    openingHours: {
      type: String,
    },
    services: { type: String },
  },
  {
    timestamps: true,
  }
)

const CoffeeShop = model("CoffeeShop", CoffeeShopSchema)

module.exports = CoffeeShop
