const { Schema, model } = require("mongoose")
const User = require("./User.model")

const listingSchema = new Schema(
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
    timestamps: true, //to indicate when it was created
  }
)

const Listing = model("Listing", listingSchema)

module.exports = Listing
