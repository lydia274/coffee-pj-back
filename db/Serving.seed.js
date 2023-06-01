const mongoose = require("mongoose");
const Serving = require("../models/Serving.model");

const MONGODB_URI = "mongodb://localhost:27017/coffee-project";

const servings = [
  {
    name: "Espresso",
    image: "https://example.com/espresso.jpg",
  },
  {
    name: "Filter Coffee",
    image: "https://example.com/filtercoffee.jpg",
  },
  {
    name: "Cold Brew/Drip",
    image: "https://example.com/coldbrew.jpg",
  },
  {
    name: "Breakfast",
    image: "https://example.com/breakfast.jpg",
  },
  {
    name: "Plant-based Milk",
    image: "https://example.com/plantbasedmilk.jpg",
  },
];

mongoose.connect(MONGODB_URI, {}).then(() => {
  console.log("Connected to MongoDB from mongoose");

  // Drop database to avoid duplicates
  mongoose.connection.db.dropDatabase();

  // Create servings
  Serving.create(servings)
    .then((servingsFromDB) => {
      console.log(`Created ${servingsFromDB.length} servings`);

      // Once created, close the DB connection
      mongoose.connection.close();
    })
    .catch((err) =>
      console.log(
        `An error occurred while creating servings from the DB: ${err}`
      )
    );
});
