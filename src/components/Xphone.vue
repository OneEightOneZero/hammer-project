<template>
  <div class="box1">
    <div class="top_1">
      <span style="font-weight: 900;color:#555;">坚果系列手机及其配件</span>
      <span style="float:right;margin-right:20px;">></span>
    </div>
    <div class="bottom_1">
      <router-link
        :to="`/detail/${n._id}`"
        class="phone1"
        v-for="(n,index) in dataArr1"
        :key="index"
      >
        <img :src="n.imgurl">
        <p style="font-weight:900;" v-text="n.name"></p>
        <p style="color:red;" v-text="n.price"></p>
      </router-link>
    </div>
    <div class="imgBot">
      <img src="../assets/images/bottom_1 .webp">
      <img src="../assets/images/bottom_2.webp">
      <img src="../assets/images/bottom_3.webp">
      <img src="../assets/images/bottom_4.webp">
      <!-- <div style="width:100%;height:50px;"></div> -->
    </div>
    <div class="top_1">
      <span style="font-weight: 900;color:#555;">精品配件</span>
      <span style="float:right;margin-right:20px;">></span>
    </div>
    <div id="parts" class="bottom_1">
      <router-link
        :to="`/detail/${n._id}`"
        class="phone1"
        v-for="(n,index) in dataArr2"
        :key="index"
      >
        <img :src="n.imgurl">
        <p style="font-weight:900;" v-text="n.name"></p>
        <p style="color:red;" v-text="n.price"></p>
      </router-link>
    </div>
    <div class="imgBot">
      <img src="../assets/images/pei1.webp">
      <img src="../assets/images/pei2.webp">
      <img src="../assets/images/pei3.webp">
      <img src="../assets/images/pei4.webp">
      <img src="../assets/images/pei6.webp">
      <img src="../assets/images/pei5.webp">
      <img src="../assets/images/bottom_1 .webp">
      <img src="../assets/images/bottom_2.webp">
      <img src="../assets/images/bottom_3.webp">
      <img src="../assets/images/bottom_4.webp">
      <div style="width:100%;height:50px;"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataArr1: [],
      dataArr2: []
    };
  },
  methods: {
    // 获取数据的方法
    async loadMore() {
      let data = await this.$axios.get("http://39.96.28.141:3000/goods");
      this.dataArr1 = this.dataArr1.concat(data.data.data1);
      this.dataArr2 = this.dataArr2.concat(data.data.data2);
      // console.log(this.dataArr2);
    }
  },
  //生命周期函数，创建后执行created()函数
  created() {
    this.loadMore();
  }
};
</script>
<style scoped>
.imgBot img {
  width: 50%;
}
.box1 {
  margin-top: 365px;
  height: auto;
  width: 100%;
}
.box1 .bottom_1 {
  width: 100%;
  height: auto;
}
.box1 .bottom_1 .phone1 {
  width: 50%;
  height: auto;
  float: left;
  box-sizing: border-box;
}
.box1 .bottom_1 .phone1 p {
  margin-left: 30px;
}
.box1 .bottom_1 .phone1 img {
  width: 100%;
}
.box1 .top_1 {
  width: 100%;
  height: 30px;
  border-top: 1px soild #ccc;
  padding-left: 20px;
  box-sizing: border-box;
}
</style>