<script setup>
   import AppButton from '@/components/AppButton.vue';
   import { ref } from 'vue';
   import Swal from 'sweetalert2';

   const emit = defineEmits(['close']);

   const showSuccessAlert = () => {
      Swal.fire({
         icon: 'success',
         title: 'Request sent successfully',
         text: 'The agent will contact you soon',
         showCloseButton: true,
         didOpen: () => {
            Swal.getPopup().style.fontSize = '1.8rem';
         },
      });
   };

   const contact = ref({
      name: '',
      email: '',
      telephone: null,
      enquiry: '',
   });

   const props = defineProps({
      isModalOpen: Boolean,
   });

   const sendForm = () => {
      showSuccessAlert();
      emit('close');
   };

   // Close dialog
   const close = () => {
      emit('close');
   };
</script>

<template>
   <div class="background">
      <div class="wrapper">
         <div class="modal__heading">
            <h1 class="modal__title">Contact Ante Bruno Šakić</h1>
            <p class="modal__subtitle">
               Please complete the form below and our agent will respond to your
               query shortly:
            </p>
            <br />
            <p class="modal__subtitle">All fields must be filled.</p>
         </div>
         <form class="modal__groups">
            <div class="modal__group">
               <label class="modal__label">Name</label>
               <input class="modal__input" v-model="contact.name" />
            </div>
            <div class="modal__group">
               <label class="modal__label">E-mail address</label>
               <input class="modal__input" v-model="contact.email" />
            </div>
            <div class="modal__group">
               <label class="modal__label">Telephone</label>
               <input
                  class="modal__input"
                  type="number"
                  v-model="contact.telephone"
               />
            </div>
            <div class="modal__group">
               <label class="modal__label">Enquiry</label>
               <textarea
                  class="modal__input modal__input--last"
                  v-model="contact.enquiry"
               ></textarea>
            </div>
         </form>
         <div class="modal__action">
            <AppButton label="Send" whiteSquare @click="sendForm" />
            <AppButton label="Cancel" transparentSquare @click="close" />
         </div>
      </div>
   </div>
</template>
<style scoped>
   .background {
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(0.8rem);
      z-index: 999;
   }
   .wrapper {
      width: 75%;
      max-width: 100rem;
      height: 73rem;
      background-color: #084480;
      border: none;
      padding: 4.8rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }

   .modal__heading {
      margin-bottom: 3.2rem;
      padding-left: 1.2rem;
   }
   .modal__title {
      font-size: 3rem;
      font-weight: 400;
      color: #fff;
      margin-bottom: 2.4rem;
      line-height: 150%;
   }
   .modal__subtitle {
      font-size: 1.8rem;
      font-weight: 400;
      color: #fff;
      overflow: hidden;
      line-height: 125%;
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
   .modal__input--last {
      padding: 0.8rem;
      font-size: 1.8rem;
      color: #fff;
      height: 9rem;
   }
   .modal__group {
      margin-bottom: 2.4rem;
   }
   .modal__action {
      display: flex;
   }

   @media (max-width: 650px) {
      .modal__subtitle {
         font-size: 1.6rem;
      }
      .modal__label {
         font-size: 1.6rem;
      }
      .modal__input {
         height: 3rem;
         font-size: 1.6rem;
      }
      .modal__input--last {
         height: 6rem;
      }
   }
</style>
