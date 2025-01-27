import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { Product } from "../models/product.model.js";
//import { Category } from "../models/category.model.js";
import { SubCategory } from "../models/subcatogary.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Category } from "../models/category.model.js";


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

const getproducts = asyncHandler(async(req, res) => {
    const products = await Product.find().populate({
        
            path: "SubCategory",
            populate: {
                path: "categoryname",
                model: "Category"
            }
    })
    return res.status(200).json(
        new ApiResponse(200, products, "Products fetched successfully")
    );
});

export {addproduct, getproducts}