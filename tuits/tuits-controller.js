import * as tuitsDao from './tuits-dao.js'
import * as usersDao from '../users/users-dao.js';

const rateRestaurant = async (req, res) => {
  try {
      const { userId, restaurantId,username, ...restOfData } = req.body;
      const existingRating = await tuitsDao.findRatingByUserAndRestaurant(userId, restaurantId);
      
      let response;
      if (existingRating) {
          const updatedRating = await tuitsDao.updateTuit(existingRating._id, restOfData);
          response = { updated: true, data: updatedRating };
      } else {
          const newRating = {
              userId,
              restaurantId,
              username,
              ...restOfData,
              likes: 0,
              liked: false,
          };
          const insertedRating = await tuitsDao.createTuit(newRating);
          response = { created: true, data: insertedRating };
      }

      res.json(response);
  } catch (error) {
      console.error('Error during rating:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};

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
const fetchUserRatings = async (req, res) => {
  try {
      const userId = req.params.userId;
      const ratings = await tuitsDao.findUserRatings(userId);
      res.json(ratings);
  } catch (error) {
      console.error('Error fetching user ratings:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};
export default (app) => {
  app.get('/api/rates', findTuits);
  app.post('/api/rates', createTuit);
  app.put('/api/rates/:tid', updateTuit);
  app.delete('/api/rates/:tid', deleteTuit);
  app.post('/api/rateRestaurant', rateRestaurant);
  app.get('/api/rates/search', searchTuits);
  app.get('/api/ratings/user/:userId', fetchUserRatings);

}

