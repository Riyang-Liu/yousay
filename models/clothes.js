var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ClothesSchema = Schema(
  {
    name: {type: String, required: true, max: 100},
    price: {type: Number},
    date: {type: Date},
    status: {type: String, required: true},
    category: {type: String, required: true},
    link: {type: String},
    descriptioin: {type: String}
  }
);

//Virtual for book's URL
ClothesSchema
.virtual('url')
.get(function(){
  return '/women/' + this._id;
});

//Export model
module.exports = mongoose.model('Clothes', ClothesSchema);
