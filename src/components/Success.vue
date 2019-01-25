<template>
  <div id="toast" v-show="successy">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-icon-success-no-circle weui-icon_toast"></i>
      <p class="weui-toast__content">登录成功</p>
    </div>
  </div>
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
        successy: state => state.successy
      })
    }
};
</script>

 