<template>
  <div>
    <Xheader/>
    <Xbanner/>
    <Xnav/>
    <Xhot/>
    <Xtuijian/>
    <Xphone/>
    <Xxiala/>
  </div>
</template>
<script>
// 引用组件
import Xheader from "../components/Xheader.vue";
import Xbanner from "../components/Xbanner.vue";
import Xnav from "../components/Xnav.vue";
import Xhot from "../components/Xhot.vue";
import Xtuijian from "../components/Xtuijian.vue";
import Xphone from "../components/Xphone.vue";
import Xxiala from "../components/Xxiala.vue";

export default {
  data() {
    return {
      name: "微信"
    };
  },
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Xheader,
    Xbanner,
    Xnav,
    Xhot,
    Xtuijian,
    Xphone,
    Xxiala
  },
  methods: {
  },
  created() {
    // this.autoLogin();
  }
};
</script>