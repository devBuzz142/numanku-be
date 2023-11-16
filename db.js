const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://root:root@" + process.env.MONGO_URI,
      {
        // These are just to get rid of deprecation warnings
        useNewUrlParser: true,
      }
    );
    console.log("MongoDB connected!");

    // close
    await conn.connection.close();
    console.log("MongoDB connection closed!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
