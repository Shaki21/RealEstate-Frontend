import apiConfig from '@/configurations/apiConfig';

const createHouse = (house) => {
   return apiConfig.post('/house', { ...house });
};
const getHouses = (params) => {
   return apiConfig.get('/houses?page=' + params);
};
const getFilteredHouses = (params) => {
   return apiConfig.get('/houses', { params });
};
const getAllHouses = () => {
   return apiConfig.get('/house-filtered');
};
const getHouseId = (id) => {
   return apiConfig.get('/house/' + id);
};
const updateHouse = (id, house) => {
   return apiConfig.put('/house/' + id, { ...house });
};
const deleteHouse = (id) => {
   return apiConfig.delete('/house/' + id);
};

export default {
   createHouse,
   getHouses,
   getFilteredHouses,
   getAllHouses,
   getHouseId,
   updateHouse,
   deleteHouse,
};
