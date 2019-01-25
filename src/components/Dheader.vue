<template>
  <header _ngcontent-c0 _nghost-c1 class>
    <!---->
    <div _ngcontent-c1 class="header-mobile">
      <div _ngcontent-c1 class="title-bar">
        <!---->
        <!---->
        <a _ngcontent-c1 class="nav-back" @click="toContact">返回</a>
        <!---->
        <!---->
        <!---->
        <h1 _ngcontent-c1 class="nav-title">坚果 R1</h1>
        <!---->
        <!---->
        <!---->
      </div>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    toContact() {
      // this.$router.push('/app/contact')
      // 根据命名路由来进行跳转
      this.$router.push({ name: "wechat" });
    }
  }
};
</script>
<style scoped>
.title-bar[_ngcontent-c1] {
    background: #1d1d1d;
    background-image: linear-gradient(#1d1d1d,#181818);
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 199;
}
.nav-drawer[_ngcontent-c1] {
    background: currentColor;
    color: #000;
    overflow: auto;
    position: fixed;
    top: -50rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 300;
    opacity: 0;
    -webkit-transform: translateY(-100%);
    -webkit-transform: translate3d(0,-100%,0);
    transform: translate3d(0,-100%,0);
    transition: opacity 0s linear .25s,top 0s linear .25s,-webkit-transform .25s cubic-bezier(.4,.01,.165,.99);
    transition: transform .25s cubic-bezier(.4,.01,.165,.99),opacity 0s linear .25s,top 0s linear .25s;
    transition: transform .25s cubic-bezier(.4,.01,.165,.99),opacity 0s linear .25s,top 0s linear .25s,-webkit-transform .25s cubic-bezier(.4,.01,.165,.99);
}
.title-bar[_ngcontent-c1] .nav-back[_ngcontent-c1] {
    padding: 10px 10px 0 20px;
    left: 6px;
}
.title-bar[_ngcontent-c1] .nav-back[_ngcontent-c1], .title-bar[_ngcontent-c1] .nav-edit[_ngcontent-c1], .title-bar[_ngcontent-c1] .nav-share[_ngcontent-c1] {
    background: #070707;
    background: linear-gradient(#131313,#070707);
    color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 12px;
    height: 32px;
    line-height: 1;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.title-bar[_ngcontent-c1] .nav-title[_ngcontent-c1] {
    color: #fff;
    font-size: 18px;
    line-height: 20px;
    padding: 16px 0 0;
    text-align: center;
    position: absolute;
    top: 0;
    left: 60px;
    right: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>

