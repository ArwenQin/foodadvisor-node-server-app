import mongoose from 'mongoose';
const schema = mongoose.Schema({
  name: String,
  likes: Number,
 score: Number,
  year: Number,
  highlights: String,
  image: String,

}, {collection: 'explores'});
export default schema;

