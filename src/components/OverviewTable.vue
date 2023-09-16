<script setup>
   import { separateNumbers } from "@/utils/filter";
   defineProps({
      currentHouse: Object,
   });
</script>

<template>
   <div class="overview__table">
      <div class="c1-r1"><b>Property ID</b></div>
      <div class="c2-r1">{{ currentHouse.id }}</div>
      <div class="c1-r2"><b>Price</b></div>
      <div class="c2-r2">{{ separateNumbers(currentHouse.price) }} $</div>
      <div class="c1-r3"><b>Property Type</b></div>
      <div class="c2-r3">{{ currentHouse.property_type }}</div>
      <div class="c1-r4"><b>Property status</b></div>
      <div class="c2-r4">{{ currentHouse.property_status }}</div>
      <div class="c3-r1"><b>Bedrooms</b></div>
      <div class="c4-r1">{{ currentHouse.bedroom }}</div>
      <div class="c3-r2"><b>Bathrooms</b></div>
      <div class="c4-r2">{{ currentHouse.bathroom }}</div>
      <div class="c3-r3"><b>Size</b></div>
      <div class="c4-r3">{{ currentHouse.quadrature }} m&#178;</div>
      <div class="c3-r4"><b>Land area</b></div>
      <div class="c4-r4">{{ currentHouse.garden_quadrature }} m&#178;</div>
   </div>
</template>

<style scoped>
   .overview__table {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
      background-color: #fff;
   }
   .c1-r1 {
      grid-area: 1 / 1 / 2 / 2;
      padding: 1.2rem;
      background-color: #d9d9d9;
   }
   .c2-r1 {
      grid-area: 1 / 2 / 2 / 3;
      padding: 1.2rem;
      background-color: #d9d9d9;
   }
   .c1-r2 {
      grid-area: 2 / 1 / 3 / 2;
      padding: 1.2rem;
      background-color: #d9d9d967;
   }
   .c2-r2 {
      grid-area: 2 / 2 / 3 / 3;
      padding: 1.2rem;
      background-color: #d9d9d967;
   }
   .c1-r3 {
      grid-area: 3 / 1 / 4 / 2;
      padding: 1.2rem;
      background-color: #d9d9d9;
   }
   .c2-r3 {
      grid-area: 3 / 2 / 4 / 3;
      padding: 1.2rem;
      background-color: #d9d9d9;
   }
   .c1-r4 {
      grid-area: 4 / 1 / 5 / 2;
      padding: 1.2rem;
      background-color: #d9d9d967;
   }
   .c2-r4 {
      grid-area: 4 / 2 / 5 / 3;
      padding: 1.2rem;
      background-color: #d9d9d967;
   }
   .c3-r1 {
      grid-area: 1 / 3 / 2 / 4;
      padding: 1.2rem;
      background-color: #d9d9d9;
   }
   .c4-r1 {
      grid-area: 1 / 4 / 2 / 5;
      padding: 1.2rem;
      background-color: #d9d9d9;
   }
   .c3-r2 {
      grid-area: 2 / 3 / 3 / 4;
      padding: 1.2rem;
      background-color: #d9d9d967;
   }
   .c4-r2 {
      grid-area: 2 / 4 / 3 / 5;
      padding: 1.2rem;
      background-color: #d9d9d967;
   }
   .c3-r3 {
      grid-area: 3 / 3 / 4 / 4;
      padding: 1.2rem;
      background-color: #d9d9d9;
   }
   .c4-r3 {
      grid-area: 3 / 4 / 4 / 5;
      padding: 1.2rem;
      background-color: #d9d9d9;
   }
   .c3-r4 {
      grid-area: 4 / 3 / 5 / 4;
      padding: 1.2rem;
      background-color: #d9d9d967;
   }
   .c4-r4 {
      grid-area: 4 / 4 / 5 / 5;
      padding: 1.2rem;
      background-color: #d9d9d967;
   }
   @media (max-width: 610px) {
      .overview__table {
         grid-template-columns: repeat(2, 1fr);
         grid-template-rows: repeat(8, 1fr);
      }
      .c3-r1 {
         grid-area: 5 / 1 / 6 / 2;
      }
      .c4-r1 {
         grid-area: 5 / 2 / 6 / 3;
      }
      .c3-r2 {
         grid-area: 6 / 1 / 7 / 2;
      }
      .c4-r2 {
         grid-area: 6 / 2 / 7 / 3;
      }
      .c3-r3 {
         grid-area: 7 / 1 / 8 / 2;
      }
      .c4-r3 {
         grid-area: 7 / 2 / 8 / 3;
      }
      .c3-r4 {
         grid-area: 8 / 1 / 9 / 2;
      }
      .c4-r4 {
         grid-area: 8 / 2 / 9 / 3;
      }
   }
</style>
