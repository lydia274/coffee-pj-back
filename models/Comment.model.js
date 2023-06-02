const { Schema, model } = require("mongoose")
const User = require("../models/User.model")

const commentSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    coffeeshop: {
      type: Schema.Types.ObjectId,
      ref: "CoffeeShop",
    },
    text: {
      type: String,
      maxLength: 200,
    },
  },

  {
    timestamps: true,
  }
)

const Comment = model("Comment", commentSchema)

module.exports = Comment
