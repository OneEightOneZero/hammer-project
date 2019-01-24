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
    autoLogin() {
      console.log(localStorage.getItem("token"));
      this.$axios({
        method: "post",
        url: "http://39.96.28.141:3000/users/autoLogin",
        data: this.$qs.stringify({
          isToken:localStorage.getItem("token")
        })
      }).then(res => {
        console.log(res.data.status);
        let fn = {
          true: () => {
            console.log(666);
          },
          false: () => {
            this.$router.push({ name: "login" });
          }
        };
        fn[res.data.status]();
      });
    }
  },
  created() {
    this.autoLogin();
  }
};
</script>