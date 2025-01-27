import { Router } from "express";
import { addproduct, getproducts} from "../controllers/product.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()


router.route("/add-product").post(verifyJWT,
    
    addproduct
    )
router.route("/get-product").get(getproducts)
export default router
// sucured routes