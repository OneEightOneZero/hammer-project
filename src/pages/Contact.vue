<template>
    <div>
        <Xheader name="联系人" skill="js" />
    </div>
</template>
<script>
// 引用组件
import Xheader from '../components/Xheader.vue'

export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Xheader,
  }
}
</script>