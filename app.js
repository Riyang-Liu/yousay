var express = require('express');
var app = express();
var mongoose = require('mongoose');
/*var Clothes = require('./models/clothes');
var mongoDB = 'mongodb://riyangl:test@ds153775.mlab.com:53775/yousay';

//connecting mongoDB
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoDB connection error:'));
*/
//save clothes object to the database
/*
var clothes_one = new Clothes({
  name: 'yellow dress',
  price: '4500',
  status: 'in stock',
  category: 'bottom',
  link: 'https://cdn.tobi.com/product_images/md/1/light-blue-abby-striped-off-shoulder-dress.jpg',
  descriptioin: 'real leather, soft wash.'
})

var clothes_two = new Clothes({
  name: 'pink shirt',
  price: '590',
  status: 'not in stock',
  category: 'top',
  link: 'https://cdn.tobi.com/product_images/md/1/light-blue-abby-striped-off-shoulder-dress.jpg',
  descriptioin: 'hand-make'
})

clothes_one.save(function(err, clothes){
  if(err) return handleError(err);
  else {
    console.log("saved!");
    console.log(clothes);
}
})

clothes_two.save(function(err, clothes){
  if(err) return handleError(err);
  else {
    console.log("saved!");
    console.log(clothes);
}

})
*/




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

/*app.get("/women", function(req, res){
  Clothes.find({}, function(err, clothes){
    if (err) return handleError(err);
    else {
      res.render("women", {clothes: clothes});
    }
  })
})*/
/*
app.get("/women/:id", function(req, res){
  var id = req.params.id;
  Clothes.findById(id, function(err, clothes){
    if (err) return handleError(err);
    else{
      res.render("clothes", {clothes: clothes});
    }
  })
})*/

app.get("/about", function(req, res){
	res.render("about");
})

app.get("/contact", function(req, res){
	res.render("contact");
})

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("this is the main page");
})
