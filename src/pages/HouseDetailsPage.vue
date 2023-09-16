<script setup>
   import ImageGallery from '@/components/ImageGallery.vue';
   import OverviewTable from '@/components/OverviewTable.vue';
   import ContactModal from '@/components/ContactModal.vue';
   import AppButton from '@/components/AppButton.vue';
   import HouseSetModal from '@/components/HouseSetModal.vue';
   import DeleteConfirmationModal from '@/components/DeleteConfirmationModal.vue';
   import Swal from 'sweetalert2';
   import houseService from '@/services/housesService.js';
   import { separateNumbers } from '@/utils/filter.js';
   import { ref, onMounted } from 'vue';
   import { useRouter, useRoute } from 'vue-router';
   import { useUserStore } from '@/stores/UserStore.js';

   const userStore = useUserStore();
   const route = useRoute();
   const router = useRouter();
   const selectedHouse = ref(null);
   const userAdmin = ref(false);

   const showSuccessDeleteAlert = () => {
      Swal.fire({
         icon: 'success',
         title: 'House delete successful',
         text: 'You have successfully delete house!',
         showConfirmButton: false,
         timer: 3000,
         didOpen: () => {
            Swal.getPopup().style.fontSize = '1.8rem';
         },
      });
   };

   /* CONTACT MODAL */
   const isModalOpen = ref(false);

   const openContactModal = () => {
      isModalOpen.value = true;
   };
   const close = () => {
      isModalOpen.value = false;
   };

   /* DATA */
   const id = ref(route.params.id);
   const currentHouse = ref({});

   const getSelectedHouse = async (id) => {
      const { data } = await houseService.getHouseId(id);
      currentHouse.value = data;
   };
   getSelectedHouse(id.value);

   /* OPEN EDIT MODAL*/
   function editHouse() {
      selectedHouse.value = currentHouse.value;
      isSetModalOpen.value = true;
   }

   /* ON EDIT */
   const isSetModalOpen = ref(false);

   const onEdit = (editedHouse) => {
      currentHouse.value = editedHouse;
      isSetModalOpen.value = false;
   };

   /* ON DELETE */
   const isDeleteModalOpen = ref(false);

   const openDeleteModal = () => {
      isDeleteModalOpen.value = true;
   };

   const confirmDelete = async (id) => {
      try {
         await houseService.deleteHouse(id);
         isDeleteModalOpen.value = false;
         showSuccessDeleteAlert();
         router.push({ name: 'HousesPage' });
      } catch (error) {
         console.log(error);
      }
   };

   //Close modal
   function onClose() {
      isSetModalOpen.value = false;
      isDeleteModalOpen.value = false;
   }

   onMounted(() => {
      if (userStore.currentUser.is_admin === 1) {
         userAdmin.value = true;
      } else {
         userAdmin.value = false;
      }
   });
</script>

<template>
   <div class="header">
      <div class="left-side">
         <h1 class="header-title">{{ currentHouse.title }}</h1>
         <div class="groups-specs">
            <div class="group-specs">
               <font-awesome-icon
                  class="specs-icon"
                  icon="fa-solid fa-barcode"
                  size="xl"
                  style="color: #0a66ca"
               />
               <div class="right">
                  <h4 class="specs">{{ currentHouse.id }}</h4>
                  <p class="specs-title">Property ID</p>
               </div>
            </div>
            <div class="group-specs">
               <font-awesome-icon
                  class="specs-icon"
                  icon="fa-solid fa-house"
                  size="xl"
                  style="color: #0a66ca"
               />
               <div class="right">
                  <h4 class="specs">{{ currentHouse.quadrature }} m&#178;</h4>
                  <p class="specs-title">Size</p>
               </div>
            </div>
            <div class="group-specs">
               <font-awesome-icon
                  class="specs-icon"
                  icon="fa-solid fa-bed"
                  size="xl"
                  style="color: #0a66ca"
               />
               <div class="right">
                  <h4 class="specs">{{ currentHouse.bedroom }}</h4>
                  <p class="specs-title">Bedrooms</p>
               </div>
            </div>
            <div class="group-specs">
               <font-awesome-icon
                  class="specs-icon"
                  icon="fa-solid fa-bath"
                  size="xl"
                  style="color: #0a66ca"
               />
               <div class="right">
                  <h4 class="specs">{{ currentHouse.bathroom }}</h4>
                  <p class="specs-title">Bathroom</p>
               </div>
            </div>
         </div>
      </div>
      <div class="right-side">
         <h1 class="price-title">
            {{ separateNumbers(currentHouse.price) }} $
         </h1>
      </div>
   </div>
   <div class="two-col">
      <div class="wrapper">
         <ImageGallery />
         <section class="section description">
            <div class="box__head description__heading">Description</div>
            <div class="description__title">
               {{ currentHouse.description }}
            </div>
         </section>
         <section class="section location">
            <div class="box__head location__heading">Location</div>
            <div class="location__title">
               <h3 class="title title-address">
                  <b>Address:</b> &nbsp; {{ currentHouse.address }}
               </h3>
               <h3 class="title title-city">
                  <b>City:</b> &nbsp; {{ currentHouse.cityName }}
               </h3>
               <h3 class="title title-country">
                  <b>Country:</b> &nbsp; {{ currentHouse.countryName }}
               </h3>
            </div>
         </section>
         <section class="section overview">
            <div class="box__head overview__heading">Overview</div>
            <OverviewTable :currentHouse="currentHouse" />
         </section>
      </div>
      <div class="aside">
         <div v-if="!userAdmin" class="conctact__card">
            <h1 class="card__header">Contact an agent</h1>
            <div class="card__content">
               <div>
                  <img
                     class="card__img"
                     src="@/assets/user-ante-1-1.jpeg"
                     alt="Agent"
                  />
               </div>
               <div>
                  <h1 class="contetn-heading">Ante Bruno Šakić</h1>
                  <p class="content-city">Mostar</p>
                  <p class="content-number">+387 63 123 456</p>
                  <a class="content-link" @click="openContactModal"
                     >Contact now &rarr;</a
                  >
               </div>
            </div>
         </div>
         <AppButton v-if="userAdmin" label="edit" blue @click="editHouse" />
         <AppButton
            v-if="userAdmin"
            label="delete"
            blue
            @click="openDeleteModal"
         />
      </div>
   </div>
   <Transition name="fade">
      <ContactModal v-if="isModalOpen" @close="close"
   /></Transition>

   <Transition name="fade">
      <HouseSetModal
         v-if="isSetModalOpen"
         @close="onClose"
         @add="onAdd"
         @edit="onEdit"
         :selectedHouse="selectedHouse"
      />
   </Transition>

   <Transition name="fade">
      <DeleteConfirmationModal
         v-show="isDeleteModalOpen"
         @close="onClose"
         @confirm="confirmDelete(currentHouse.id)"
      ></DeleteConfirmationModal>
   </Transition>
</template>

<style scoped>
   .two-col {
      display: flex;
      justify-content: space-between;
   }
   .wrapper {
      max-width: 70rem;
      margin: 0 auto;
   }
   .header {
      margin-top: -7.5rem !important;
      padding-top: 12.8rem !important;
      width: 100%;
      height: max-content;
      padding: 1.6rem;
      background-color: #193e97;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: -1.2rem;
      margin-bottom: 6.4rem;
   }
   .header-title {
      color: #fff;
      font-size: 4.4rem;
      font-weight: 400;
      margin-left: 4.8rem;
   }
   .groups-specs {
      width: 100%;
      display: flex;
      align-items: center;
      color: #fff;
      margin: 3.2rem 0;
   }
   .group-specs {
      display: flex;
      align-items: center;
   }
   .specs-icon {
      padding: 1.2rem;
      margin: 0 0.8rem 0 1.2rem;
      border-radius: 100%;
      border: 1px solid #0a66ca;
   }
   .specs {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 0.4rem;
   }
   .specs-title {
      font-size: 1.2rem;
      text-transform: uppercase;
      color: #ffffff7c;
   }
   .price-title {
      float: right;
      color: #fff;
      font-size: 3.6rem;
      font-weight: 400;
   }

   @media (max-width: 875px) {
      .header {
         display: grid;
         grid-template-columns: 1fr;
      }
      .right-side {
         width: 100%;
      }
      .price-title {
         margin-right: 2.4rem;
      }
   }

   @media (max-width: 625px) {
      .groups-specs {
         display: grid;
         grid-template-columns: 1fr 1fr;
         grid-template-rows: 1fr 1fr;
         row-gap: 1.6rem;
      }
   }

   .section {
      margin: 6.4rem 0;
      border: 1px solid #555;
   }
   .section:hover {
      box-shadow: rgba(0, 0, 0, 0.13) 0px 10px 22px,
         rgba(0, 0, 0, 0.1) 0px 8px 8px;
   }
   .box__head {
      width: 100%;
      height: 10rem;
      padding: 2.4rem;
      background-color: rgba(25, 62, 151, 1);
      color: #fff;
      font-size: 3.2rem;
      font-weight: 400;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #555;
   }
   .description__title {
      padding: 1.6rem;
      padding-top: 2.4rem;
      font-size: 1.6rem;
      line-height: 150%;
      text-align: justify;
      background-color: #fff;
   }
   .location__title {
      padding: 1.6rem;
      padding-top: 2.4rem;
      background-color: #fff;
   }
   .title {
      font-size: 1.6rem;
      font-weight: 400;
      margin: 1.2rem 0;
   }

   /* CONTACT AGENT */
   .conctact__card {
      width: 26rem;
      height: 18rem;
      border: 1px solid #000;
      padding: 1.2rem;
      background-color: #fff;
      margin: 4.8rem 1.2rem;
   }
   .card__header {
      font-size: 2.4rem;
      font-weight: 400;
      margin: 1.2rem 0 2rem 0;
      color: #000;
   }
   .card__content {
      width: 100%;
      height: 70%;
      display: flex;
      justify-content: space-between;
   }
   .card__img {
      width: 100%;
      height: 100%;
      padding: 0 0.8rem 0.8rem 0;
   }
   .contetn-heading {
      font-size: 1.4rem;
      font-weight: 400;
      margin-bottom: 0.8rem;
   }
   .content-city {
      font-size: 1.4rem;
      font-weight: 400;
      margin-bottom: 0.8rem;
   }
   .content-number {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 0.8rem;
   }
   .content-link {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 0.8rem;
      color: #0a66ca;
      text-transform: uppercase;
      cursor: pointer;
   }
   .content-link:hover {
      color: #001933;
   }

   .aside {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 6.4rem;
      max-width: 40rem;
   }

   @media (max-width: 1000px) {
      .two-col {
         display: block;
      }
      .conctact__card {
         position: relative;
         margin: 0 auto;
      }
      .conctact__card {
         width: 100%;
         height: 25rem;
         padding: 1.6rem;
         margin: 0 0.4rem;
      }
      .card__header {
         font-size: 2.8rem;
         margin: 1.2rem 0 2.4rem 0;
      }
      .contetn-heading {
         font-size: 2.2rem;
         margin-bottom: 1.2rem;
      }
      .content-city {
         font-size: 1.8rem;
         margin-bottom: 1.2rem;
      }
      .content-number {
         font-size: 1.8rem;
         margin-bottom: 1.2rem;
      }
      .content-link {
         font-size: 1.8rem;
         margin-bottom: 1.2rem;
      }
      .wrapper {
         max-width: 98%;
      }
      .aside {
         margin: 0 auto 6.4rem auto;
      }
   }
   /* TRANSITION */
   .fade-enter-active,
   .fade-leave-active {
      transition: all 0.5s ease-in-out;
   }

   .fade-enter-from,
   .fade-leave-to {
      opacity: 0;
   }
</style>
