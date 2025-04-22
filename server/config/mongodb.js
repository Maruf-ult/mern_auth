import mongoose from "mongoose";

const connectDB = async () => {
  try {
     await mongoose.connect(process.env.DB_URL, { dbName: "mern-auth" });
    console.log(`Database connected successfully`);
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`);
    process.exit(1); 
  }
};

export default connectDB;