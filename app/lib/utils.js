import mongoose from "mongoose";

export const connectDB = async () => {
    const connection = {
        isConnected: false
    };
    
    try {
        if (connection.isConnected) return;
        
        const db = await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true, // Add this line to handle the deprecation warning
            useUnifiedTopology: true // Add this line to handle the deprecation warning
        });
        connection.isConnected = db.connections[0].readyState;

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error(error);
    }
}