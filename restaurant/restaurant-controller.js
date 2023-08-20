import * as restaurantsDao from './restaurant-dao.js'


const createRestaurant = async (req, res) => {

    const  name  = req.body.name;
    const existingRes = await restaurantsDao.findResByExactName(name);

    let response;
    if (existingRes) {
      if(existingRes.owner !== req.body.owner){
        res.sendStatus(403);
        return;
      }
      else{
      const updatedRes = await restaurantsDao.updateRestaurant(existingRes._id, req.body);
      response = { updated: true, data: updatedRes };
      res.json(response);
    }} else {

      const newRes = req.body;
      const insertedRes = await restaurantsDao.createRestaurant(newRes);

  res.json(insertedRes);

}}
const findRestaurants = async (req, res) => {
  const restaurant = await restaurantsDao.findRestaurants()
  res.json(restaurant);
}

const updateRestaurant = async (req, res) => {
  const resIdToUpdate = req.params.rid;
  const updates = req.body;

  const status = await restaurantsDao
    .updateRestaurant(resIdToUpdate, updates);
  res.json(status);


}
const deleteRestaurant = async (req, res) => {
  const resdIdToDelete = req.params.rid;
  const status = await restaurantsDao.deleteRestaurant(resdIdToDelete);
  res.json(status);


}

const findResByName = async (req, res) => {
  const name = req.params.name;
  const restaurant = await restaurantsDao.findResByName(name);
  res.json(restaurant);
};
const searchRestaurants = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const restaurants = await restaurantsDao.searchRestaurants(searchTerm);
    res.json(restaurants);
  } catch (error) {
    console.error('Error during restaurant search:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
export default (app) => {
  app.post('/api/restaurants', createRestaurant);
  app.get('/api/restaurants', findRestaurants);
  app.get('/api/restaurants/:name', findResByName);     
  app.get('/api/restaurants/search', searchRestaurants); 
  app.put('/api/restaurants/:rid', updateRestaurant);
  app.delete('/api/restaurants/:rid', deleteRestaurant);
}


