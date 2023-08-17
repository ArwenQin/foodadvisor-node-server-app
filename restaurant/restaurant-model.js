import mongoose from 'mongoose';
import restaurantSchema from './restaurant-schema.js';

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
