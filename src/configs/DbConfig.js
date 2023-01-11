import mongoose from "mongoose";
import 'dotenv/config';

export async function createConnection(){
    try {
       await mongoose.connect(process.env.DB_URL);
       console.log("connection established");
    } catch (error) {
        console.log(error);
    }
}