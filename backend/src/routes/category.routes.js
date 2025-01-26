import { Router } from "express";
import { addcategory, deletecategory} from "../controllers/category.controller.js";
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
export default router
// sucured routes