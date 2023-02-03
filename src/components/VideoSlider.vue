<template>
    <swiper
      :modules="modules"
      :slidesPerView="4"
      :spaceBetween="20"
      :autoplay="true"
      :speed="2000"
      navigation
      :breakpoints="{
      '0': {
        slidesPerView: 1,
      },  
      '576': {
        slidesPerView: 2,
      },
      '992': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 4,
        },
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="video-swiper"
    >
      <swiper-slide>
        <CardThree />
      </swiper-slide>
      <swiper-slide>
        <CardThree />  
      </swiper-slide>
      <swiper-slide>
        <CardThree />
      </swiper-slide>
      <swiper-slide>
        <CardThree />
      </swiper-slide>
      <swiper-slide>
        <CardThree />
      </swiper-slide>
    </swiper>

  </template>
  <script>

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // import Swiper core and required modules
    import { Navigation, Autoplay } from 'swiper';
    

  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import CardThree from "@/components/CardThree.vue";
    
  
    export default {
      name: 'VideoSlider',
      components: {
        Swiper,
        SwiperSlide,
        Navigation,
        Autoplay,
        CardThree
      },
      setup() {
        const onSwiper = (swiper) => {
          // console.log(swiper);
        };
        const onSlideChange = () => {
          // console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [Navigation, Autoplay]
        };
      },
    };
  </script>
  