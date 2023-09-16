import apiConfig from "@/configurations/apiConfig";

const logIn = async (email, password) => {
   return apiConfig.post("/auth/login", { email, password });
};
const logOut = async () => {
   return apiConfig.get("/auth/logout");
};
const signUp = (regData) => {
   return apiConfig.post("/auth/register", { ...regData });
};
const getMe = () => {
   return apiConfig.get("/auth/user");
};

export default {
   logIn,
   logOut,
   signUp,
   getMe,
};
