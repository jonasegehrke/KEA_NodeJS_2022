const express = require("express")
const path = require("path")
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/index",(req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(8080,()=>{
    console.log("Server is running on port", 8080)
})