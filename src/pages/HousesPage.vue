<script setup>
   import citiesService from '@/services/citiesService.js';
   import countriesService from '@/services/countriesService.js';
   import housesService from '@/services/housesService.js';
   import HouseCard from '@/components/HouseCard.vue';
   import AppButton from '@/components/AppButton.vue';
   import Slider from '@vueform/slider';
   import { ref, watch } from 'vue';
   import { useRoute, useRouter } from 'vue-router';

   const route = useRoute();
   const router = useRouter();
   const cities = ref([]);
   const countries = ref([]);
   const houses = ref([]);
   const currentPage = ref(1);
   const lastPage = ref(null);
   const disablePrevious = ref(true);
   const disableNext = ref(false);
   const highestPrice = ref(10000000000);

   /* ---GET INITIAL DATA--- */
   const getAdditionalData = async () => {
      const [{ data: citiesList }, { data: countriesList }] = await Promise.all(
         [citiesService.getCities(), countriesService.getCountries()]
      );
      cities.value = citiesList.cities;
      countries.value = countriesList.countries;
   };
   getAdditionalData();

   // const getHouses = async (params) => {
   //    try {
   //       const { data } = await housesService.getHouses(params);
   //       houses.value = data.houses.data;
   //       lastPage.value = data.houses.last_page;
   //    } catch (error) {
   //       console.log(error);
   //    }
   // };
   // getHouses(currentPage.value);

   const getAllHouses = async () => {
      try {
         const { data } = await housesService.getAllHouses();
         const pricesArray = data.houses.map((obj) => obj.price);
         highestPrice.value = Math.max(...pricesArray);
      } catch (error) {
         console.log(error);
      }
   };
   getAllHouses();

   const getFilteredHouses = async (params) => {
      if (filter.value.bedroom === 0) {
         filter.value.bedroom = null;
      }
      if (filter.value.bathroom === 0) {
         filter.value.bathroom = null;
      }
      getPrice();
      try {
         const { data } = await housesService.getFilteredHouses(params);
         houses.value = data.houses.data;
         lastPage.value = data.houses.last_page;
         if (currentPage.value === 1 && lastPage.value === 1) {
            disableNext.value = true;
            disablePrevious.value = true;
         }
      } catch (error) {
         console.log(error);
      }
   };

   /* ---SLIDER--- */
   const slider = ref({
      price: [0, highestPrice.value],
   });

   function format(value) {
      if (value >= 1000000) {
         return '$' + (value / 1000000).toFixed(1) + 'M';
      } else {
         return '$' + value / 1000 + 'K';
      }
   }

   function getPrice() {
      return (filter.value.price = `${slider.value.price[0]}, ${slider.value.price[1]}`);
   }

   /* ---FILTER--- */
   const filter = ref({
      page: currentPage,
      countryName: null,
      cityName: null,
      bedroom: null,
      bathroom: null,
      price: null,
   });
   const selectedCountry = ref([]);
   const filteredCities = ref([]);
   const selectedCountryId = ref(null);

   const handleCountryChange = (selectedCountryId) => {
      filter.value.cityName = null;
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

   /* ---DETAILS PAGE--- */
   function openHouseDetail(selectedId) {
      router.push({
         name: 'HouseDetailsPage',
         params: { id: selectedId },
      });
   }

   /* ---PAGINATION--- */
   function nextPage() {
      if (currentPage.value !== lastPage.value) {
         currentPage.value++;
         getFilteredHouses(filter.value);
         window.scrollTo({
            top: 0,
            behavior: 'smooth',
         });
      }
   }

   function previousPage() {
      if (currentPage.value > 1) {
         currentPage.value--;
         getFilteredHouses(filter.value);
         window.scrollTo({
            top: 0,
            behavior: 'smooth',
         });
      }
   }
   function toPage(number) {
      currentPage.value = number;
      getFilteredHouses(filter.value);
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   }

   /*Filter from home page */
   const filterFromQuery = route.query;
   if (Object.keys(filterFromQuery).length !== 0) {
      filter.value.countryName = filterFromQuery.countryName;
      filter.value.cityName = filterFromQuery.cityName;
      getFilteredHouses({
         countryName: filterFromQuery.countryName,
         cityName: filterFromQuery.cityName,
         price: '0,10000000000',
      });
   } else {
      getFilteredHouses(filter.value);
   }

   /* ---SEARCH--- */
   function filterSearch() {
      currentPage.value = 1;
      getFilteredHouses(filter.value);
   }

   watch(currentPage, (newPage) => {
      if (newPage === 1) {
         disablePrevious.value = true;
         disableNext.value = false;
      } else if (newPage !== lastPage.value && newPage !== 1) {
         disableNext.value = false;
         disablePrevious.value = false;
      } else {
         disableNext.value = true;
         disablePrevious.value = false;
      }
   });

   watch(countries, () => {
      getCountryId(filter.value.countryName);
   });

   watch(highestPrice, () => {
      slider.value.price[1] = highestPrice.value;
   });
</script>

<template>
   <div class="wrapper">
      <div class="action__groups">
         <div class="input__group">
            <label class="input__label">Country</label>
            <select
               class="input"
               v-model="filter.countryName"
               @change="getCountryId(filter.countryName)"
            >
               <option disabled value="">Country</option>
               <option :value="null">All</option>
               <option v-for="country in countries" :value="country.name">
                  {{ country.name }}
               </option>
            </select>
         </div>
         <div class="input__group">
            <label class="input__label">City</label>
            <select class="input" v-model="filter.cityName">
               <option disabled value="">City</option>
               <option :value="null">All</option>
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
         <div class="input__group">
            <label class="input__label">Bedrooms</label>
            <input
               class="input input--sw"
               type="number"
               min="0"
               v-model="filter.bedroom"
            />
         </div>
         <div class="input__group">
            <label class="input__label">Bathrooms</label>
            <input
               class="input input--sw"
               type="number"
               min="0"
               v-model="filter.bathroom"
            />
         </div>
      </div>
      <Slider
         class="slider-blue"
         v-model="slider.price"
         :format="format"
         :max="highestPrice"
         :step="100000"
      />
      <div class="button__search">
         <AppButton
            label="search"
            white
            style="padding: 0 1.2rem; height: 4.5rem; background-color: #ffd18b"
            @click="filterSearch()"
         />
      </div>
   </div>
   <div class="houses-cards">
      <transition-group name="fade" mode="out-in">
         <template v-for="house in houses" :key="house.id" v-bind="house">
            <HouseCard :house="house" @click="openHouseDetail(house.id)" />
         </template>
      </transition-group>
   </div>
   <div class="pagination">
      <AppButton
         label="&#60;"
         pagination
         :disabled="disablePrevious"
         @click="previousPage"
      />
      <template v-for="number in lastPage" :key="number">
         <span
            :class="['pagination__number', { active: number === currentPage }]"
            @click="toPage(number)"
            >{{ number }}</span
         >
      </template>
      <AppButton
         label="&#62;"
         pagination
         :disabled="disableNext"
         @click="nextPage"
      />
   </div>
</template>

<style scoped>
   .wrapper {
      margin-top: -7.5rem !important;
      padding-top: 12.8rem !important;
      padding-bottom: 2.4rem;
      width: 100%;
      height: max-content;
      background: linear-gradient(
         0deg,
         rgb(20, 45, 115) 0%,
         rgb(25, 62, 151) 100%
      );
   }
   .action__groups {
      height: 100%;
      display: flex;
      justify-content: center;
   }
   .input__group {
      display: flex;
      flex-direction: column;
   }
   .input__label {
      margin-bottom: 1.2rem;
      text-align: center;
      color: #fff;
   }
   .input {
      width: 16rem;
      height: 4.5rem;
      border-radius: 2rem;
      border: none;
      margin: 0 1.2rem;
      color: #000;
      font-size: 1.4rem;
      padding: 0.4rem;
      text-align: center;
   }
   .input--sw {
      width: 10rem;
   }
   .input:hover,
   .input--sw:hover .input--sw:focus {
      box-shadow: rgba(0, 0, 0, 0.13) 0px 10px 22px,
         rgba(0, 0, 0, 0.1) 0px 8px 8px;
   }
   .input:focus,
   .input--sw:focus {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
         rgba(0, 0, 0, 0.22) 0px 10px 10px;
   }
   .button__search {
      display: flex;
      justify-content: center;
   }

   .slider-blue {
      --slider-connect-bg: #ffd18b;
      --slider-tooltip-bg: #fff;
      --slider-handle-ring-color: #fff;
      --slider-tooltip-color: #084480;
      --slider-tooltip-font-size: 1.6rem;
      margin: 8rem auto 3.2rem auto;
      width: 65%;
      height: 1rem;
   }
   @media (max-width: 670px) {
      .wrapper {
         height: fit-content;
      }
      .action__groups {
         display: grid;
         grid-template-columns: 1fr 1fr;
         grid-template-rows: 1fr 1fr;
         row-gap: 3.2rem;
         justify-items: center;
      }
   }

   /* HOUSE CARD */

   .houses-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      row-gap: 4.8rem;
      column-gap: 3.2rem;
      justify-items: center;
      margin: 3.2rem;
   }

   /* PAGINATION */
   .pagination {
      display: flex;
      justify-content: center;
      margin: 4.8rem 0;
   }
   .pagination__number {
      width: 5rem;
      height: 5rem;
      border: 1px solid rgba(0, 0, 0, 0.5);
      background-color: #fff;
      border-radius: 1rem;
      color: #084480;
      font-size: 2rem;
      margin: 0 1.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
   }
   .pagination__number:hover {
      background-color: #d7d7d7;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
         rgba(0, 0, 0, 0.22) 0px 10px 10px;
      transform: translate(-1px, -1px);
   }
   .pagination__number:active {
      transform: translate(1px, 1px);
   }
   .active {
      background: linear-gradient(
         0deg,
         rgb(20, 45, 115) 0%,
         rgb(25, 62, 151) 100%
      );
      color: #fff;
   }

   /* TRANSITION */
   .fade-enter-active,
   .fade-leave-active {
      transition: all 0.75s ease-in-out;
   }

   .fade-enter-from,
   .fade-leave-to {
      opacity: 0;
   }
</style>
<style src="@vueform/slider/themes/default.css"></style>
