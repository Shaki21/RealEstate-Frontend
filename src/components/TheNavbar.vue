<script setup>
   import { useUserStore } from '@/stores/UserStore.js';
   import { ref, onMounted } from 'vue';
   import { useRouter } from 'vue-router';
   import AppButton from '@/components/AppButton.vue';
   import authService from '@/services/authService.js';
   import Swal from 'sweetalert2';

   const showSuccessAlert = () => {
      Swal.fire({
         icon: 'success',
         title: 'Logout Successful',
         text: 'You have successfully logged out!',
         showConfirmButton: false,
         timer: 3000,
         didOpen: () => {
            Swal.getPopup().style.fontSize = '1.8rem';
         },
      });
   };

   const router = useRouter();

   const userStore = useUserStore();
   const showMobileMenu = ref(false);

   function showMenu() {
      showMobileMenu.value = !showMobileMenu.value;
   }

   async function logOut() {
      const response = await authService.logOut();
      if (response.status === 200) {
         userStore.clearCurrentUser();
         localStorage.removeItem('app_token');
         showSuccessAlert();
         router.push({ name: 'HomePage' });
      }
   }

   onMounted(() => {
      const getMe = async () => {
         try {
            const response = await authService.getMe();
            if (response.status === 200) {
               userStore.setCurrentUser(response.data);
            } else {
               labelUser = 'LogIn';
            }
         } catch (error) {
            console.log(error);
         }
      };
      getMe();
   });
</script>

<template>
   <nav class="navbar">
      <RouterLink :to="{ name: 'HomePage' }">
         <div class="logo">
            <h1 class="logo-title">REAL ESTATE</h1>
         </div></RouterLink
      >

      <div
         class="menu-content"
         :class="showMobileMenu ? 'menu-open' : 'menu-closed'"
      >
         <ul class="menu__list">
            <li class="menu__list-element" @click="showMobileMenu = false">
               <RouterLink to="/home#home">Home</RouterLink>
            </li>
            <li class="menu__list-element" @click="showMobileMenu = false">
               <RouterLink to="/home#about">About</RouterLink>
            </li>
            <li class="menu__list-element" @click="showMobileMenu = false">
               <RouterLink to="/home#contact">Contact</RouterLink>
            </li>
            <div class="user-status" @click="showMobileMenu = false">
               <font-awesome-icon
                  class="menu__icon"
                  icon="fa-regular fa-user"
                  size="lg"
                  style="color: #fff"
               /><span
                  v-if="userStore.currentUser.first_name"
                  class="user-logout"
                  >{{ userStore.currentUser.first_name }}<span></span
                  ><AppButton label="Logout" logout @click="logOut"
               /></span>
               <span v-else class="user-login"
                  ><RouterLink :to="{ name: 'LoginPage' }"
                     >Login</RouterLink
                  ></span
               >
            </div>
         </ul>
      </div>
      <div class="menu-btn" @click="showMenu">
         <font-awesome-icon icon="fa-solid fa-bars" size="xl" />
      </div>
   </nav>
</template>

<style scoped>
   .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 7.5rem;
      padding: 0 1.6rem;
      position: relative;
      color: #fff;
   }
   .logo-title {
      font-style: normal;
      font-weight: 600;
      font-size: 3.6rem;
      z-index: 100;
   }
   .menu__list {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
   }
   .menu__list-element {
      margin: 0 1.2rem;
      cursor: pointer;
      padding: 0.8rem;
      font-size: 1.8rem;
   }
   .menu__list-element:hover {
      background-color: #ffffff40;
      border-radius: 2rem;
   }
   .menu__list-element:active {
      transform: translate(1px, 1px);
   }
   .user-status {
      cursor: pointer;
      font-size: 1.8rem;
      font-weight: 400;
   }
   .user-status:hover {
      text-shadow: 2px 2px 8px #ffffff80;
      border-radius: 2rem;
   }
   .user-status:active {
      transform: translate(1px, 1px);
   }
   a {
      color: #fff;
   }
   .menu__icon {
      margin: 0 0.8rem;
   }
   .menu-btn {
      display: none;
   }

   @media (max-width: 850px) {
      .menu__list-element {
         margin: 0 0.4rem;
      }
   }

   @media (max-width: 780px) {
      .menu-btn {
         display: block;
         margin-right: 1.6rem;
         z-index: 100;
      }
      .menu-open {
         opacity: 1;
         height: 40rem;
         width: 100%;
         position: fixed;
         top: 0;
         left: 0;
         background: linear-gradient(
            0deg,
            rgb(20, 45, 115) 0%,
            rgb(25, 62, 151) 100%
         );
         padding: 8rem;
      }
      .menu-closed {
         opacity: 0;
         height: 0;
         width: 100%;
         position: absolute;
         top: -22rem;
         left: 0;
      }
      .menu__list {
         flex-direction: column;
         z-index: 100;
         position: relative;
         font-size: 2.4rem;
      }
      .menu__list-element {
         margin-bottom: 2.4rem;
      }
      .menu-content {
         transition: all 0.5s ease-in-out;
      }
   }
</style>
