import{J as e}from"./index-6316a9fc.js";const n=t=>e.post("/city",{...t}),c=()=>e.get("/cities"),o=t=>e.get("/city/"+t),u=(t,r)=>e.put("/city/"+t,{...r}),s=t=>e.delete("/city/"+t),p={createCity:n,getCities:c,getCityId:o,updateCity:u,deleteCity:s},i=t=>e.post("/country",{...t}),y=()=>e.get("/countries"),C=t=>e.get("/country/"+t),a=(t,r)=>e.put("/country/"+t,{...r}),d=t=>e.delete("/country/"+t),l={createCountry:i,getCountries:y,getCountryId:C,updateCountry:a,deleteCountry:d};export{l as a,p as c};
