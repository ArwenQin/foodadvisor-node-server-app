import mongoose from 'mongoose';
import exploresSchema from "./explores-schema.js";
const exploresModel = mongoose.model('ExploreModel', exploresSchema);
export default exploresModel;

