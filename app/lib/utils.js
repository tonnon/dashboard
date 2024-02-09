import mongoose from "mongoose";

export const connectDB = async () => {
    const connection = {};
    
    try {
        if (connection.isConnected) return;
        const db = await mongoose.connect(process.env.MONGODB);
        connection.isConnected = db.connection[0].readyState;
    } catch (error) {
        throw new Error(error);
    }
}