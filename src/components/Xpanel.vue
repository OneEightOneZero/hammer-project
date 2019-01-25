<template>
  <!-- View -->
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
      <!-- <router-link :to="`/detail/${index}/${'lemon'}`" -->
      <a
        v-for="(n,index) in news"
        :key="index"
        href="javascript:void(0);"
        class="weui-media-box weui-media-box_appmsg"
      >
        <!-- v-if="searchInput == index" -->
        <div
          @click="showGallery(n.image_list[0].url)"
          class="weui-media-box__hd"
          v-if="n.image_list.length>0"
        >
          <img class="weui-media-box__thumb" :src="n.image_list[0].url" alt>
        </div>
        <div @click="toDetailPage(index)" class="weui-media-box__bd">
          <h4 class="weui-media-box__title" v-text="n.title"></h4>
          <p class="weui-media-box__desc" v-text="n.keywords"></p>
        </div>
        <!-- </router-link> -->
      </a>
    </div>
    <div class="weui-panel__ft">
      <a
        @click="getNews"
        href="javascript:void(0);"
        class="weui-cell weui-cell_access weui-cell_link"
      >
        <div class="weui-cell__bd">查看更多</div>
        <span class="weui-cell__ft"></span>
      </a>
    </div>
  </div>
</template>
<script>
import observer from '../libs/observer.js'
export default {
  // M
  data() {
    return {
      // 存放新闻数据
      news: [],
      // 从xsearch组件获取
      searchInput:""
    };
  },
  methods: {
    // 获取数据的方法
    async getNews() {
      // 触发mutations修改loading的状态
      this.$store.commit("editLoding",true)
      let data = await this.$axios.get("http://localhost:3000/news");
      // 拿到数据再触发mutations修改loading的状态
      data?this.$store.commit("editLoding",false):null;
      this.news = this.news.concat(data.data.data);
    },
    // 编程式导航进入详情页
    toDetailPage(index) {
      // 把index存进去仓库里面
      this.$store.commit('editNewsId',index)
      // 路由跳转
      this.$router.push({
        name: "detail",
        params: { id: index, name: "lemon" }
      });
    },
    // 显示预览图
    showGallery(imgUrl) {
      this.$store.dispatch("setGallery", {
        // 图片
        galleryImgUrl: imgUrl,
        // 状态值
        galleryStatus: true
      });
    }
  },
  created() {
    // 触发getNews方法
    this.getNews();
    // 订阅者
    observer.on('search',(data)=>{
      this.searchInput = data
    })
  }
};
</script>
<style scoped>
.weui-panel {
  background-color: #ffffff;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  padding-bottom: 54px;
}
</style>


