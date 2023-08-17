import tuitsModel from './tuits-model.js';
import Restaurant from '../restaurant/restaurant-model.js';

// Tuits operations
export const findTuits = () => tuitsModel.find();
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({ _id: tid });
export const updateTuit = (tid, tuit) => tuitsModel.updateOne({ _id: tid }, { $set: tuit });
export const searchTuits = (searchTerm) => tuitsModel.find({ name: new RegExp(searchTerm, 'i') });
export const findUserRatings = (userId) => tuitsModel.find({ userId: userId });

// Restaurant operations
export const findRestaurants = () => Restaurant.find();
export const findRestaurantById = (restaurantId) => Restaurant.findById(restaurantId);
export const createRestaurant = (restaurant) => Restaurant.create(restaurant);
export const deleteRestaurant = (restaurantId) => Restaurant.deleteOne({ _id: restaurantId });
export const updateRestaurant = (restaurantId, data) => Restaurant.updateOne({ _id: restaurantId }, { $set: data });
export const findRatingByUserAndRestaurant = (userId, restaurantId) => {
    return tuitsModel.findOne({ userId, restaurantId });
};
