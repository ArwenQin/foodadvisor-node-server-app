import mongoose from 'mongoose';
const schema = mongoose.Schema({
  name: {type:String,default:"Grandma's"},
  likes: {type:Number,default: 2800},
 score: {type:Number,default: 4.5},
  year: {type:Number,default: 2000},
  highlights:{type: String,default:"Grandma's kitchen, a warm and comforting haven."},
  image: {type:String,default:"https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094838/the-ring.png"},

}, {collection: 'explores'});
export default schema;

