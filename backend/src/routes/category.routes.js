import { Router } from "express";
import { addcategory, deletecategory, getCategories} from "../controllers/category.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()


router.route("/add-category").post(verifyJWT,
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        } 
        
    ]),
    addcategory
    )
//router.route("/delete-category/:id").delete(verifyJWT, deletecategory)
router.route("/get-category").get(getCategories)
export default router
// sucured routes