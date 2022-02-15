const express = require("express")
const path = require("path")
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/index",(req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });