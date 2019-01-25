<template>
  <nav _ngcontent-c1 class="nav-drawer active" v-show="loadingStatus" @click="getfalse">
    <ul _ngcontent-c1 class="nav-aside">
      <!---->
      <li _ngcontent-c1 class="nav-shop">
        <a _ngcontent-c1>
          <span _ngcontent-c1>锤子科技商城</span>
        </a>
      </li>
      <li _ngcontent-c1 class="nav-jianguopro2s">
        <a _ngcontent-c1>
          <span _ngcontent-c1>坚果 Pro 2S</span>
        </a>
      </li>
      <li _ngcontent-c1 class="nav-r1">
        <a _ngcontent-c1>
          <span _ngcontent-c1>坚果 R1</span>
        </a>
      </li>
      <li _ngcontent-c1 class="nav-tnt">
        <a _ngcontent-c1>
          <span _ngcontent-c1>坚果 TNT 工作站</span>
        </a>
      </li>
      <li _ngcontent-c1 class="nav-u3">
        <a _ngcontent-c1>
          <span _ngcontent-c1>坚果 3</span>
        </a>
      </li>
      <li _ngcontent-c1 class="nav-jianguopro2">
        <a _ngcontent-c1>
          <span _ngcontent-c1>坚果 Pro 2</span>
        </a>
      </li>
      <li _ngcontent-c1 class="nav-aviator">
        <a _ngcontent-c1>
          <span _ngcontent-c1>8号商务旅行箱</span>
        </a>
      </li>
      <li _ngcontent-c1 class="nav-traveller">
        <a _ngcontent-c1>
          <span _ngcontent-c1>8号旅行箱</span>
        </a>
      </li>
      <li _ngcontent-c1 class="nav-os">
        <a _ngcontent-c1>
          <span _ngcontent-c1>Smartisan OS</span>
        </a>
      </li>
      <li _ngcontent-c1 class="nav-apps">
        <a _ngcontent-c1>
          <span _ngcontent-c1>应用</span>
        </a>
      </li>
      <li _ngcontent-c1 class="nav-bbs">
        <a _ngcontent-c1>
          <span _ngcontent-c1>论坛</span>
        </a>
      </li>
      <li _ngcontent-c1 class="nav-support">
        <a _ngcontent-c1>
          <span _ngcontent-c1>服务支持</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    //   getters方法
    // loadingStatus(){
    //     return this.$store.getters.getLoding
    // },
    // mapState方法
    ...mapState({
      loadingStatus: state => state.loadingStatus
    })
  },
  methods: {
    getfalse() {
        this.$store.commit("editLoding",false)
      },
  }
};
</script>
<style scoped>
.nav-drawer.active[_ngcontent-c1] {
    padding-top:50px;
    width:100%;
    height:100%;
    background-color: rgb(37, 36, 36);
    opacity: 1;
    top: 50px;
    -webkit-transform: translate(0);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    transition: opacity 0s linear,-webkit-transform .25s cubic-bezier(.4,.01,.165,.99);
    transition: transform .25s cubic-bezier(.4,.01,.165,.99),opacity 0s linear;
    transition: transform .25s cubic-bezier(.4,.01,.165,.99),opacity 0s linear,-webkit-transform .25s cubic-bezier(.4,.01,.165,.99);
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
    z-index: 600;
    opacity: 0;
    -webkit-transform: translateY(-100%);
    -webkit-transform: translate3d(0,-100%,0);
    transform: translate3d(0,-100%,0);
    transition: opacity 0s linear .25s,top 0s linear .25s,-webkit-transform .25s cubic-bezier(.4,.01,.165,.99);
    transition: transform .25s cubic-bezier(.4,.01,.165,.99),opacity 0s linear .25s,top 0s linear .25s;
    transition: transform .25s cubic-bezier(.4,.01,.165,.99),opacity 0s linear .25s,top 0s linear .25s,-webkit-transform .25s cubic-bezier(.4,.01,.165,.99);
}
.nav-drawer[_ngcontent-c1] .nav-aside[_ngcontent-c1] {
    background-image: -webkit-repeating-linear-gradient(90deg,#141414,#141414 1px,transparent 0,transparent 25%),-webkit-repeating-linear-gradient(180deg,#141414,#141414 1px,transparent 0,transparent 3.6rem);
    background-image: repeating-linear-gradient(90deg,#141414,#141414 1px,transparent 0,transparent 25%),repeating-linear-gradient(180deg,#141414,#141414 1px,transparent 0,transparent 3.6rem);
    background-position: -1px -1px;
    position: relative;
}
.nav-drawer[_ngcontent-c1] .nav-aside[_ngcontent-c1] li[_ngcontent-c1] {
    background: url(//static.smartisanos.cn/mobile/assets/images/nav-icons.fb599ac….png) no-repeat;
    background-size: auto 60.85rem;
    background-origin: content-box;
    box-sizing: border-box;
    float: left;
    font-size: 12px;
    height: 3.6rem;
    width: 25%;
    padding: 0 1px 1px 0;
    text-align: center;
    position: relative;
}
.nav-drawer[_ngcontent-c1] .nav-aside[_ngcontent-c1] li[_ngcontent-c1] a[_ngcontent-c1] {
    box-sizing: border-box;
    color: #ddd;
    display: block;
    height: 100%;
    line-height: 1;
    padding: 2.55rem 0 0;
}
</style>


