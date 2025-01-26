import mongoose, {Schema} from "mongoose";

const productSchema = mongoose.Schema({
  name: {
      type: String,
      required: true,
  },
  
  SubCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory',
      required:true
  }
},
{
  timestamps: true
});

export const Product = mongoose.model("Product", productSchema)
