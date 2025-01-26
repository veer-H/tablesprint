import { Router } from "express";
import { addproduct} from "../controllers/product.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()


router.route("/add-product").post(verifyJWT,
    
    addproduct
    )
export default router
// sucured routes