import mongoose from "mongoose";
const connection:any = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect("mongodb://localhost:27017/ecomerce");
    console.log("connect")
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error)
    
  }
};