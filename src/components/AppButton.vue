<script setup>
   defineProps({
      label: {
         type: String,
         required: true,
      },
      white: Boolean,
      transparent: Boolean,
      logout: Boolean,
      view: Boolean,
      whiteSquare: Boolean,
      transparentSquare: Boolean,
      blue: Boolean,
      pagination: Boolean,
      icon: {
         type: String,
         default: null,
      },
   });
</script>

<template>
   <button
      class="btn"
      :class="{
         'btn--white': white,
         'btn--transparent': transparent,
         'btn--logout': logout,
         'btn--view': view,
         'btn--whiteSquare': whiteSquare,
         'btn--transparentSquare': transparentSquare,
         'btn--blue': blue,
         'btn--pagination': pagination,
      }"
   >
      <font-awesome-icon v-if="icon" class="btn__icon" :icon="icon" size="lg" />
      {{ label }}
   </button>
</template>

<style scoped>
   .btn {
      width: 16rem;
      height: 4rem;
      border-radius: 2rem;
      border: none;
      font-size: 1.8rem;
      text-transform: uppercase;
      margin: 1.6rem;
      cursor: pointer;
   }
   .btn:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
         rgba(0, 0, 0, 0.22) 0px 10px 10px;
      transform: translate(-1px, -1px);
   }
   .btn--white {
      background-color: #fff;
      color: #000;
   }
   .btn--white:hover {
      background-color: #d7d7d7;
      border: none;
   }
   .btn--white:active {
      transform: translate(1px, 1px);
   }
   .btn--transparent {
      background-color: transparent;
      color: #fff;
      border: 0.1rem solid #fff;
      height: 4rem;
   }
   .btn--transparent:hover {
      background-color: #dddddd80;
      border: none;
   }
   .btn--transparent:active {
      transform: translate(1px, 1px);
   }
   .btn--logout {
      width: 9rem;
      height: 3.5rem;
      margin: 0 0.8rem;
      font-size: 1.4rem;
      font-weight: 600;
      background-color: #fff;
      color: #000;
      border-radius: 1.5rem;
   }
   .btn--logout:hover {
      background-color: #dddddd80;
      border: none;
   }
   .btn--logout:active {
      transform: translate(1px, 1px);
   }
   .btn--view {
      background-color: rgba(255, 255, 255, 0.5);
      color: #000;
      font-size: 1.6rem;
      width: 12rem;
      margin: 0;
      text-transform: none;
   }
   .btn--view:hover {
      background-color: #d7d7d7;
      border: none;
   }
   .btn--view:active {
      transform: translate(1px, 1px);
   }
   .btn__icon {
      margin-right: 1.2rem;
   }

   .btn--whiteSquare {
      background-color: #fff;
      color: #084480;
      border-radius: 0;
      margin: 0 1.6rem;
   }
   .btn--whiteSquare:hover {
      background-color: #d7d7d7;
      border: none;
   }
   .btn--whiteSquare:active {
      transform: translate(1px, 1px);
   }
   .btn--transparentSquare {
      background-color: transparent;
      color: #fff;
      border-radius: 0;
      border: 0.1rem solid #fff;
      margin: 0 1.6rem;
   }
   .btn--transparentSquare:hover {
      background-color: #dddddd80;
      border: none;
   }
   .btn--transparentSquare:active {
      transform: translate(1px, 1px);
   }

   .btn--blue {
      color: #fff;
      background-color: rgba(25, 62, 151, 1);
      border-radius: 0;
      margin: 2.4rem 1.6rem;
   }
   .btn--blue:hover {
      background-color: #969696;
      border: none;
   }
   .btn--blue:active {
      transform: translate(1px, 1px);
   }
   .btn--pagination {
      width: 5rem;
      height: 5rem;
      border: 1px solid rgba(0, 0, 0, 0.5);
      background-color: #fff;
      border-radius: 1rem;
      color: #084480;
      font-size: 2rem;
      margin: 0 1.6rem;
      padding: 0.8rem;
      text-align: center;
   }
   .btn--pagination:hover {
      background-color: #d7d7d7;
   }
   .btn--pagination:active {
      transform: translate(1px, 1px);
   }
   .btn--pagination:disabled {
      opacity: 0.5;
      cursor: not-allowed;
   }
</style>
