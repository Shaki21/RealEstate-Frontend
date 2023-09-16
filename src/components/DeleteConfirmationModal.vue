<script setup>
   import AppButton from '@/components/AppButton.vue';

   const emit = defineEmits(['close', 'confirm']);

   const close = () => {
      emit('close');
   };
   const confirm = () => {
      emit('confirm');
   };
</script>

<template>
   <div class="background">
      <div class="wrapper">
         <div class="modal">
            <h3 class="modal__title">
               Are you sure you want to delete the house?
            </h3>
            <div class="modal__action">
               <AppButton label="Close" whiteSquare @click="close" />
               <AppButton label="Delete" transparentSquare @click="confirm" />
            </div>
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
      max-width: 60rem;
      height: 20rem;
      font-weight: 500;
      font-size: 2rem;
      line-height: 4rem;
      background-color: #193e97;
      border: 0.1rem solid #000;
      padding: 2.4rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }
   .modal__title {
      font-size: 2.4rem;
      font-weight: 500;
      color: #fff;
   }
   .modal__action {
      display: flex;
      justify-content: flex-end;
      position: absolute;
      bottom: 2.4rem;
      right: 2.4rem;
   }
</style>
