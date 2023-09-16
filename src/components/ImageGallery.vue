<script setup>
   import { ref } from 'vue';

   const images = ref([
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=100',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=100',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=100',
      'https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200',
   ]);
   const fourthImage = images.value[3];
   const currentIndex = ref(0);
   const isModalOpen = ref(false);

   const totalImages = ref(images.value.length);
   const currentNumber = ref(currentIndex.value + 1);

   const currentImage = ref(images.value[currentIndex.value]);
   const visibleThumbnails = ref(images.value.slice(1, 4));
   const remainingImages = ref(
      images.value.length - visibleThumbnails.value.length
   );

   function openModal(index) {
      currentIndex.value = index;
      currentImage.value = images.value[currentIndex.value];
      currentNumber.value = currentIndex.value + 1;
      isModalOpen.value = true;
      window.addEventListener('keydown', handleKeyDown);
   }

   function closeModal() {
      isModalOpen.value = false;
      window.removeEventListener('keydown', handleKeyDown);
   }

   function nextImage() {
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
      currentImage.value = images.value[currentIndex.value];
      currentNumber.value = currentIndex.value + 1;
   }

   function previousImage() {
      currentIndex.value =
         (currentIndex.value - 1 + images.value.length) % images.value.length;
      currentImage.value = images.value[currentIndex.value];
      currentNumber.value = currentIndex.value + 1;
   }

   function handleKeyDown(event) {
      if (event.key === 'ArrowRight') {
         nextImage();
      } else if (event.key === 'ArrowLeft') {
         previousImage();
      } else if (event.key === 'Escape') {
         closeModal();
      }
   }
   async function downloadImage() {
      try {
         const response = await fetch(currentImage.value);
         const blob = await response.blob();
         const link = document.createElement('a');
         link.href = URL.createObjectURL(blob);
         link.download = 'image.jpg';
         link.click();
         URL.revokeObjectURL(link.href);
      } catch (error) {
         console.error('Error downloading image:', error);
      }
   }
   function openFullScreen() {
      const element = document.querySelector('.gallery img');

      if (element.requestFullscreen) {
         element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
         element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
         element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
         element.msRequestFullscreen();
      }
   }
</script>
<template>
   <div class="wrapper">
      <div class="gallery">
         <img
            class="gallery-img"
            :src="currentImage"
            @click="openModal(currentIndex)"
         />
      </div>
      <div class="thumbnails">
         <div
            class="thumbnails-img"
            v-for="(thumbnail, index) in visibleThumbnails"
            :key="index"
         >
            <img
               v-if="index < visibleThumbnails.length - 1"
               :src="thumbnail"
               @click="openModal(index + 1)"
            />

            <div v-else class="overlay" @click="openModal(index + 1)">
               <img :src="fourthImage" style="overflow: hidden" />
               <div class="remaining">+{{ remainingImages }}</div>
            </div>
         </div>
      </div>

      <Transition name="fade">
         <div v-if="isModalOpen" class="modal">
            <span class="close" @click="closeModal">&times;</span>
            <div class="modal-top__btn">
               <font-awesome-icon
                  icon="fa-solid fa-circle-down"
                  size="2xl"
                  style="color: #ffffff"
                  @click="downloadImage"
               />
               <font-awesome-icon
                  icon="fa-solid fa-up-right-and-down-left-from-center"
                  size="2xl"
                  style="color: #ffffff"
                  @click="openFullScreen"
               />
            </div>
            <img :src="currentImage" class="modal-content" @click="nextImage" />
            <div class="arrows">
               <div class="modal-arrow modal-arrow-left" @click="previousImage">
                  &#10094;
               </div>
               <div class="modal-arrow modal-arrow-right" @click="nextImage">
                  &#10095;
               </div>
            </div>
            <div class="image-count">
               {{ currentNumber }} of {{ totalImages }}
            </div>
         </div>
      </Transition>
   </div>
</template>

<style scoped>
   .wrapper {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 2fr 1fr;
      row-gap: 1.2rem;
      max-width: 140rem;
      width: 100%;
      max-height: 90rem;
   }
   .gallery {
      width: 100%;
      height: 100%;
      overflow: hidden;
   }
   .gallery-img {
      width: 100%;
      overflow: hidden;
      object-fit: cover;
   }

   .gallery-img:fullscreen {
      object-fit: contain;
   }

   .thumbnails {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 0.8rem;
      justify-content: center;
      width: 100%;
      overflow: hidden;
   }
   .thumbnails-img {
      position: relative;
      overflow: hidden;
   }
   .thumbnails img {
      height: 100%;
      width: 100%;
      cursor: pointer;
      object-fit: cover;
   }
   .overlay {
      position: relative;
      width: 100%;
      height: 100%;
      cursor: pointer;
      margin-left: 0.8rem;
   }
   .remaining {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 4.8rem;
      background-color: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(0.8rem);
   }

   .modal {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(0.8rem);
   }

   .modal-content {
      max-width: 90%;
      max-height: 90%;
      cursor: pointer;
   }
   .modal-arrow {
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 4.8rem;
      color: #fff;
      cursor: pointer;
      user-select: none;
      z-index: 10;
   }

   .modal-arrow-left {
      left: 1.2rem;
   }

   .modal-arrow-right {
      right: 1.2rem;
   }
   .modal-arrow-left:hover,
   .modal-arrow-right:hover {
      transform: scale(1.3);
      color: #aaa;
   }

   .close {
      color: #fff;
      position: absolute;
      top: 1.5rem;
      right: 3.5rem;
      font-size: 4.8rem;
      font-weight: bold;
      cursor: pointer;
   }
   .close:hover {
      transform: scale(1.3);
      color: #aaa;
   }
   .modal-top__btn {
      position: absolute;
      top: 2.7rem;
      right: 9rem;
   }
   .modal-top__btn svg {
      margin-right: 2.4rem;
   }
   .modal-top__btn svg:hover {
      transform: scale(1.3);
      color: #aaa;
   }
   .image-count {
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: #fff;
      font-weight: 600;
      padding: 0.8rem;
   }

   @media (max-width: 650px) {
      .wrapper {
         max-width: 65rem;
         height: 60rem;
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
