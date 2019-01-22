<template>
  <div id="loadingToast" v-show="loadingStatus">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-loading weui-icon_toast"></i>
      <p class="weui-toast__content">数据加载中</p>
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
      loadingStatus: state => state.loadingStatus
    })
  }
};
</script>

