<script setup>
   import { ref } from "vue";
</script>

<template>
   <div class="wrapper">
      <!-- <div class="modal__group">
         <select class="modal__input" v-model="product.boutiqueId">
            <option disabled value="">Odaberi Državu</option>
            <option v-for="boutique in boutiques" :value="boutique.id">
               {{ boutique.name }}
            </option>
         </select>
      </div> -->
      <select class="filter__input" v-model="filter.countryId">
         <option disabled value="">Odaberi Državu</option>
         <option v-for="country in countries" :value="country.id">
            {{ country.name }}
         </option>
      </select>
   </div>
</template>
