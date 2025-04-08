import mongoose from "mongoose";
import { config } from "./dotenv.config.js";

export const connectMongoDB = async () => {
try {
    mongoose.set("strictQuery", true);
    mongoose.connect(config.MONGODB_URI, {
        dbName: config.DBNAME,
    }) 
    console.log("🚀 Connected to MongoDB!");
} catch (error) {
    console.error("❌ MongoDB connection error:", error);
        process.exit(1);
}

}
