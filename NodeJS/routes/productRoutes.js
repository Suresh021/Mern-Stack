import express from "express"
const productRouter = express.Router()

productRouter.get("/", (req, res) => {
    res.send("This is get request of productRouter")
})
productRouter.post("/", (req, res) => {
    res.send("This is post requestof productRouter")
})
export default productRouter