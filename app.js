var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/mobile", function(req, res){
	res.render("landingM");
})

app.get("/2017SummerSpecial", function(req, res){
	res.render("seasonalSpecial");
})

app.get("/women", function(req, res){
	res.render("women");
})

app.get("/about", function(req, res){
	res.render("about");
})

app.get("/contact", function(req, res){
	res.render("contact");
})

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("this is the main page");
})
