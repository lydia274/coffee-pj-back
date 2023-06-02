const mongoose = require("mongoose")
const Service = require("../models/Service.model")

const services = [
  {
    coffeeshop: "6478aa680e71a9509ea1f995",
    kidsFriendly: false,
    veganOptions: true,
    dogFriendly: true,
    outdoorSeating: true,
    acceptCreditCards: true,
    wheelchairAccess: false,
  },
]

module.exports = async function serviceSeed() {
  try {
    await Service.deleteMany()
    await Service.create(services)
    console.log("Created services")
  } catch (error) {
    console.log(error)
  }
}
