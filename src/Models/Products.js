
import mongoose, { Schema, models } from "mongoose";

const product_createSchema = new Schema(
  {
     title: {
       type: String,
       required: true,
     },
     price: {
       type: String,
       required: true,
     },
     description: {
       type: String,
       required: true,
     },
     stock:{
       type: String,
       required: true,
    },
   Global_category:{ 
    type: String,
    required: true,},
   category:[],
    image:[],
      color:[],
      pointure:[],
      size:[],
 
  },
  { timestamps: true }
);

const product_create= models&& models.product_create || mongoose.model("product_create", product_createSchema);
 
export default product_create;