import { user } from "../models/userModel"
export const getusercontroller = (req, res) => {
    res.send(user)
}

export const postusercontroller = (req, res) => {
    const userData = req.body
    res.send({
        message: "User created successfully",
        data: userData
    })
}