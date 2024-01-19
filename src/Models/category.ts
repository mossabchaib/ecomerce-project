
import mongoose, { Schema, models } from "mongoose";

const create_categorySchema = new Schema(
  {
  Global_category:{
    type: String,
    required: true,
  },
  categorys:[],
  },
  { timestamps: true }
);

const create_category = models&&models.create_category  || mongoose.model("create_category", create_categorySchema);
export default create_category;