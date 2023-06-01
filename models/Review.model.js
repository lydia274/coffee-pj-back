const { Schema, model } = require("mongoose")
const User = require("./User.model")

const reviewSchema = new Schema(
  {
    name: String,
    description: {
      type: String,
      maxLength: 500,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    list: [
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
