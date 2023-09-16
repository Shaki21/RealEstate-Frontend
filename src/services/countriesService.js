import apiConfig from "@/configurations/apiConfig";

const createCountry = (country) => {
   return apiConfig.post("/country", { ...country });
};
const getCountries = () => {
   return apiConfig.get("/countries");
};
const getCountryId = (id) => {
   return apiConfig.get("/country/" + id);
};
const updateCountry = (id, country) => {
   return apiConfig.put("/country/" + id, { ...country });
};
const deleteCountry = (id) => {
   return apiConfig.delete("/country/" + id);
};

export default {
   createCountry,
   getCountries,
   getCountryId,
   updateCountry,
   deleteCountry,
};
