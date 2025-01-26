import mongoose, {Schema} from "mongoose";


const subCategorySchema = mongoose.Schema({
  subcategoryname: {
      type: String,
      required: true,
  },
  categoryname: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required:true
  },
},{
  timestamps: true
})


export const SubCategory = mongoose.model("SubCategory", subCategorySchema)
