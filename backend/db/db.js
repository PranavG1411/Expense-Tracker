const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection Error");
    console.log(error);
  }
};

module.exports = { db };


// This is a code snippet in JavaScript that exports a function called db. The function uses the mongoose library to connect to a MongoDB database specified in the MONGO_URL environment variable.

// The mongoose.set("strictQuery", false) line disables the strict mode for queries. This allows queries to be executed without having to conform to the strict rules of the MongoDB driver.

// The try-catch block is used to handle errors that might occur during the database connection process. If an error occurs, the function logs the error to the console.

// The module.exports = { db } line exports the db function, making it available for use in other parts of the code.