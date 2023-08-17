import * as exploresDao from './explores-dao.js'


const createExplore = async (req, res) => {
  const newExplore = req.body;
  const insertedExplore = await exploresDao.createExplore(newExplore);

  res.json(insertedExplore);

}
const findExplores  =  async(req, res) =>{
const explore = await exploresDao.findExplores()
  res.json(explore);}

const updateExplore = async (req, res) => {
  const resIdToUpdate = req.params.rid;
  const updates = req.body;

  const status = await exploresDao
  .updateExplore(resIdToUpdate, updates);
  res.json(status);


}
const deleteExplore = async (req, res) => {
  const resdIdToDelete = req.params.rid;
  const status = await exploresDao.deleteExplore(resdIdToDelete);
  res.json(status);


}

export default (app) => {
  app.post('/api/explores', createExplore);
  app.get('/api/explores', findExplores);
  app.put('/api/explores/:rid', updateExplore);
  app.delete('/api/explores/:rid', deleteExplore);
}

