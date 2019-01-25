<template>
  <div id="banner1">
    <div class="swiper-container"  id="swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img style="width:100%;" src="../assets/images/banner1.png" alt=""></div>
        <div class="swiper-slide"><img style="width:100%;" src="../assets/images/banner2.png" alt=""></div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'

export default {
  name: 'Banner',
  components: {
    
  },
  data(){
    return {
      name:'这里是banner'
    }
  },
  methods:{
    
  },
  mounted(){
     var swiper1 = new Swiper('#swiper1', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
</script>
<style scoped>
@import url('../../node_modules/swiper/dist/css/swiper.min.css');
#banner1{
    margin-top:50px;
    z-index: -999;
}
</style>
