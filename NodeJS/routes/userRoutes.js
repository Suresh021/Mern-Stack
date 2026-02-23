import express from "express"
import { getusercontroller, postusercontroller } from "../controllers/usercontroller"
const userRouter = express.Router()

userRouter.get("/", getusercontroller)
userRouter.post("/", postusercontroller)
export default userRouter