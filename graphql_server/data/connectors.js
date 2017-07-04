import Mongoose from 'mongoose';
//mongodb://sjha11:sh@lu1992@ds145292.mlab.com:45292/shoppingcart
//'mongodb://localhost:27017/shoppingcart'
const mongo = Mongoose.connect('mongodb://localhost:27017/shoppingcart', (err) => {
  if(err){
    console.error('Could not connect to MongoDB on port 27017');
  }
});

//Reviewers Schema
const reviewerSchema = Mongoose.Schema({
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    email: {type:String, required: true}

}, {collection: 'Reviewers'});

const Reviewers = Mongoose.model('Reviewer', reviewerSchema);
//Product Schema
const productSchema = Mongoose.Schema({
  "name": {type:String, required: true},
  "brand": {type:String, required: true},
  "imageUrl": {type:String, required: true},
  "price": {type:String, required: true},
  "discountPrice": String,
  "description": String,
  "reviewers": Array
}, {collection : 'Products'});

const Products = Mongoose.model('Product', productSchema);

//Cart Schema
var cartSchema = Mongoose.Schema({
  "name": {type:String, required: true},
  "brand": {type:String, required: true},
  "imageUrl": {type:String, required: true},
  "price": {type:String, required: true},
  "discountPrice": String,
  "description": String,
  "reviewers": Array
}, {collection : 'Cart'});

var Cart = Mongoose.model('Cart', cartSchema);

export { Products, Reviewers, Cart };
