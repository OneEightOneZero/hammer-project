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
      this.$axios({
        method: "post",
        headers: {
          token: localStorage.getItem("token")
        },
        url: "http://39.96.28.141:3000/users/autoLogin"
      }).then(res => {
        console.log(res.status);
        let fn = {
          true: () => {
            //   localStorage.setItem("token",res.data.token);
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
  beforeCreate() {
    this.autoLogin();
  }
};
</script>
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
    login() {
      this.$axios({
        method: "post",
        headers: {
          token: localStorage.getItem("token")
        },
        url: "http://39.96.28.141:3000/users/autoLogin"
      }).then(res => {
        console.log(res.status);
        let fn = {
          true: () => {
            //   localStorage.setItem("token",res.data.token);
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
  destroyed() {}
};
</script>
