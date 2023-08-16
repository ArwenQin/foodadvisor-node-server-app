import * as tuitsDao from './tuits-dao.js'

const rateRestaurant = async (req, res) => {
  const restaurantRating = req.body;
  restaurantRating.likes = 0;
  restaurantRating.liked = false;
  const insertedRating = await tuitsDao.createTuit(restaurantRating);

  res.json(insertedRating);
}
const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.likes = 0;
  newTuit.liked = false;
  if (!newTuit.username) {
    newTuit.username = 'NASA';
  }
  if (!newTuit.handle) {
    newTuit.handle = '@nasa';
  }
  if (!newTuit.image) {
    newTuit.image = 'https://images.seattletimes.com/wp-content/uploads/2019/07/nasameatball.jpg';
  }
  newTuit.time = '1h';
  if (!newTuit.rating) {
    newTuit.rating = 1;
  }
  newTuit.dislikes = 0;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}
const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits()
  res.json(tuits);
}
const searchTuits = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const tuits = await tuitsDao.searchTuits(searchTerm);
    res.json(tuits);
  } catch (error) {
    console.error('Error during search:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;

  const status = await tuitsDao
    .updateTuit(tuitdIdToUpdate, updates);
  res.json(status);


}
const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.json(status);


}

export default (app) => {
  app.get('/api/tuits', findTuits);
  app.post('/api/tuits', createTuit);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
  app.post('/api/rateRestaurant', rateRestaurant);
  app.get('/api/tuits/search', searchTuits);
}

