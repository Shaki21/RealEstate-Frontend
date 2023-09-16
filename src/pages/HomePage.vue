<script setup>
   import AppButton from '@/components/AppButton.vue';
   import TheImageGrid from '@/components/TheImageGrid.vue';
   import { ref, watch, onMounted } from 'vue';
   import { useRouter } from 'vue-router';
   import { useUserStore } from '@/stores/UserStore.js';

   const userStore = useUserStore();
   const router = useRouter();
   const userAdmin = ref(false);

   const checkUser = () => {
      if (userStore.currentUser.is_admin === 1) {
         userAdmin.value = true;
      } else {
         userAdmin.value = false;
      }
   };

   /* FIND A HOME */
   const findHouse = () => {
      router.push({ name: 'HousesPage' });
   };

   /* ADVERTISE A HOME */
   const advertiseHouse = () => {
      router.push({ name: 'AdvertiseHousePage' });
   };

   onMounted(() => {
      checkUser();
   });
   watch(userStore, () => {
      checkUser();
   });
</script>

<template>
   <header id="home" class="header">
      <div class="header__text-box">
         <h1 class="heder-title">
            Find the perfect home for sale in Europe with our premier real
            estate website
         </h1>
         <AppButton
            class="btn-header"
            label="Find a house"
            white
            @click="findHouse"
         />
         <AppButton
            v-if="userAdmin"
            class="btn-header"
            label="Advertise a house"
            white
            @click="advertiseHouse"
         />
      </div>
   </header>
   <main>
      <section id="about" class="section-about">
         <div class="u-center-text">
            <h2 class="heading-secondary">
               Explore homes in Southeastern Europe
            </h2>
            <p class="title-secondary">
               Take a deep dive and browse homes for sale, original neighborhood
               photos, resident reviews and local insights to find what is right
               for you.
            </p>
         </div>
         <TheImageGrid />
      </section>
      <hr />
      <section id="contact" class="section-contact">
         <div class="u-center-text">
            <h2 class="heading-secondary">Our Agents</h2>
         </div>
         <div class="two-col">
            <div class="left-side">
               <div class="left-side__wrapper">
                  <img
                     src="@/assets/user-ante.jpeg"
                     alt="User"
                     class="user-img"
                  />
                  <h3 class="name-title">Ante Bruno Šakić</h3>
                  <p class="contact-title">
                     Upoznajte Antu Brunu Šakića - vašeg pouzdanog i iskusnog
                     agenta za nekretnine. Ante je stručnjak s dugogodišnjim
                     iskustvom u industriji nekretnina. Njegova strast prema
                     poslu, izvanredne vještine pregovaranja i duboko
                     razumijevanje tržišta čine ga izvrsnim izborom za vaše
                     nekretninske potrebe. Kao agent za nekretnine, Anteje
                     posvećen pružanju vrhunske usluge svojim klijentima.
                  </p>
                  <div class="contact-icon__group">
                     <a
                        href="https://www.facebook.com/antebruno.sakic.71/"
                        target="_blank"
                        ><font-awesome-icon
                           icon="fa-brands fa-facebook"
                           size="2xl"
                           style="color: #ffffff"
                           hreaf
                     /></a>
                     <a
                        href="https://www.instagram.com/bruno_shaki/"
                        target="_blank"
                        ><font-awesome-icon
                           icon="fa-brands fa-instagram"
                           size="2xl"
                           style="color: #ffffff"
                     /></a>
                     <a
                        href="https://www.linkedin.com/in/ante-bruno-%C5%A1aki%C4%87-a796a8243/"
                        target="_blank"
                        ><font-awesome-icon
                           icon="fa-brands fa-linkedin"
                           size="2xl"
                           style="color: #ffffff"
                     /></a>
                     <a href="https://github.com/Shaki21" target="_blank"
                        ><font-awesome-icon
                           icon="fa-brands fa-github"
                           size="2xl"
                           style="color: #ffffff"
                     /></a>
                  </div>
               </div>
               <div class="contact-info">
                  <h3 class="contact-info__title">Contact Ante Bruno</h3>
                  <div class="contact-info__data">
                     <font-awesome-icon
                        class="icon-circle"
                        icon="fa-solid fa-phone"
                        size="2xl"
                        style="color: #fff"
                     />
                     <span><p class="contact-data">+387 63 123 456</p></span>
                  </div>
                  <div class="contact-info__data">
                     <font-awesome-icon
                        class="icon-circle"
                        icon="fa-regular fa-envelope"
                        size="2xl"
                        style="color: #fff"
                     />
                     <span
                        ><a
                           href="mailto: ante.bruno.sakic@fpmoz.sum.ba"
                           class="contact-data"
                           >ante.bruno.sakic@fpmoz.sum.ba</a
                        ></span
                     >
                  </div>
                  <div class="contact-info__data">
                     <font-awesome-icon
                        class="icon-circle"
                        icon="fa-regular fa-map"
                        size="2xl"
                        style="color: #fff"
                     />
                     <span
                        ><a
                           href="https://www.google.com/maps/place/Mostar+88000,+Bosna+i+Hercegovina/@43.3403031,17.7796984,13z/data=!4m6!3m5!1s0x134b43a43b6340a9:0x14f32b2d4e37c5a!8m2!3d43.3437748!4d17.8077578!16zL20vMDJwNHRo?entry=ttu"
                           target="_blank"
                           ><p class="contact-data">Mostar</p></a
                        ></span
                     >
                  </div>
               </div>
            </div>
            <div class="right-side">
               <div class="right-side__wrapper">
                  <img
                     src="@/assets/user-josip.jpeg"
                     alt="User"
                     class="user-img"
                  />
                  <h3 class="name-title">Josip Kramar</h3>
                  <p class="contact-title">
                     Josip je vrhunski agent nekretnina koji je stekao
                     izvanredan ugled u industriji svojim stručnim znanjem,
                     posvećenošću i izvanrednom korisničkom uslugom. Sa
                     dugogodišnjim iskustvom u poslovanju nekretninama, Josip je
                     postao jedan od najtraženijih agenata na tržištu.Njegova
                     otvorenost i povjerenje koje je izgradio s klijentima
                     ključni su faktori uspjeha u njegovoj karijeri.
                  </p>
                  <div class="contact-icon__group">
                     <a href="https://www.google.com/" target="_blank"
                        ><font-awesome-icon
                           icon="fa-brands fa-facebook"
                           size="2xl"
                           style="color: #ffffff"
                     /></a>
                     <a href="https://www.google.com/" target="_blank"
                        ><font-awesome-icon
                           icon="fa-brands fa-instagram"
                           size="2xl"
                           style="color: #ffffff"
                     /></a>
                     <a href="https://www.google.com/" target="_blank"
                        ><font-awesome-icon
                           icon="fa-brands fa-linkedin"
                           size="2xl"
                           style="color: #ffffff"
                     /></a>
                     <a href="https://www.google.com/" target="_blank"
                        ><font-awesome-icon
                           icon="fa-brands fa-github"
                           size="2xl"
                           style="color: #ffffff"
                     /></a>
                  </div>
               </div>
               <div class="contact-info">
                  <h3 class="contact-info__title">Contact Josip</h3>
                  <div class="contact-info__data">
                     <font-awesome-icon
                        class="icon-circle"
                        icon="fa-solid fa-phone"
                        size="2xl"
                        style="color: #fff"
                     />
                     <span><p class="contact-data">+387 63 654 321</p></span>
                  </div>
                  <div class="contact-info__data">
                     <font-awesome-icon
                        class="icon-circle"
                        icon="fa-regular fa-envelope"
                        size="2xl"
                        style="color: #fff"
                     />
                     <span
                        ><a
                           href="mailto: josip.kramar@fpmoz.sum.ba"
                           class="contact-data"
                        >
                           josip.kramar@fpmoz.sum.ba
                        </a></span
                     >
                  </div>
                  <div class="contact-info__data">
                     <font-awesome-icon
                        class="icon-circle"
                        icon="fa-regular fa-map"
                        size="2xl"
                        style="color: #fff"
                     />
                     <span
                        ><a
                           href="https://www.google.com/maps/place/Mostar+88000,+Bosna+i+Hercegovina/@43.3403031,17.7796984,13z/data=!4m6!3m5!1s0x134b43a43b6340a9:0x14f32b2d4e37c5a!8m2!3d43.3437748!4d17.8077578!16zL20vMDJwNHRo?entry=ttu"
                           target="_blank"
                           ><p class="contact-data">Mostar</p></a
                        ></span
                     >
                  </div>
               </div>
            </div>
         </div>
      </section>
      <footer>Copyright © 2023 Ante Bruno Šakić and Josip Kramar</footer>
   </main>
</template>

<style scoped>
   .header {
      height: 100vh;
      margin-top: -7.5rem;
      background-image: url('@/assets/home-bg.jpg');
      background-size: cover;
      background-position: top;
      border-radius: 0 0 10rem 10rem;
   }
   .header__text-box {
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 85%;
   }
   .heder-title {
      font-size: 4.4rem;
      font-weight: 500;
      line-height: 61px;
      text-align: center;
      color: #fff;
      margin-bottom: 3.2rem;
   }
   .btn-header {
      width: 22rem;
      height: 6rem;
      border-radius: 30rem;
   }

   /* --Section About-- */
   .section-about {
      width: 100%;
      padding-top: 9.6rem;
   }
   .u-center-text {
      text-align: center !important;
   }
   .heading-secondary {
      font-size: 3.2rem;
      text-transform: uppercase;
      font-weight: 700;
      display: inline-block;
      margin-bottom: 6.4rem;
   }
   .title-secondary {
      font-size: 2.4rem;
      line-height: 4rem;
      width: 80%;
      margin: 0 auto;
   }

   /* --Section Contact-- */
   .section-contact {
      padding-top: 6.4rem;
   }
   .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      column-gap: 2.4rem;
      padding: 1.6rem;
   }
   .left-side,
   .right-side {
      display: grid;
      grid-template-rows: 1fr, 1fr;
   }
   .left-side__wrapper,
   .right-side__wrapper {
      max-width: 40rem;
      height: 78rem;
      background: linear-gradient(
         0deg,
         rgb(20, 45, 115, 1) 0%,
         rgba(25, 62, 151, 1) 80%,
         rgba(255, 255, 255, 0) 80%,
         rgba(255, 255, 255, 0) 100%
      );
      border-radius: 2rem;
      margin: 0 auto;
      padding: 2.4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      margin-bottom: 4.8rem;
   }
   .left-side__wrapper:hover,
   .right-side__wrapper:hover {
      box-shadow: 0 8px 4px -4px rgba(158, 158, 158, 0.582);
      transform: scale(1.05);
      transition: all 0.3s ease-in-out;
   }
   .user-img {
      width: 20rem;
      height: 20rem;
      margin-bottom: 3.2rem;
      clip-path: circle(50%);
      object-fit: cover;
   }
   .name-title {
      font-weight: 400;
      font-size: 2.4rem;
      margin-bottom: 2.4rem;
      color: #fff;
   }
   .contact-title {
      font-size: 1.8rem;
      line-height: 3.2rem;
      color: #fff;
      margin-bottom: 1.6rem;
   }
   .contact-info {
      margin: 0 auto 3.2rem auto;
   }
   .contact-info__title {
      font-weight: 500;
      font-size: 2.4rem;
      margin: 3.2rem 0;
   }
   .contact-info__data {
      display: flex;
      align-items: center;
      margin-bottom: 1.6rem;
      transition: all 0.2s ease-in-out;
   }
   .contact-info__data:hover {
      text-shadow: 1px 1px 5px #8d8d8d;
   }
   .contact-icon__group {
      width: 60%;
      display: flex;
      justify-content: space-between;
   }
   .icon-circle {
      background-color: rgba(25, 62, 151, 1);
      clip-path: circle(50%);
      border: 1rem solid rgba(25, 62, 151, 1);
   }
   .contact-data {
      margin-left: 1.2rem;
      font-size: 1.8rem;
   }

   @media (max-width: 750px) {
      .two-col {
         grid-template-columns: 1fr;
      }
   }

   @media (max-width: 410px) {
      .heder-title {
         font-size: 3.2rem;
      }
      .btn-header {
         width: 20rem;
         height: 5rem;
         border-radius: 10rem;
         margin: 1.2rem;
      }
   }
   hr {
      width: 75%;
      margin: 0 auto;
   }
   footer {
      width: 100%;
      height: 10rem;
      padding-top: 2rem;
      color: #fff;
      background: linear-gradient(
         0deg,
         rgb(20, 45, 115, 1) 0%,
         rgba(25, 62, 151, 1) 77%,
         rgba(255, 255, 255, 0) 77%,
         rgba(255, 255, 255, 0) 100%
      );
      display: grid;
      place-items: center;
   }
</style>
