const express = require("express")
const path = require("path")
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res)=>{
    res.send("<h1>Welcome to World Wide Express</h1>")
})

app.get("/weather", (req, res)=>{
    res.sendFile(__dirname + "/public/weather.html")
})

app.listen(8080, ()=>{
    console.log("Server is running on port", 8080)
})