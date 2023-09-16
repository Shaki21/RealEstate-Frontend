import apiConfig from "@/configurations/apiConfig";

const createCity = (city) => {
   return apiConfig.post("/city", { ...city });
};
const getCities = () => {
   return apiConfig.get("/cities");
};
const getCityId = (id) => {
   return apiConfig.get("/city/" + id);
};
const updateCity = (id, city) => {
   return apiConfig.put("/city/" + id, { ...city });
};
const deleteCity = (id) => {
   return apiConfig.delete("/city/" + id);
};

export default {
   createCity,
   getCities,
   getCityId,
   updateCity,
   deleteCity,
};
