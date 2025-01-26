import mongoose, {Schema} from "mongoose";


const categorySchema = mongoose.Schema({
    id: { 
        type: Number, 
        default: () => 100 + Math.floor(Math.random() * 10000), // Generate random ID between 100 and 10099
        unique: true 
      },
    categoryname: {
        type: String,
        required: true,
    },
    sequence: {
        type: String,
        required: true
    },
      status: { 
        type: String, 
        enum: ['active', 'inactive'], 
        default: 'active' 
    },
    avatar: {
        type: String, //https://cloudinary.com/
        required: true
    } 
},
{
    timestamps: true
});
export const Category = mongoose.model("Category", categorySchema)
//module.exports = mongoose.model('Category', categorySchema);