<template>
    <!---->
      <div class="title-bar">
        <!---->
        <a class="nav-toggle" title="菜单" @click="getNews"><img src="../assets/header1.png"></a>
        <!---->
        <!---->
        <!---->
        <!-- <h1> -->
          <a class="nav-logo" href="/"><img src="../assets/header2.png" style="width:35px;height:35px;"></a>
        <a class="nav-search" title="搜索" @click="toContacts"><img src="../assets/header3.png" class="imgs"></a>
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
        console.log(this.$store)
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
    z-index: 0;
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
}
.nav-search{
  position:absolute;
  right:0px;
  top:15px;
  float: right;
}
</style>


