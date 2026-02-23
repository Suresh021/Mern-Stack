import { products } from "../models/productModel"
const getproductcontroller = (req, res) => {
    res.send(products)
}

const postproductcontroller = (req, res) => {
    const productData = req.body
    res.send({
        message: "User created successfully",
        data: productData
    })
}

export { getproductcontroller, postproductcontroller }
