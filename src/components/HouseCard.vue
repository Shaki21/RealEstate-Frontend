<script setup>
   import { separateNumbers } from '@/utils/filter';

   defineProps({
      house: Object,
   });
</script>

<template>
   <Transition name="fade">
      <div class="card-wrapper">
         <div class="top">
            <div class="card-image">
               <img
                  class="card__image--main"
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Home"
               />
               <div class="image-row">
                  <img
                     class="card__image--row"
                     src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                     alt="Home"
                  />
                  <img
                     class="card__image--row"
                     src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                     alt="Home"
                  />
                  <img
                     class="card__image--row"
                     src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZXJuJTIwJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                     alt="Home"
                  />
               </div>
            </div>
            <div class="card__heading">
               <h3 class="heading-title">{{ house.title }}</h3>
               <p class="heading-price">
                  {{ separateNumbers(house.price) + ' $' }}
               </p>
            </div>
         </div>
         <div class="icon-groups">
            <div class="icon-group">
               <font-awesome-icon
                  class="icon-circle"
                  icon="fa-solid fa-bed"
                  size="xl"
                  style="color: #1c3b8b"
               />
               <span
                  ><p class="icon-specification">
                     {{ house.bedroom }} bedroom
                  </p></span
               >
            </div>
            <div class="icon-group">
               <font-awesome-icon
                  class="icon-circle"
                  icon="fa-solid fa-bath"
                  size="xl"
                  style="color: #1c3b8b"
               />
               <span
                  ><p class="icon-specification">
                     {{ house.bathroom }} bathroom
                  </p></span
               >
            </div>
            <div class="icon-group">
               <font-awesome-icon
                  class="icon-circle"
                  icon="fa-solid fa-house"
                  size="xl"
                  style="color: #1c3b8b"
               />
               <span
                  ><p class="icon-specification">
                     {{ house.quadrature }} &#13217;
                  </p></span
               >
            </div>
         </div>
      </div>
   </Transition>
</template>

<style scoped>
   .card-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 37rem;
      min-height: 44rem;
      padding: 1.6rem;
      border-radius: 2rem;
      border: 1px solid rgba(0, 0, 0, 0.5);
      background-color: #fff;
      transition: all 0.2s ease-in;
   }
   .card-wrapper:hover {
      background: linear-gradient(
         0deg,
         rgba(238, 244, 254, 1) 0%,
         rgba(244, 248, 255, 1) 100%
      );
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
         rgba(0, 0, 0, 0.22) 0px 10px 10px;
      transform: scale(1.02);
   }
   .card-image {
      width: 100%;
      border-radius: 2rem;
      border: 1px solid rgba(0, 0, 0, 0.5);
      overflow: hidden;
   }
   .card__image--main {
      width: 100%;
      margin-bottom: 0.2rem;
      background-size: cover;
      background-position: top;
   }
   .image-row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 0.4rem;
   }
   .card__image--row {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      object-fit: cover;
   }
   .card__heading {
      margin-bottom: 1.2rem;
      padding: 1.2rem 0.8rem;
   }
   .heading-title {
      color: rgba(0, 0, 0, 0.7);
      font-size: 2rem;
      font-weight: 700;
      line-height: 140%;
      margin-bottom: 1.4rem;
   }
   .heading-price {
      color: rgba(28, 59, 139, 1);
      font-size: 1.6rem;
      font-weight: 700;
   }
   .icon-groups {
      display: flex;
      justify-content: space-between;
      padding-top: 1.6rem;
      border-top: 1px solid rgba(0, 0, 0, 0.5);
   }
   .icon-group {
      display: flex;
      align-items: center;
   }
   .icon-circle {
      clip-path: circle(50%);
      background-color: rgba(10, 102, 194, 0.2);
      padding: 0.4rem;
   }
   .icon-specification {
      font-size: 1.4rem;
   }
</style>
