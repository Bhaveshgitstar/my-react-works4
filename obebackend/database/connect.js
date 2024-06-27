// packages/server/database/connect.js
const mongoose = require("mongoose");
const { MONGODB_URI } = require("../config");

const connectToDatabase = () => {
  mongoose.set("strictQuery", true);
  return mongoose

    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database successfully ");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = {
  connectToDatabase,
};
