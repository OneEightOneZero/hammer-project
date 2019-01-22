<template>
    <div>
        <Xheader :name="name" skill="ps" />
        <!-- <Xsearch /> -->
        <!-- <Xpanel /> -->
        <!-- <Xgallery /> -->
        <!-- <Xloading /> -->
        <Xxiala />
    </div>
</template>
<script>
// 引用组件
import Xheader from '../components/Xheader.vue'
// import Xsearch from '../components/Xsearch.vue'
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
    Xheader,
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
