<template>
  <div>
    <Dheader/>
    <Ddetail/>
    <Dshop/>
    <Dfooter/>
  </div>
</template>
<script>
// 引用组件
import Dheader from "../components/Dheader.vue";
import Ddetail from "../components/Ddetail.vue";
import Dshop from "../components/Dshop.vue";
import Dfooter from "../components/Dfooter.vue";
// import Xbanner from '../components/Xbanner.vue'

export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Dheader,
    Ddetail,
    Dshop,
    Dfooter
    // Xbanner
  }
};
</script>

