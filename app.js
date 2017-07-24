var express = require('express');
var app = express();

app.use(express.static("public"));
app.get("/", function(req, res){
    res.render("landing.ejs");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("this is the main page");
})
