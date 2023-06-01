const { Schema, model } = require("mongoose")
const User = require("./User.model")

const servingSchema = new Schema({
  name: String,
  image: String,
})

const Serving = model("Serving", servingSchema)

module.exports = Serving
