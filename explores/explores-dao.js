import exploresModel from './explores-model.js';
export const findExplores  = ()          => exploresModel.find();
export const createExplore = (res)      => exploresModel.create(res);
export const deleteExplore = (rid)       => exploresModel.deleteOne({_id: rid});
export const updateExplore = (rid, res) => exploresModel.updateOne({_id: rid}, {$set: res})

