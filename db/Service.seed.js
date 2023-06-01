const mongoose = require("mongoose")
const Student = require("../models/Service.model")

const Service = [
  {
    name: "CoffeeShop1",
    kidsFriendly: false,
    veganOptions: true,
    dogFriendly: true,
    outdoorSeating: true,
    acceptCreditCards: true,
    wheelchairAccess: false,
  },
  {
    name: "CoffeeShop2",
    kidsFriendly: false,
    veganOptions: true,
    dogFriendly: true,
    outdoorSeating: true,
    acceptCreditCards: true,
    wheelchairAccess: false,
  },
  {
    name: "CoffeeShop3",
    kidsFriendly: false,
    veganOptions: true,
    dogFriendly: true,
    outdoorSeating: true,
    acceptCreditCards: true,
    wheelchairAccess: false,
  },
  {
    name: "CoffeeShop4",
    kidsFriendly: false,
    veganOptions: true,
    dogFriendly: true,
    outdoorSeating: true,
    acceptCreditCards: true,
    wheelchairAccess: false,
  },
  {
    name: "CoffeeShop5",
    kidsFriendly: false,
    veganOptions: true,
    dogFriendly: true,
    outdoorSeating: true,
    acceptCreditCards: true,
    wheelchairAccess: false,
  },
  {
    name: "CoffeeShop6",
    kidsFriendly: false,
    veganOptions: true,
    dogFriendly: true,
    outdoorSeating: true,
    acceptCreditCards: true,
    wheelchairAccess: false,
  },
  {
    name: "CoffeeShop7",
    kidsFriendly: false,
    veganOptions: true,
    dogFriendly: true,
    outdoorSeating: true,
    acceptCreditCards: true,
    wheelchairAccess: false,
  },
  {
    name: "CoffeeShop8",
    kidsFriendly: false,
    veganOptions: true,
    dogFriendly: true,
    outdoorSeating: true,
    acceptCreditCards: true,
    wheelchairAccess: false,
  },

  {
    name: "CoffeeShop9",
    kidsFriendly: false,
    veganOptions: true,
    dogFriendly: true,
    outdoorSeating: true,
    acceptCreditCards: true,
    wheelchairAccess: false,
  },
  {
    name: "CoffeeShop10",
    kidsFriendly: false,
    veganOptions: true,
    dogFriendly: true,
    outdoorSeating: true,
    acceptCreditCards: true,
    wheelchairAccess: false,
  },
]

async function service() {
  try {
    await Service.deleteMany()
    await Service.create(services)
    console.log("Created services")
    process.exit()
  } catch (error) {
    console.log(error)
  }
}

service()
