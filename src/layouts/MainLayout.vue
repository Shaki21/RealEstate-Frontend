<script setup>
   import TheNavbar from '@/components/TheNavbar.vue';
   import { ref, onMounted, onUnmounted } from 'vue';

   const scrolled = ref(false);

   const handleScroll = () => {
      scrolled.value = window.pageYOffset > 0;
   };

   onMounted(() => {
      window.addEventListener('scroll', handleScroll);
   });

   onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
   });
</script>

<template>
   <TheNavbar class="navbar" :class="{ 'navbar-scrolled': scrolled }" />

   <router-view />
</template>

<style scoped>
   .navbar {
      position: sticky;
      top: 0;
      z-index: 100;
   }
   .navbar-scrolled {
      background: linear-gradient(
         180deg,
         rgba(28, 59, 139) 0%,
         rgb(25, 62, 151) 90%,
         rgba(135, 168, 255, 0) 97%
      );
   }
</style>
