const { Schema, model } = require("mongoose")

const ServiceSchema = new Schema({
  coffeeshop: Schema.Types.ObjectId,
  kidsFriendly: Boolean,
  veganOptions: Boolean,
  dogFriendly: Boolean,
  outdoorSeating: Boolean,
  acceptCreditCards: Boolean,
  wheelchairAccess: Boolean,
})

const Service = model("Services", ServiceSchema)

module.exports = Service
