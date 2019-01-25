<template>
  <div class="weui-tabbar">
    <router-link :to="bb.link" @click.native="changeChannel(index)" v-for="(bb,index) in channels" :key="index" href="javascript:;" class="weui-tabbar__item weui-bar__item_on" :class="{
                        'active': index==cur
                    }">
      <span style="display: inline-block;position: relative;">
        <img :src="bb.channel" class="weui-tabbar__icon">
        <!-- <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span> -->
      </span>
      <p class="weui-tabbar__label" v-text="bb.title"></p>
    </router-link>
    <!-- 编程式导航 -->
    <!-- <a @click="toSorter" href="javascript:;" class="weui-tabbar__item">
      <img :src="footer2" alt class="weui-tabbar__icon">
      <p class="weui-tabbar__label">分类</p>
    </a>
    <a @click="toCar" href="javascript:;" class="weui-tabbar__item">
      <span style="display: inline-block;position: relative;">
        <img :src="footer3" alt class="weui-tabbar__icon"> -->
        <!-- <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span> -->
      <!-- </span>
      <p class="weui-tabbar__label">购物车</p>
    </a>
    <a @click="toMine" href="javascript:;" class="weui-tabbar__item">
      <img :src="footer4" alt class="weui-tabbar__icon">
      <p class="weui-tabbar__label">个人中心</p>
    </a> -->
  </div>
</template>
<script>
import footer1 from "../assets/footer1.png";
import footer2 from "../assets/footer2.png";
import footer3 from "../assets/footer3.png";
import footer4 from "../assets/footer4.png";
export default {
  data() {
    return {
      channels: [
        {
          channel: footer1,
          title: "首页",
          link:"/app/wechat"
        },
        {
          channel: footer2,
          title: "分类",
          link:"/app/sorter"
        },
        {
          channel: footer3,
          title: "购物车",
          link:"/app/car"
        },
        {
          channel: footer4,
          title: "个人中心",
          link:"/app/mine"
        }
      ],
      cur: 0
    };
  },
  methods: {
    changeChannel(index) {
      // console.log(index)
      this.cur = index;
    }
  },
  watch: {
    $route(){
      let aa = this.$route.path;
      
    }
  },
};
</script>
<style scoped>
.weui-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
}
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
    /* color: #09BB07; */
  color: #666;
}
.active{
  font-size:25px;
  font-weight: 900;
  color: black;
}
</style>


