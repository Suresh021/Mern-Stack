// middleware/auth.js

import jwt from "jsonwebtoken";

const SECRET = "mytoken";

export const middleware = (req, res, next) => {
    const bearerHeader = req.headers.authorization;

    if (!bearerHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = bearerHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded; // attach user data
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid token" });
    }
};

export const authorize = (...roles) => {
    return (req, res, next) => {

        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access Denied" });
        }

        next();
    };
};