import express from 'express'
const app = express()
app.listen(8080)
// app.get("/:name", (req, res) => {
//     res.send("Hello " + req.params.name)
// })
// app.get("/", (req, res) => {
//     res.send("Hello " + req.query.name)
// })
app.get("/", (req, res) => {
    res.send("Hello " + req.query.name + req.query.age)
})

//http://localhost:8080/name/join
//app.get("/name/:name", () => { })

//http://localhost:8080/?name=john&age=25
//app.get("/",()=>{})