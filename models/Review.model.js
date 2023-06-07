const { Schema, model } = require("mongoose")
const User = require("./User.model")

const reviewSchema = new Schema(
  {
    title: String,
    description: {
      type: String,
      maxLength: 500,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    coffeeshop: [
      {
        type: Schema.Types.ObjectId,
        ref: "Coffeeshop",
      },
    ],
  },

  {
    timestamps: true,
  }
)

const Review = model("Review", reviewSchema)

module.exports = Review
