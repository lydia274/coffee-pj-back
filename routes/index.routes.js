const express = require("express")
const router = express.Router()
const {
  isAuthenticated,
  isAdmin,
  isEditor,
} = require("../middleware/jwt.middleware.js")

module.exports = router
