import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {Category} from "../models/category.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const addcategory = asyncHandler( async (req, res) => {
   


    const { category, sequence } = req.body


    

    if (
        [ category, sequence].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedCategory = await Category.findOne({
        $or: [ { category }]
    })

    if (existedCategory) {
        throw new ApiError(409, " catagory already exists")
    }
   

    const avatarLocalPath = req.files?.avatar[0]?.path;
   


    

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }
   

    const createCategory = await Category.create({
        categoryname: category.toLowerCase(),
        avatar: avatar.url,
        sequence: sequence,
        
    })

   

    if (!createCategory) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createCategory, "Category created successfully")
    )

} )


const deletecategory = asyncHandler(async(req, res) => {
    const { id } = req.params;

    const deleteCategory = await Category.findByIdAndDelete(id);

    if (!deleteCategory) {
        throw new ApiError(404, "category not found");
    }

    return res.status(200).json(
        new ApiResponse(200, null, "category deleted successfully")
    );
});

export { addcategory, deletecategory };