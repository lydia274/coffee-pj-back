const { Schema, model } = require("mongoose");

const CoffeeShopSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    image: {
      type: String,
      required: [true, "Image URL is required."],
    },
    address: {
      type: String,
      required: true,
    },
    openingHours: {
      type: String,
      required: [true, "Opening hours are required."],
    },
    servings: [
      {
        type: String,
        required: true,
      },
    ],
    services: [
      {
        type: String,
        required: true,
      },
    ],

    rating: {
      type: Schema.Types.Number,
      min: 1,
      max: 5,
      validate: {
        validator: (value) => Number.isInteger(value),
        message: ({ value }) => `${value} is not an integer value`,
      },
    },
  },
  {
    timestamps: true,
  }
);

const CoffeeShop = model("CoffeeShop", CoffeeShopSchema);

module.exports = CoffeeShop;
