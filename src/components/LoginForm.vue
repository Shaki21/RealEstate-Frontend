<script setup>
   import { ref, watch } from 'vue';
   import { useUserStore } from '@/stores/UserStore.js';
   import authService from '@/services/authService.js';
   import { useRouter } from 'vue-router';
   import Swal from 'sweetalert2';
   import AppButton from '@/components/AppButton.vue';

   const showSuccessAlert = () => {
      Swal.fire({
         icon: 'success',
         title: 'Login Successful',
         text: 'You have successfully logged in!',
         showConfirmButton: false,
         timer: 3000,
         didOpen: () => {
            Swal.getPopup().style.fontSize = '1.8rem';
         },
      });
   };

   const router = useRouter();

   const email = ref('');
   const password = ref('');
   const userStore = useUserStore();

   //----ON CLICK EVENT----
   const logIn = async (event) => {
      event.preventDefault();
      try {
         const response = await authService.logIn(email.value, password.value);
         if (response.status === 200) {
            localStorage.setItem('app_token', response.data.access_token);
         }
         const { data } = await authService.getMe();
         userStore.setCurrentUser(data);
         showSuccessAlert();
         router.push({ name: 'HomePage' });
      } catch (error) {
         notUser.value = true;
         console.error(error);
      }
   };

   /*---- VALIDATION ----*/
   const emailError = ref(false);
   const passwordError = ref(false);
   const notUser = ref(false);

   watch(email, (newEmail) => {
      emailError.value = !newEmail.includes('@' && '.');
      notUser.value = false;
   });

   watch(password, (newPassword) => {
      passwordError.value = newPassword.length < 6;
      notUser.value = false;
   });
</script>

<template>
   <form class="form">
      <div class="form__title-box">
         <h1 class="form__title">Login</h1>
         <p class="form__subtitle">Please enter your Login and your Password</p>
      </div>
      <!-- CONTROLS -->
      <div class="form__groups">
         <div class="form__group">
            <font-awesome-icon
               class="form__icon"
               icon="fa-regular fa-user"
               size="lg"
               style="color: #000000"
            />
            <input
               class="form__input"
               type="text"
               placeholder="email"
               v-model="email"
               :style="{ border: emailError ? '1px solid red' : '' }"
            />
            <p v-if="emailError" class="error-message">
               Email is not valid, must contain "@" and ".".
            </p>
         </div>
         <div class="form__group">
            <font-awesome-icon
               class="form__icon"
               icon="fa-solid fa-lock"
               size="lg"
               style="color: #000000"
            />
            <input
               class="form__input"
               type="password"
               placeholder="Password"
               v-model="password"
               :style="{ border: passwordError ? '1px solid red' : '' }"
            />

            <p v-if="passwordError" class="error-message">
               Password must contain at least 6 characters.
            </p>
            <p v-if="notUser" class="error-message">
               The entered email or password is incorrect.
            </p>
         </div>
      </div>
      <!-- ACTIONS -->
      <div class="form__actions">
         <AppButton
            style="width: 100%; height: 7rem; margin: 0; font-size: 2.7rem"
            label="Login"
            white
            @click="logIn"
         />
         <router-link :to="{ name: 'RegisterPage' }">
            <AppButton style="float: right" label="Register?" transparent />
         </router-link>
      </div>
   </form>
</template>

<style scoped>
   .form {
      max-width: 54rem;
      padding: 1.2rem;
   }
   .form__title-box {
      text-align: center;
      margin-bottom: 4.8rem;
   }
   .form__title {
      font-size: 6.2rem;
      font-weight: 400;
      color: #fff;
      margin: 1.2rem;
   }
   .form__subtitle {
      font-size: 2rem;
      font-weight: 400;
      line-height: 3.2rem;
      color: #fff;
      margin: 1.6rem 2.4rem;
   }

   .form__group {
      position: relative;
      margin-bottom: 5.2rem;
   }
   .form__icon {
      position: absolute;
      top: 50%;
      left: 1.8rem;
      transform: translateY(-50%);
   }

   .form__input {
      width: 100%;
      border-radius: 2rem;
      border: none;
      padding: 1.2rem 1.2rem 1.2rem 4.8rem;
      font-size: 1.6rem;
      background-color: rgba(255, 255, 255);
   }

   .btn-register {
      float: right;
      font-size: 2rem;
      text-align: center;
      width: 12rem;
      height: 4rem;
      background-color: #ffffffaa;
      border-radius: 2rem;
      border-style: none;
      margin-top: 2.4rem;
      padding: 1rem;
   }
   .error-message {
      width: fit-content;
      margin: 0.8rem;
      padding: 0.4rem 0.8rem;
      background-color: #fff;
      border-radius: 1rem;
      border: 1px solid #ff0000;
      color: red;
      position: absolute;
   }
</style>
