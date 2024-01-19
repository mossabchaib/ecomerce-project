'use'
import mongoose, { Schema, models } from "mongoose";


 const formation_clien_and_Card_Schema = new Schema({
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
   numiro_client: {
     type: String,
     required: true,
   },
   city:{
    type: String,
    required: true,
  },
  State:{
    type: String,
    required: true,
  },
  priceTotle: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  verifer:{
    type: String,
    required: true,
  },
  Recent_Orders:{
    type: String,
    required: true,
  },
  card:[]

 }, { timestamps: true });
 
 const formation_clien_and_Card = models&&models.formation_clien_and_Card || mongoose.model("formation_clien_and_Card", formation_clien_and_Card_Schema);
 export default formation_clien_and_Card
 