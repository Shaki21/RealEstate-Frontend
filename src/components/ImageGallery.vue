<script setup>
   import { ref } from 'vue';

   const images = ref([
      'https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_2_1681458848.jpg',
      'https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_9_1681458850.jpg',
      'https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_5_1681458849.jpg',
      'https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_4_1681458849.jpg',
      'https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_19_1681458852.jpg',
      'https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_17_1681458852.jpg',
      'https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_6_1681458849.jpg',
      'https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_8_1681458850.jpg',
      'https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_15_1681458851.jpg',
      'https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_11_1681458850.jpg',
      'https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_12_1681458850.jpg',
      'https://iznajmljivaci.laganini.com/img/object_photo/2703_1915/villa-antishova_18_1681458852.jpg'
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
