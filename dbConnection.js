const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user_2:samuelZE06-11@cluster06797.kcc9i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster06797",
      {
        dbName: "journal",
      }
    );
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

module.exports = connectDB;
