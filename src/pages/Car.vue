<template>
    <div>
        <Carheader/>
        <Carmain/>
        <Xfooter/>
    </div>
</template>
<script>
// 引用组件
import Xfooter from '../components/Xfooter.vue'
import Carmain from '../components/Carmain.vue'
import Carheader from '../components/Carheader.vue'

export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Xfooter,
    Carmain,
    Carheader
  }
}
</script>