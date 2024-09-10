import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
  try {
    // console.log(process.env.DB_URL)
    await mongoose.connect(process.env.DB_URL as string, {
      dbName: "arifa-mart",
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
