import restaurantModel from "./restaurant-model.js";

export const findRestaurants = () => restaurantModel.find();
export const createRestaurant = (res) => restaurantModel.create(res);
export const deleteRestaurant = (rid) => restaurantModel.deleteOne({ _id: rid });
export const updateRestaurant = (rid, res) => restaurantModel.updateOne({ _id: rid }, { $set: res })
export const findResByName = (name) =>
   restaurantModel.findOne({ name: new RegExp(name, 'i') });

export const findResByExactName = (name) =>
    restaurantModel.findOne({ name: name });
export const searchRestaurants = (searchTerm) =>
   restaurantModel.find({ name: new RegExp(searchTerm, 'i') });

