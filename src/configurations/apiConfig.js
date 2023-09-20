import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

const instance = axios.create({
   baseURL: baseURL + '/api',
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
   },
});

// Add interceptor to add bearer token on every request
instance.interceptors.request.use(
   function (config) {
      // Do something before request is sent
      // Set bearer token from local storage if exists
      config.headers.Authorization =
         'Bearer ' + localStorage.getItem('app_token');
      return config;
   }
   // function (error) {
   //    // Do something with request error
   //    return Promise.reject(error);
   // }
);

instance.interceptors.response.use(
   (res) => res,
   async (error) => {
      if (error.response.status === 401) {
         const response = await axios.post(
            '/auth/user',
            {},
            { withCredentials: true }
         );

         if (response.status === 200) {
            instance.defaults.headers.common['Authorization'] =
               'Bearer ' + response.data.token;
            error.config.headers['Authorization'] =
               'Bearer ' + response.data.token;
            return axios(error.config);
         }
      }
      return error;
   }
);

export default instance;
