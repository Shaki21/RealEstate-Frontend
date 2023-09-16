<script setup>
   import LoginForm from '@/components/LoginForm.vue';
   import VueBasicAlert from 'vue-basic-alert';
   import { ref } from 'vue';

   function alert() {
      ref.alert.showAlert(
         'success',
         35,
         'solid',
         'Success 200',
         'This is the information of something you may know Success.'
      );
   }
</script>

<template>
   <div class="background">
      <img src="@/assets/login-bg.jpg" alt="Background" />

      <div class="login-container">
         <LoginForm @alert="alert" />
      </div>
   </div>
   <vue-basic-alert
      v-if="showAlert"
      :duration="3000"
      :closeIn="3000"
      ref="alert"
   />
</template>

<style scoped>
   .background {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
   }
   .background img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
   .login-container {
      background-color: rgba(0, 0, 0, 0.45);
      margin: auto auto;
      padding: 3.2rem;
      border-radius: 2rem;
      box-shadow: 0 0 15px #000;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      max-width: 600px;
      width: 95%;
      height: fit-content;
      backdrop-filter: blur(5px);
   }

   @media (max-width: 600px) {
      .login-container {
         padding: 1.2rem;
      }
   }
</style>
