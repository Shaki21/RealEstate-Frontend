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
         title: 'Account created Successfully',
         text: 'You have successfully registered!',
         showConfirmButton: false,
         timer: 3000,
         didOpen: () => {
            Swal.getPopup().style.fontSize = '1.8rem';
         },
      });
   };

   const router = useRouter();

   const regData = ref({
      first_name: '',
      last_name: '',
      password: '',
      password_confirmation: '',
      username: '',
      email: '',
   });
   const userStore = useUserStore();

   //----ON CLICK EVENT----
   const signUp = async (event) => {
      event.preventDefault();
      try {
         const response = await authService.signUp(regData.value);
         if (response.status === 201) {
            const token = response.data;
            localStorage.setItem('app_token', token.access_token);
            showSuccessAlert();
         }
         const { data: user } = await authService.getMe();
         userStore.setCurrentUser(user);
         router.push({ name: 'HomePage' });
      } catch (error) {
         console.error(error);
      }
   };

   const error = ref({
      first_name: false,
      last_name: false,
      email: false,
      username: false,
      password: false,
      password_confirmation: false,
   });

   watch(
      () => regData.value.first_name,
      (newName) => {
         error.value.first_name = newName.length < 1;
      }
   );
   watch(
      () => regData.value.last_name,
      (newLastName) => {
         error.value.last_name = newLastName.length < 1;
      }
   );
   watch(
      () => regData.value.email,
      (newEmail) => {
         if (newEmail.indexOf('@') > -1 && newEmail.indexOf('.') > -1) {
            error.value.email = false;
         } else {
            error.value.email = true;
         }
      }
   );
   watch(
      () => regData.value.username,
      (newUsername) => {
         error.value.username = newUsername.length < 1;
      }
   );
   watch(
      () => regData.value.password,
      (newPassword) => {
         error.value.password = newPassword.length < 6;
      }
   );
   watch(
      () => regData.value.password_confirmation,
      (newPasswordConfirmation) => {
         if (newPasswordConfirmation === regData.value.password) {
            error.value.password_confirmation = false;
         } else {
            error.value.password_confirmation = true;
         }
      }
   );
</script>

<template>
   <form class="form">
      <div class="form__title-box">
         <h1 class="form__title">Create a account</h1>
      </div>
      <!-- CONTROLS -->
      <div class="form__groups">
         <div class="form__group">
            <label class="form__label">First name</label>
            <input
               class="form__input"
               type="text"
               placeholder="First name"
               v-model="regData.first_name"
               :style="{ border: error.first_name ? '1px solid red' : '' }"
            />
            <p v-if="error.first_name" class="error-message">
               The first name field is required.
            </p>
         </div>
         <div class="form__group">
            <label class="form__label">Last name</label>
            <input
               class="form__input"
               type="text"
               placeholder="Last name"
               v-model="regData.last_name"
               :style="{ border: error.last_name ? '1px solid red' : '' }"
            />
            <p v-if="error.last_name" class="error-message">
               The last name field is required.
            </p>
         </div>
         <div class="form__group">
            <label class="form__label">E-mail</label>
            <input
               class="form__input"
               type="text"
               placeholder="email"
               v-model="regData.email"
               :style="{ border: error.email ? '1px solid red' : '' }"
            />
            <p v-if="error.email" class="error-message">
               Email is not valid, must contain "@" and ".".
            </p>
         </div>
         <div class="form__group">
            <label class="form__label">Username</label>
            <input
               class="form__input"
               type="text"
               placeholder="Username"
               v-model="regData.username"
               :style="{ border: error.username ? '1px solid red' : '' }"
            />
            <p v-if="error.username" class="error-message">
               The username field is required.
            </p>
         </div>
         <div class="form__group">
            <label class="form__label">Password</label>
            <input
               class="form__input"
               type="password"
               placeholder="password"
               v-model="regData.password"
               :style="{ border: error.password ? '1px solid red' : '' }"
            />
            <p v-if="error.password" class="error-message">
               Password must contain at least 6 characters.
            </p>
         </div>
         <div class="form__group">
            <label class="form__label">Password confirmation</label>
            <input
               class="form__input"
               type="password"
               placeholder="Password confirmation"
               v-model="regData.password_confirmation"
               :style="{
                  border: error.password_confirmation ? '1px solid red' : '',
               }"
            />
            <p v-if="error.password_confirmation" class="error-message">
               Passwords do not match.
            </p>
         </div>
      </div>
      <!-- ACTIONS -->
      <AppButton
         label="Sign up"
         white
         style="
            float: right;
            background: linear-gradient(215deg, #efdabf 0%, #d4a86b 80%);
            color: #fff;
            box-shadow: rgba(0, 0, 0, 0.13) 0px 10px 22px,
               rgba(0, 0, 0, 0.1) 0px 8px 8px;
         "
         @click="signUp"
      />
   </form>
</template>

<style scoped>
   .form {
      padding: 2.4rem;
      width: 100%;
      color: #fff;
      border-radius: 2rem;
      background-color: #00000040;
      box-shadow: 0 0 15px #0000006b;
      backdrop-filter: blur(5px);
   }
   .form__title-box {
      text-align: center;
      margin-bottom: 3.2rem;
   }
   .form__title {
      font-size: 3.2rem;
      font-weight: 500;
   }
   .form__group {
      margin-bottom: 1.6rem;
      position: relative;
   }
   .form__label {
      font-size: 1.6rem;
      margin-left: 1.6rem;
   }
   .form__input {
      width: 100%;
      border-radius: 1.7rem;
      border: 0.1rem solid #fff;
      padding: 1.2rem;
      font-size: 1.2rem;
      background-color: #fff;
      margin-top: 1.2rem;
      position: relative;
   }

   .form__input:hover {
      box-shadow: rgba(0, 0, 0, 0.13) 0px 10px 22px,
         rgba(0, 0, 0, 0.1) 0px 8px 8px;
   }
   .form__input:focus {
      outline: none !important;
      border: 2px solid #d4a86b;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 22px,
         rgba(0, 0, 0, 0.22) 0px 8px 8px;
   }

   .error-message {
      width: max-content;
      padding: 0.4rem 0.8rem;
      background-color: #fff;
      border-radius: 1rem;
      border: 1px solid #ff0000;
      color: red;
      box-shadow: rgba(0, 0, 0, 0.13) 0px 10px 22px,
         rgba(0, 0, 0, 0.1) 0px 8px 8px;
      position: absolute;
      top: 3.5rem;
      left: 0.5rem;
      margin-left: calc(100%);
   }

   @media (max-width: 760px) {
      .error-message {
         width: fit-content;
         position: relative;
         top: 0.8rem;
         left: 0;
         margin: 0;
      }
   }
</style>
