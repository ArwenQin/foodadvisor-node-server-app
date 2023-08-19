import mongoose from "mongoose";
const usersSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String,default:"https://imagesvibe.com/wp-content/uploads/2023/03/Cute-Panda-Images1.jpg"},
  details: { type: String,default: "I am a panda looking for delicious bamboo shoots."},
  intro: { type: String,default:"I am the coolest panda in FoodAdvisor."},
  firstName: { type: String,default:"Giant"},
  lastName: { type: String,default:"Panda"},
  type: String,
}, { collection: "users" });
export default usersSchema;

