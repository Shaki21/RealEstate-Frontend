<script setup>
   import SignUpForm from '@/components/SignUpForm.vue';
</script>

<template>
   <div class="wrapper">
      <div class="left-side">
         <SignUpForm />
      </div>
      <div class="right-side">
         <img class="logo" src="@/assets/logo.png" alt="Logo" />
      </div>
   </div>
</template>

<style scoped>
   .wrapper {
      height: 100%;
      display: grid;
      grid-template-columns: 60% 40%;
      grid-template-rows: 1fr;
      background-image: url('@/assets/background-gradient.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
   }

   .right-side {
      display: grid;
      place-items: center;
   }
   .logo {
      width: 75%;
   }

   .left-side {
      display: grid;
      place-items: center;
      padding: 2.4rem;
   }

   @media (max-width: 760px) {
      .wrapper {
         grid-template-columns: 1fr;
      }
      .right-side {
         display: none;
      }
   }
</style>
