<template>
    <div>
        <Mheader/>
        <Muser />
        <!-- <Xpanel /> -->
        <!-- <Xgallery /> -->
        <!-- <Xloading /> -->
<<<<<<< HEAD
        <!-- <Xxiala /> -->
=======
>>>>>>> 45119e6978ea92beaedf2ac497711d0a86582684
    </div>
</template>
<script>
// 引用组件
import Mheader from '../components/Mheader.vue'
import Muser from '../components/Muser.vue'

export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Mheader,
    Muser,
  },
  destroyed() {
  }
}
</script>
