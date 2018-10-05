const express = require("express")
const fs = require("fs");
const app = express()
// const categoriesArray = [777, 780, 21, 105, 25, 306, 136, 680, 309, 2537, 1470, 18065, 6145, 9646, 15090, 499, 42, 7, 78, 211, 420, 176]
const categories = require ("./categories.json")
app.use(express.json())

app.get("/api/category/:id", (req, res) => {
    console.log('inside app.get')
    const requestedCategory = categories.find(category => category.id == req.params.id)
    console.log(requestedCategory)
    res.send(requestedCategory)
})

app.listen(3000, ()=> console.log("Yay it works"))