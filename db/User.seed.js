const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const User = require("../models/User.model")

const users = [
  {
    email: "admin@test.com",
    password: "Test123!",
    name: "Admin",
    role: "admin",
  },
  {
    email: "editor@test.com",
    password: "Test123!",
    name: "Editor",
    role: "editor",
  },
]

module.exports = async function userSeed() {
  try {
    await User.deleteMany()
    users.forEach(async (user) => {
      const salt = bcrypt.genSaltSync(12)
      const hashedPassword = bcrypt.hashSync(user.password, salt)
      user.password = hashedPassword
      console.log(user)
      await User.create(user)
    })

    console.log("Created users")
  } catch (error) {
    console.log(error)
  }
}
