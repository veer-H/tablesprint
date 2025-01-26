import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { Product } from "../models/product.model.js";
//import { Category } from "../models/category.model.js";
import { SubCategory } from "../models/subcatogary.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const addproduct = asyncHandler( async (req, res) => {
   
 

    const { productname, category, subcategory } = req.body
    console.log(productname, category, subcategory)
    if (
        [ productname, category, subcategory].some((field) => field === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }
    
    const subCategoryId = await SubCategory.findOne({subcategoryname: subcategory})
   // const categoryId = await Category.findOne({category: category})
    const existedProduct = await Product.findOne({
        $or: [{ productname }, { category }, { subcategory }]
    })
    if (existedProduct) {
        throw new ApiError(409, "Product with productname or category or subcategory already exists")
    }
    
    
    const product = await Product.create({
        name: productname.toLowerCase(), 
        SubCategory: subCategoryId._id
    })
    const createdProduct = await Product.findById(product._id).select(
        
    )
    return res.status(201).json(
        new ApiResponse(200, createdProduct, "Product created successfully")
    )
    
} )

export {addproduct}