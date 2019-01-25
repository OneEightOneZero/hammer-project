<template>
    <div>
        <Sheader :name="name" skill="ps" />
        <Sphone />
        <!-- <Xpanel /> -->
        <!-- <Xgallery /> -->
        <!-- <Xloading /> -->
        <Xxiala />
    </div>
</template>
<script>
// 引用组件
import Sheader from '../components/Sheader.vue'
import Sphone from '../components/Sphone.vue'
// import Xpanel from '../components/Xpanel.vue'
// import Xgallery from '../components/Xgallery.vue'
// import Xloading from '../components/Xloading.vue'
import Xxiala from '../components/Xxiala.vue'

export default {
  data(){
    return {
      name:"微信"
    }
  },
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Sheader,
    Sphone,
    // Xsearch,
    // Xpanel,
    // Xgallery,
    // Xloading,
    Xxiala
  },
  destroyed() {
  }
}
</script>
