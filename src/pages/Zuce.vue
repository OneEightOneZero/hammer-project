<template>
    <div>
        <Zheader/>
        <Zcontect />
        <!-- <Xpanel /> -->
        <!-- <Xgallery /> -->
        <!-- <Xloading /> -->
        <!-- <Xxiala /> -->
    </div>
</template>
<script>
// 引用组件
import Zheader from '../components/Zheader.vue'
import Zcontect from '../components/Zcontect.vue'

export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Zheader,
    Zcontect,
  },
  destroyed() {
  }
}
</script>
