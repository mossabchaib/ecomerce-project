
import mongoose, { Schema, models } from "mongoose";

const user_creatSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    job:{
      type: String,
      required: true, 
    },
    isActive:{
      type: Boolean,
      required: true,
    },
    category_interiser:[],
  },
  { timestamps: true }
);

const user_creat=models&&models.user_creat || mongoose.model("user_creat", user_creatSchema);

export default user_creat;