<template>
  <transition name="bounce">
    <!-- :style="{
      'display':galleryStatus?'block':'none' 
    }"-->
    <div v-show="galleryStatus" class="weui-gallery">
      <span
        class="weui-gallery__img"
        :style="{
        'backgroundImage': `url(${galleryImgUrl})`
    }"
      ></span>
      <div @click="hideGallery" class="weui-gallery__opr">
        <a href="javascript:" class="weui-gallery__del">
          <i class="weui-icon-delete weui-icon_gallery-delete"></i>
        </a>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  computed: {
    galleryImgUrl() {
      return this.$store.getters.getGallery.galleryImgUrl;
    },
    galleryStatus() {
      return this.$store.getters.getGallery.galleryStatus;
    }
  },
  methods: {
    // 显示预览图
    hideGallery() {
      this.$store.dispatch("setGallery", {
        // 图片
        galleryImgUrl: "",
        // 状态值
        galleryStatus: false
      });
    }
  }
};
</script>
<style scoped>
.weui-gallery {
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000000;
  z-index: 1000;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>


