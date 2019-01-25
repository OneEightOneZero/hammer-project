<template>
  <div _ngcontent-c53 class="fix-header-tabbox box-line">
    <ul _ngcontent-c53 class="box-border">
      <li @click="changeChannel(index)" v-for="(aa,index) in channels" :key="index" class="box-line line-vertical" :class="{
                        'active': index==cur
                    }" v-text="aa">
      </li>
      <!-- <li _ngcontent-c53 class="box-line line-vertical">
        <span _ngcontent-c53>详情</span>
        <div _ngcontent-c53 class="active-area"></div>
      </li>
      <li _ngcontent-c53 class="box-line line-vertical">
        <span _ngcontent-c53>参数</span>
        <div _ngcontent-c53 class="active-area"></div>
      </li>
      <li _ngcontent-c53 class="box-line line-vertical">
        <span _ngcontent-c53>推荐</span>
        <div _ngcontent-c53 class="active-area"></div>
      </li>-->
    </ul>
  </div>
</template>
<script>
import "vue";
export default {
  data() {
    return {
      channels: ["商品", "详情", "信息", "推荐"],
      cur: 0
    };
  },
  methods: {
    changeChannel(index) {
      //   console.log(index);
      this.cur = index;
    }
  }
};
</script>
<style scoped>
.fix-header-tabbox[_ngcontent-c53] {
  position: fixed;
  left: 0px;
  right: 0px;
  top: 50px;
  padding: 0.45rem 0.3rem;
  z-index: 99;
  background: #f2f2f2;
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.12);
  -webkit-user-select: none;
  user-select: none;
}
.fix-header-tabbox ul {
  font-size: 0.675rem;
  font-weight: 700;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  border-radius: 0.15rem;
}
.box-border {
  position: relative;
}
.fix-header-tabbox ul li {
  flex-basis: 25%;
  padding: 0.4rem 0;
  position: relative;
  color: #606060;
}
.fix-header-tabbox ul li:first-child {
  border-radius: 0.15rem 0 0 0.15rem;
  /* background: #bfbfbf; */
}
.fix-header-tabbox li.active {
  background: #bfbfbf;
  background-image: linear-gradient(#aeaeae, #b3b3b3);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15);
  color: #fff;
}
.fix-header-tabbox[_ngcontent-c53] li.active[_ngcontent-c53] {
  background: #bfbfbf;
  background-image: linear-gradient(#aeaeae, #b3b3b3);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15);
  color: #fff;
}
</style>

