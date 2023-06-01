// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config()

// ℹ️ Connects to the database
require("./db")

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express")

const app = express()

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app)

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes")
app.use("/api", indexRoutes) //for index routes

const authRoutes = require("./routes/auth.routes")
app.use("/auth", authRoutes)

//coffeeshop routes
const coffeeroutes = require("./routes/coffeeshop.routes")
app.use("/coffeeshop", coffeeroutes)

//comment routes
const commentroutes = require("./routes/comment.routes")
app.use("/comment", commentroutes)

//Listing routes
const listingroutes = require("./routes/listing.routes")
app.use("/listing", listingroutes)

//review routes
const reviewroutes = require("./routes/review.routes")
app.use("/review", reviewroutes)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app)

module.exports = app
