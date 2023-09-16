<script setup>
   import AppButton from '@/components/AppButton.vue';
   import Swal from 'sweetalert2';
   import citiesService from '@/services/citiesService.js';
   import countriesService from '@/services/countriesService.js';
   import housesService from '@/services/housesService.js';
   import { ref } from 'vue';
   import { useRouter } from 'vue-router';

   const router = useRouter();
   const showErrorMessage = ref(false);

   const showSuccessAdvertiseAlert = () => {
      Swal.fire({
         icon: 'success',
         title: 'House advertise successful',
         text: 'You have successfully advertise house!',
         showConfirmButton: false,
         timer: 3000,
         didOpen: () => {
            Swal.getPopup().style.fontSize = '1.8rem';
         },
      });
   };

   const newHouse = ref({
      title: '',
      price: null,
      bedroom: null,
      bathroom: null,
      quadrature: null,
      floors: null,
      garden_quadrature: null,
      address: '',
      property_type: '',
      property_status: '',
      description: '',
      cityName: null,
      countryName: null,
   });
   const countries = ref([]);
   const cities = ref([]);
   const selectedCountry = ref([]);
   const filteredCities = ref([]);
   const selectedCountryId = ref(null);

   /* ---GET INITIAL DATA--- */
   const getAdditionalData = async () => {
      const [{ data: citiesList }, { data: countriesList }] = await Promise.all(
         [citiesService.getCities(), countriesService.getCountries()]
      );
      cities.value = citiesList.cities;
      countries.value = countriesList.countries;
   };
   getAdditionalData();

   const handleCountryChange = (selectedCountryId) => {
      newHouse.value.cityName = null;
      selectedCountry.value = true;
      filteredCities.value = cities.value.filter(
         (city) => city.country_id === selectedCountryId
      );
   };

   function getCountryId(countryName) {
      if (countryName !== null) {
         for (let i = 0; i < countries.value.length; i++) {
            if (countries.value[i].name === countryName) {
               selectedCountryId.value = countries.value[i].id;
               handleCountryChange(selectedCountryId.value);
            }
         }
      } else {
         selectedCountry.value = false;
         filter.value.cityName = null;
      }
   }

   const createHouse = async (house) => {
      if (
         !newHouse.value.title ||
         !newHouse.value.bedroom ||
         !newHouse.value.bathroom ||
         !newHouse.value.quadrature ||
         !newHouse.value.garden_quadrature ||
         !newHouse.value.floors ||
         !newHouse.value.countryName ||
         !newHouse.value.cityName ||
         !newHouse.value.address ||
         !newHouse.value.description ||
         !newHouse.value.price ||
         !newHouse.value.property_type ||
         !newHouse.value.property_status
      ) {
         event.preventDefault();
         showErrorMessage.value = true;
         return;
      }
      event.preventDefault();
      try {
         await housesService.createHouse(house);
         router.push({ name: 'HousesPage' });
         showSuccessAdvertiseAlert();
      } catch (error) {
         console.log(error);
      }
   };
</script>

<template>
   <div class="img-wrapper">
      <div class="header__text-box">
         <h1 class="heder-title">Advertise your house</h1>
         <p class="subtitle">
            Enter information about your house to advertise it on our site
         </p>
      </div>
   </div>
   <div class="center-wrapper">
      <form class="form-wrapper">
         <div class="groups">
            <div class="group">
               <label class="label">Title</label>
               <input class="input" v-model="newHouse.title" />
            </div>
            <div class="group">
               <label class="label">Number of bedrooms</label>
               <input
                  class="input"
                  type="number"
                  min="0"
                  v-model="newHouse.bedroom"
               />
            </div>
            <div class="group">
               <label class="label">Number of bathrooms</label>
               <input
                  class="input"
                  type="number"
                  min="0"
                  v-model="newHouse.bathroom"
               />
            </div>
            <div class="group">
               <label class="label">Quadrature</label>
               <input class="input" v-model="newHouse.quadrature" />
            </div>
            <div class="group">
               <label class="label">Garden quadrature</label>
               <input
                  class="input"
                  type="number"
                  min="0"
                  v-model="newHouse.garden_quadrature"
               />
            </div>
            <div class="group">
               <label class="label">Floors</label>
               <input
                  class="input"
                  type="number"
                  min="0"
                  v-model="newHouse.floors"
               />
            </div>
            <div class="group">
               <label class="label">Country</label>
               <select
                  class="input"
                  v-model="newHouse.countryName"
                  @change="getCountryId(newHouse.countryName)"
               >
                  <option disabled value="Select country">Country</option>
                  <option v-for="country in countries" :value="country.name">
                     {{ country.name }}
                  </option>
               </select>
            </div>
            <div class="group">
               <label class="label">City</label>
               <select class="input" v-model="newHouse.cityName">
                  <option disabled value="Select city">City</option>
                  <option
                     v-if="selectedCountry"
                     v-for="city in filteredCities"
                     :value="city.name"
                     :key="city.id"
                  >
                     {{ city.name }}
                  </option>
               </select>
            </div>
            <div class="group">
               <label class="label">Address</label>
               <input class="input" v-model="newHouse.address" />
            </div>
            <div class="group">
               <label class="label">Property type</label>
               <select class="input" v-model="newHouse.property_type">
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Studio flat">Studio flat</option>
               </select>
            </div>
            <div class="group">
               <label class="label">Property status</label>
               <select class="input" v-model="newHouse.property_status">
                  <option value="For Sell">For Sell</option>
                  <option value="For Rent">For Rent</option>
               </select>
            </div>
            <div class="group">
               <label class="label">Description of house</label>
               <textarea
                  class="input--desc"
                  v-model="newHouse.description"
               ></textarea>
            </div>
            <div class="group">
               <label class="label">Price</label>
               <input
                  class="input"
                  type="number"
                  min="0"
                  v-model="newHouse.price"
               />
            </div>
         </div>
         <Transition name="fade">
            <div class="error-message" v-if="showErrorMessage">
               Please fill in fields. <br />
               All fields must be filled in to continue.
            </div></Transition
         >
         <AppButton
            class="btn-sell"
            label="Advertise a house"
            blue
            @click="createHouse(newHouse)"
         />
      </form>
   </div>
</template>

<style scoped>
   .img-wrapper {
      height: 100vh;
      margin-top: -7.5rem;
      background-image: url('@/assets/AdvertisePage.jpg');
      background-size: cover;
      background-position: center;
      border-radius: 0 0 10rem 10rem;
   }
   .header__text-box {
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 85%;
   }
   .heder-title {
      font-size: 4.4rem;
      font-weight: 500;
      line-height: 61px;
      color: #fff;
      margin-bottom: 3.2rem;
   }
   .subtitle {
      font-size: 3.6rem;
      font-weight: 400;
      color: #fff;
   }
   .center-wrapper {
      display: grid;
      place-items: center;
      padding: 3.2rem 0;
      background: linear-gradient(
         0deg,
         rgba(240, 240, 240, 1) 0%,
         rgba(254, 254, 254, 1) 100%
      );
   }
   .form-wrapper {
      width: 100%;
      max-width: 60rem;
      padding: 1.2rem;
      text-align: center;
   }
   .head-title {
      margin: 3.2rem 0;
      font-size: 4.4rem;
      font-weight: 800;
      text-transform: uppercase;
      line-height: 130%;
   }
   .subtitle {
      font-size: 2.4rem;
      padding: 0 2rem;
      line-height: 150%;
   }
   .groups {
      text-align: left;
   }
   .group {
      display: grid;
      width: 100%;
      margin: 3.2rem 0;
   }
   .label {
      font-size: 2.4rem;
      font-weight: 500;
      margin: 0 0 1.6rem 2.4rem;
   }
   .input {
      width: 100%;
      height: 4rem;
      padding-left: 1.2rem;
      border: 1px solid #000;
      font-size: 1.8rem;
   }
   .input:hover,
   .input--desc:hover {
      box-shadow: rgba(0, 0, 0, 0.13) 0px 10px 22px,
         rgba(0, 0, 0, 0.1) 0px 8px 8px;
   }
   .input:focus,
   .input--desc:focus,
   .btn-sell:active {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 22px,
         rgba(0, 0, 0, 0.22) 0px 8px 8px;
   }
   .input--desc {
      height: 15rem;
      padding: 1.2rem;
      border: 1px solid #000;
      font-size: 1.8rem;
      font-family: 'Inter';
   }
   .btn-sell {
      width: 80%;
      margin: 0;
   }
   .error-message {
      margin: 4.4rem 2.4rem;
      padding: 1.6rem;
      font-size: 1.8rem;
      line-height: 175%;
      background: linear-gradient(
         180deg,
         rgba(255, 0, 0, 0.15) 0%,
         rgba(255, 0, 0, 0.25) 100%
      );
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
         rgba(0, 0, 0, 0.22) 0px 10px 10px;
      border: 2px solid;
      border-image: linear-gradient(
            to bottom,
            rgba(255, 0, 0, 0.25),
            rgba(255, 0, 0, 0.5)
         )
         1;
   }

   /* TRANSITION */
   .fade-enter-active,
   .fade-leave-active {
      transition: all 0.5s ease-in-out;
   }

   .fade-enter-from,
   .fade-leave-to {
      opacity: 0;
   }
</style>
