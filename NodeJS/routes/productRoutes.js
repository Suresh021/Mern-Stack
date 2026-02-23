import express from "express"
import { getproductcontroller, postproductcontroller } from "../controllers/productcontroller"
const productRouter = express.Router()

productRouter.get("/", getproductcontroller)
productRouter.post("/", postproductcontroller)
export default productRouter