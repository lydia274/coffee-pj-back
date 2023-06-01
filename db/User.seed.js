const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/user.model");

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
];

async function seedUsers() {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://localhost:27017/coffee-project", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Delete any existing users
    await User.deleteMany();

    // Hash the passwords and create the users
    for (let user of users) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(user.password, salt);
      user.password = hash;

      await User.create(user);
    }

    console.log("Seeding successful");
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
}

seedUsers();
