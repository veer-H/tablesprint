import { Router } from "express";
import { addsubcategory} from "../controllers/subcatogary.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()


router.route("/add-subcatogory").post(verifyJWT,
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    addsubcategory
    )
export default router
// sucured routes


