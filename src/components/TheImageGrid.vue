<script setup>
   import AppButton from "@/components/AppButton.vue";
   import { useRouter } from "vue-router";

   const router = useRouter();

   const goToHousesPage = (city, country) => {
      const filterData = {
         countryName: country,
         cityName: city,
      };
      router.push({ name: "HousesPage", query: filterData });
   };
</script>

<template>
   <div class="grid-image">
      <div class="item-1">
         <img
            src="https://www.cheapridetransfers.com/uploads/images/7edf26dc7d5e807b72cc82ce9e6fc814.jpg"
            alt="Home 1"
         />
         <h3 class="grid-image__title">Mostar, BiH</h3>
         <div class="position-down">
            <AppButton
               class="hidden-btn"
               label="View Homes"
               view
               @click="goToHousesPage('Mostar', 'Bosna i Hercegovina')"
            />
         </div>
      </div>
      <div class="item-2">
         <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Zagreb_%2829255640143%29.jpg/800px-Zagreb_%2829255640143%29.jpg"
            alt="Home 2"
         />
         <h3 class="grid-image__title">Zagreb, HR</h3>
         <div class="position-down">
            <AppButton
               class="hidden-btn"
               label="View Homes"
               view
               @click="goToHousesPage('Zagreb', 'Hrvatska')"
            />
         </div>
      </div>
      <div class="item-3">
         <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Budva_%281%29.jpg/800px-Budva_%281%29.jpg"
            alt="Home 3"
         />
         <h3 class="grid-image__title">Budva, CG</h3>
         <div class="position-down">
            <AppButton
               class="hidden-btn"
               label="View Homes"
               view
               @click="goToHousesPage('Budva', 'Crna Gora')"
            />
         </div>
      </div>
      <div class="item-4">
         <img
            src="https://images.adsttc.com/media/images/63cf/c4c9/7643/4a53/6b26/9cf4/newsletter/ljubljana-architecture-city-guide-23-projects-to-discover-in-the-capital-of-slovenia_23.jpg?1674560733"
            alt="Home 4"
         />
         <h3 class="grid-image__title">Ljubljana, SLO</h3>
         <div class="position-down">
            <AppButton
               class="hidden-btn"
               label="View Homes"
               view
               @click="goToHousesPage('Ljubljana', 'Slovenija')"
            />
         </div>
      </div>
      <div class="item-5">
         <img
            src="https://www.vecernji.hr/media/img/64/34/2580d74001affc57878c.jpeg"
            alt="Home 5"
         />
         <h3 class="grid-image__title">Beograd, SRB</h3>
         <div class="position-down">
            <AppButton
               class="hidden-btn"
               label="View Homes"
               view
               @click="goToHousesPage('Beograd', 'Srbija')"
            />
         </div>
      </div>
      <div class="item-6">
         <img
            src="https://uploads-ssl.webflow.com/62200394843406293f033f05/62aa3477353beb24e56e68be_attractions-of-split.jpeg"
            alt="Home 6"
         />
         <h3 class="grid-image__title">Split, HR</h3>
         <div class="position-down">
            <AppButton
               class="hidden-btn"
               label="View Homes"
               view
               @click="goToHousesPage('Split', 'Hrvatska')"
            />
         </div>
      </div>
   </div>
</template>

<style scoped>
   .grid-image {
      width: 100%;
      margin: 9.6rem 0;
      padding: 0 1.6rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 1.2rem;
      grid-row-gap: 1.2rem;
   }
   .item-1 {
      grid-area: 1 / 1 / 3 / 2;
      position: relative;
      overflow: hidden;
      border-radius: 2rem;
   }
   .item-2 {
      grid-area: 1 / 2 / 2 / 3;
      position: relative;
      overflow: hidden;
      border-radius: 2rem;
   }
   .item-3 {
      grid-area: 2 / 2 / 3 / 3;
      position: relative;
      overflow: hidden;
      border-radius: 2rem;
   }
   .item-4 {
      grid-area: 1 / 3 / 2 / 4;
      position: relative;
      overflow: hidden;
      border-radius: 2rem;
   }
   .item-5 {
      grid-area: 2 / 3 / 3 / 4;
      position: relative;
      overflow: hidden;
      border-radius: 2rem;
   }
   .item-6 {
      grid-area: 1 / 4 / 3 / 5;
      position: relative;
      overflow: hidden;
      border-radius: 2rem;
   }
   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 2rem;
      overflow: hidden;
      transition: all 0.5s ease-in-out;
   }
   .item-1:hover img,
   .item-2:hover img,
   .item-3:hover img,
   .item-4:hover img,
   .item-5:hover img,
   .item-6:hover img {
      transform: scale(1.15);
   }
   .grid-image__title {
      position: absolute;
      top: 2rem;
      left: 2rem;
      color: #fff;
      font-size: 2.4rem;
      font-weight: 700;
      text-shadow: 1px 1px 5px #555;
   }
   .position-down {
      display: none;
      position: absolute;
      bottom: 2rem;
      right: 2rem;
   }
   .item-1:hover .position-down,
   .item-2:hover .position-down,
   .item-3:hover .position-down,
   .item-4:hover .position-down,
   .item-5:hover .position-down,
   .item-6:hover .position-down {
      display: block;
   }

   @media (max-width: 780px) {
      .grid-image {
         grid-template-columns: repeat(2, 1fr);
         grid-template-rows: repeat(4, 1fr);
      }
      .item-4 {
         grid-area: 3 / 1 / 4 / 2;
      }
      .item-5 {
         grid-area: 4 / 1 / 5 / 2;
      }
      .item-6 {
         grid-area: 3 / 2 / 5 / 3;
      }
   }

   @media (max-width: 500px) {
      .grid-image {
         grid-template-columns: 1fr;
         grid-template-rows: repeat(6, 1fr);
      }
      .item-1 {
         grid-area: 1 / 1 / 2 / 2;
      }
      .item-2 {
         grid-area: 2 / 1 / 3 / 2;
      }
      .item-3 {
         grid-area: 3 / 1 / 4 / 2;
      }
      .item-4 {
         grid-area: 4 / 1 / 5 / 2;
      }
      .item-5 {
         grid-area: 5 / 1 / 6 / 2;
      }
      .item-6 {
         grid-area: 6 / 1 / 7 / 2;
      }
   }
</style>
