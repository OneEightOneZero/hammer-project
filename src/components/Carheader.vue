<template>
    <!---->
      <div class="title-bar">
        <!---->
        <a class="nav-toggle" title="菜单" @click="getNews"><img src="../assets/header1.png"></a>
        <!---->
        <!---->
        <!---->
        <!-- <h1> -->
          <a class="nav-logo" href="/">Car</a>
        <!-- </h1> -->
        <!---->
        <!---->
        <!---->
        <!---->
      </div>
</template>
<script>
// import { mapActions, mapState } from "vuex";
// import store from "../configs/store.js";
export default {
  methods: {
    getNews() {
        this.$store.commit("editLoding",true)
      },
    toContacts() {
      // this.$router.push('/app/contact')
      // 根据命名路由来进行跳转
      this.$router.push({ name: "search" });
    }
  }
};
</script>
<style scoped>
.title-bar {
    background: #1d1d1d;
    background-image: linear-gradient(#1d1d1d,#181818);
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 600;
}
img{
  width: 20px;
  height: 20px;
}
a{
  display: block;
  width: 40px;
  height: 40px;

}
.nav-toggle{
  position:absolute;
  left:10px;
  top:15px;
  float: left;
}
.nav-logo{
  position:absolute;
  left:47%;
  top:10px;
  float: left;
  color: #fff;
  font-size:20px;
}
.nav-search{
  position:absolute;
  right:0px;
  top:10px;
  float: right;
  color:#fff;
  font-size: 15px;
  line-height: 15px;
}
</style>


