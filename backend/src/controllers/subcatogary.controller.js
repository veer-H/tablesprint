import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { SubCategory} from "../models/subcatogary.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { Category } from "../models/category.model.js";

const addsubcategory = asyncHandler( async (req, res) => {
   


    const {subCategory, catagory, sequence } = req.body


    

    if (
        [subCategory, catagory, sequence].some((field) =>typeof field === 'string' && field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedsubCategory = await SubCategory.findOne({  subcategoryname: subCategory }
    )

    if (existedsubCategory) {
        throw new ApiError(409, "subCategory with subCategory or catagory already exists")
    }
   

    
   


    

   
   
    const categoryId = await Category.findOne({
        categoryname: catagory
    })
    
    const createdsubCategory = await SubCategory.create({
        subcategoryname: subCategory.toLowerCase(),
        categoryname: categoryId._id,
        sequence: sequence,
        
    })

   

    if (!createdsubCategory) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdsubCategory, "User registered Successfully")
    )

} )

const editsubcategory = asyncHandler(async(req, res) => {
    const { id } = req.params;
    const { subCategory, catagory, sequence } = req.body;

    const existingSubCategory = await SubCategory.findById(id);

    if (!existingSubCategory) {
        throw new ApiError(404, "Subcategory not found");
    }

    if (subCategory) {
        const subCategoryExists = await SubCategory.findOne({ 
            subCategory: subCategory.toLowerCase(), 
            _id: { $ne: id } 
        });
        if (subCategoryExists) {
            throw new ApiError(409, "Subcategory with this name already exists");
        }
        existingSubCategory.subcategory = subCategory.toLowerCase();
    }

    if (catagory) {
        const catagoryExists = await SubCategory.findOne({ 
            catagory: catagory.toLowerCase(), 
            _id: { $ne: id } 
        });
        if (catagoryExists) {
            throw new ApiError(409, "Category with this name already exists");
        }
        existingSubCategory.category = catagory.toLowerCase();
    }

    if (sequence) {
        existingSubCategory.sequence = sequence;
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    if (avatarLocalPath) {
        const avatar = await uploadOnCloudinary(avatarLocalPath);
        if (!avatar) {
            throw new ApiError(400, "Avatar file upload failed");
        }
        existingSubCategory.avatar = avatar.url;
    }

    const updatedSubCategory = await existingSubCategory.save();

    return res.status(200).json(
        new ApiResponse(200, updatedSubCategory, "Subcategory updated successfully")
    );
});

const deletesubcategory = asyncHandler(async(req, res) => {
    const { id } = req.params;

    const deletedSubCategory = await SubCategory.findByIdAndDelete(id);

    if (!deletedSubCategory) {
        throw new ApiError(404, "Subcategory not found");
    }

    return res.status(200).json(
        new ApiResponse(200, null, "Subcategory deleted successfully")
    );
});

const getsubcategories = asyncHandler(async(req, res) => {
    const subcategories = await SubCategory.find().populate("categoryname");
    return res.status(200).json(
        new ApiResponse(200, subcategories, "Subcategories fetched successfully")
    );
});

export { addsubcategory, editsubcategory, deletesubcategory, getsubcategories };