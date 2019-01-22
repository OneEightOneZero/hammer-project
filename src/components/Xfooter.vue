<template>
  <div class="weui-tabbar">
    <router-link to="/app/wechat" href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
      <span style="display: inline-block;position: relative;">
        <img :src="footer1" alt class="weui-tabbar__icon">
        <!-- <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span> -->
      </span>
      <p class="weui-tabbar__label">首页</p>
    </router-link>
    <!-- 编程式导航 -->
    <a @click="toContact" href="javascript:;" class="weui-tabbar__item">
      <img :src="footer2" alt class="weui-tabbar__icon">
      <p class="weui-tabbar__label">分类</p>
    </a>
    <a href="javascript:;" class="weui-tabbar__item">
      <span style="display: inline-block;position: relative;">
        <img :src="footer3" alt class="weui-tabbar__icon">
        <!-- <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span> -->
      </span>
      <p class="weui-tabbar__label">购物车</p>
    </a>
    <a href="javascript:;" class="weui-tabbar__item">
      <img :src="footer4" alt class="weui-tabbar__icon">
      <p class="weui-tabbar__label">个人中心</p>
    </a>
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
      footer1,
      footer2,
      footer3,
      footer4,
    };
  },
  methods: {
    toContact() {
      // this.$router.push('/app/contact')
      // 根据命名路由来进行跳转
      this.$router.push({ name: "contact" });
    }
  }
};
</script>
<style scoped>
.weui-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
}

.weui-tabbar__label{
  color: #666;
}
</style>


