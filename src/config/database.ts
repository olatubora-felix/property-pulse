import mongoose from "mongoose";
let connection = false;
const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connection) {
    console.log("Using existing connection");
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL as string);
    connection = true;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
