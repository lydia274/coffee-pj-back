const { expressjwt: jwt } = require("express-jwt")
const User = require("../models/User.model")

// Instantiate the JWT token validation middleware
const isAuthenticated = jwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ["HS256"],
  requestProperty: "payload",
  getToken: getTokenFromHeaders,
})

// Function used to extract the JWT token from the request's 'Authorization' Headers
function getTokenFromHeaders(req) {
  console.log(req.headers)
  // Check if the token is available on the request Headers
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    // Get the encoded token string and return it
    const token = req.headers.authorization.split(" ")[1]
    return token
  }

  return null
}

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.payload._id)
    if (user.status !== "Admin") {
      return res.status(401).send("You must be admin to perform this action")
    } else {
      next()
    }
  } catch (error) {
    return res.status(401).send("401: Unauthorized! Must be Admin")
  }
}

const isEditor = async (req, res, next) => {
  try {
    const user = await User.findById(req.payload._id)
    console.log(user)
    if (user.status !== "Editor") {
      return res.status(401).send("You must be Editor to perform this action")
    }
    next()
  } catch (error) {
    return res.status(401).send("401: Unauthorized! Must be Admin")
  }
}

// Export the middleware so that we can use it to create protected routes
module.exports = {
  isAuthenticated,
  isAdmin,
  isEditor,
}
