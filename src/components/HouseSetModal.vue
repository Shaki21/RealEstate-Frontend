<script setup>
   import citiesService from '@/services/citiesService.js';
   import housesService from '@/services/housesService.js';
   import AppButton from '@/components/AppButton.vue';
   import { ref } from 'vue';
   import Swal from 'sweetalert2';

   const showSuccessAlert = () => {
      Swal.fire({
         icon: 'success',
         title: 'Successful Edited',
         text: 'You have successfully edited house!',
         showConfirmButton: false,
         timer: 3000,
         didOpen: () => {
            Swal.getPopup().style.fontSize = '1.8rem';
         },
      });
   };

   const props = defineProps({
      isSetModalOpen: Boolean,
      selectedHouse: {
         type: Object,
         default: null,
      },
   });
   const emit = defineEmits(['add', 'edit', 'close']);

   const label = ref(null);

   // House form state

   const getInitialFormState = (house = null) => ({
      title: house?.title ?? '',
      price: house?.price ?? null,
      bedroom: house?.bedroom ?? null,
      bathroom: house?.bathroom ?? null,
      quadrature: house?.quadrature ?? null,
      floors: house?.floors ?? null,
      garden_quadrature: house?.garden_quadrature ?? null,
      address: house?.address ?? '',
      property_type: house?.property_type ?? '',
      property_status: house?.property_status ?? '',
      description: house?.description ?? '',
      cityName: house?.cityName ?? '',
      countryName: house?.countryName ?? '',
   });

   const house = ref(getInitialFormState());

   const setHouse = async () => {
      try {
         const { data: editedHouse } = await housesService.updateHouse(
            props.selectedHouse.id,
            {
               ...house.value,
            }
         );
         emit('edit', editedHouse.house);
         showSuccessAlert();
      } catch (error) {
         console.log(error);
      }
   };

   // Close dialog
   const close = () => {
      emit('close');
   };

   // Init
   const init = () => {
      if (props.selectedHouse) {
         house.value = getInitialFormState(props.selectedHouse);
         label.value = 'Edit';
      }
   };

   init();
</script>

<template>
   <div class="background">
      <div class="wrapper">
         <div class="modal__heading">
            <h1 class="modal__title">{{ label }} house</h1>
         </div>
         <form class="modal__wrapper">
            <div class="modal__left-side">
               <div class="modal__groups">
                  <div class="modal__group">
                     <label class="modal__label">Title</label>
                     <input class="modal__input" v-model="house.title" />
                  </div>
                  <div class="modal__group">
                     <label class="modal__label">Price</label>
                     <input
                        class="modal__input"
                        type="number"
                        v-model="house.price"
                     />
                  </div>
                  <div class="modal__group modal__group--double">
                     <div class="modal__group">
                        <label class="modal__label">Bedrooms</label>
                        <input
                           class="modal__input"
                           type="number"
                           v-model="house.bedroom"
                        />
                     </div>
                     <div class="modal__group">
                        <label class="modal__label">Bathrooms</label>
                        <input
                           class="modal__input"
                           type="number"
                           v-model="house.bathroom"
                        />
                     </div>
                  </div>
                  <div class="modal__group modal__group--double">
                     <div class="modal__group">
                        <label class="modal__label">Quadrature</label>
                        <input
                           class="modal__input"
                           type="number"
                           v-model="house.quadrature"
                        />
                     </div>
                     <div class="modal__group">
                        <label class="modal__label">Garden quadrature</label>
                        <input
                           class="modal__input"
                           type="number"
                           v-model="house.garden_quadrature"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal__right-side">
               <div class="modal__groups">
                  <div class="modal__group">
                     <label class="modal__label">Floors</label>
                     <input
                        class="modal__input"
                        type="number"
                        v-model="house.floors"
                     />
                  </div>
                  <div class="modal__group">
                     <label class="modal__label">Address</label>
                     <input class="modal__input" v-model="house.address" />
                  </div>

                  <div class="modal__group">
                     <label class="modal__label">Property type</label>
                     <input
                        class="modal__input"
                        v-model="house.property_type"
                     />
                  </div>
                  <div class="modal__group">
                     <label class="modal__label">Property status</label>
                     <input
                        class="modal__input"
                        v-model="house.property_status"
                     />
                  </div>
               </div>
            </div>
         </form>
         <div class="modal__action">
            <AppButton label="Close" whiteSquare @click="close" />
            <AppButton label="Save" transparentSquare @click="setHouse" />
         </div>
      </div>
   </div>
</template>

<style scoped>
   .background {
      width: 100%;
      height: 100vh;
      background-color: #00000050;
      filter: drop-shadow(2px 2px 10px gray);
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(0.8rem);
      z-index: 999;
   }
   .wrapper {
      width: 80%;
      max-width: 124rem;
      height: 58rem;
      background-color: rgba(25, 62, 151, 1);
      border: 0.1rem solid #000;
      padding: 2.4rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }

   .modal__heading {
      margin-bottom: 3.2rem;
      padding-left: 2.4rem;
   }
   .modal__title {
      font-size: 2.4rem;
      font-weight: 500;
      color: #fff;
   }
   .modal__wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 40rem;
      column-gap: 4.8rem;
      margin-bottom: 1.6rem;
   }
   .modal__label {
      display: block;
      font-size: 2rem;
      margin-bottom: 0.8rem;
      padding-left: 1.2rem;
      color: #fff;
   }
   .modal__input {
      font-size: 1.6rem;
      font-weight: 400;
      padding-left: 0.8rem;
      width: 100%;
      height: 4.5rem;
      background-color: #ffffff41;
      color: #fff;
      border: none;
   }
   .modal__group {
      margin-bottom: 2.4rem;
   }
   .modal__group--double {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1.6rem;
      margin: 0;
   }
   .modal__action {
      display: flex;
      justify-content: flex-end;
      position: absolute;
      bottom: 2.4rem;
      right: 2.4rem;
   }

   /** ANIMATION */
   .modal-enter-active,
   .modal-leave-active {
      transition: opacity 0.3s ease-in-out;
   }
   .modal-enter-from,
   .modal-leave-to {
      opacity: 0;
   }

   /** MEDIA  */
   @media (max-width: 970px) {
      .modal__wrapper {
         grid-template-columns: 1fr;
         height: 40rem;
         overflow-y: scroll;
      }
      .modal__groups {
         padding-right: 1.2rem;
      }
      .modal__action {
         justify-content: center;
         position: relative;
         left: 0;
         bottom: 0;
      }
      ::-webkit-scrollbar {
         width: 1.2rem;
      }
      ::-webkit-scrollbar-track {
         background: #f1f1f1;
         border-radius: 1rem;
      }
      ::-webkit-scrollbar-thumb {
         background: #9b9b9b;
         border-radius: 1rem;
      }
      ::-webkit-scrollbar-thumb:hover {
         background: #424242;
      }
   }
</style>
