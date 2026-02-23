import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import { authorize, middleware } from "./middleware/auth.js";

const app = express();
app.use(express.json());

const users = [];
const SECRET = "mytoken";

// signup
app.post("/signup", async (req, res) => {
    const body = req.body;

    const hashPassword = await bcrypt.hash(body.password, 10);
    body.password = hashPassword;

    users.push(body);

    res.json({ message: "User created" });
});


// login
app.post("/login", async (req, res) => {
    const body = req.body;

    const user = users.find(u => u.email === body.email);
    if (!user) {
        return res.send("User not found");
    }

    const isMatch = await bcrypt.compare(body.password, user.password);
    if (!isMatch) {
        return res.send("Wrong password");
    }

    // Generate token
    const token = jwt.sign({ email: user.email, role: user.role }, SECRET);

    res.json({ token: token });
});


app.get("/", middleware, (req, res) => {
    res.send("Hello World");
});


app.listen(8080, () => { console.log("Server starting") });

app.get("/users", middleware, authorize("admin", "manager"), (req, res) => {
    res.json(users);
});