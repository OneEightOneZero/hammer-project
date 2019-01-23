<template>
  <div _ngcontent-c51 class="ng-tns-c51-66" _nghost-c56>
    <div class="phone">
      <img :src="item[0].imgurl">
    </div>
    <div _ngcontent-c56 class="min-font-12px">
      <section _ngcontent-c56 class="section-floor item-content">
        <div _ngcontent-c56 class="item-titlebox box-line">
          <div _ngcontent-c56 class="title-header box-line">
            <div _ngcontent-c56 class="title-wrapper">
              <h2 _ngcontent-c56>商品信息</h2>
            </div>
          </div>
          <div _ngcontent-c56 class="title-content">
            <h4 _ngcontent-c56  v-text="item[0].name"></h4>
            <p _ngcontent-c56>骁龙 845 处理器 · 光学防抖双摄像头 · 6.17 英寸压力感应屏幕 · 10W快速无线充电功能</p>
            <!---->
            <div _ngcontent-c56 class="price">
              <i>¥</i>
              <span v-text="item[0].price"></span>
            </div>
            <!---->
            <!---->
            <!---->
          </div>
        </div>
        <!---->
        <div _ngcontent-c56 _nghost-c65>
          <!---->
          <section _ngcontent-c65 class="activities-wrapper clearfix">
            <div _ngcontent-c65 class="activities">
              <span _ngcontent-c65 class="activities-title">优惠信息</span>
              <div _ngcontent-c65 class="activities-list">
                <!---->
                <!---->
                <!---->
                <article _ngcontent-c65 class="activities-item">
                  <!---->
                  <!-- <figure _ngcontent-c65 class="tag-wrapper"> -->
                  <!-- </figure> -->
                  <!---->
                  <!---->
                  <div _ngcontent-c65 class="couponItem">
                    <span _ngcontent-c65 class="tag tag-red">领券</span>
                    <label _ngcontent-c65>400 元坚果 R1 优惠券</label>
                    <div _ngcontent-c65>
                      <span _ngcontent-c65>1&nbsp;个优惠券</span>
                    </div>
                    <i _ngcontent-c65 class="arrow"></i>
                  </div>
                </article>
                <!---->
              </div>
            </div>
          </section>
        </div>
      </section>
      <section _ngcontent-c56 class="section-floor item-content">
        <div _ngcontent-c56 class="item-box-column box-line specs">
          <h6 _ngcontent-c56>已选版本</h6>
          <div _ngcontent-c56 class="item-box">
            <!---->
            <p _ngcontent-c56>
              <span _ngcontent-c56 class="attr-name">颜色：</span>
              <span _ngcontent-c56 class="attr-value">孔雀蓝</span>
            </p>
            <p _ngcontent-c56>
              <span _ngcontent-c56 class="attr-name">容量：</span>
              <span _ngcontent-c56 class="attr-value">8G + 128GB</span>
            </p>
            <!---->
            <p _ngcontent-c56>
              <span _ngcontent-c56 class="attr-name">数量：</span>
              <span _ngcontent-c56 class="attr-value">1</span>
            </p>
          </div>
        </div>
        <div _ngcontent-c56 class="item-instruction">
          <!---->
          <!---->
          <!---->
          <!---->
          <!---->
        </div>
      </section>
      <!---->
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      item: []
    };
  },
  created() {
    let Url = location.href;
    let _id=  Url.split('#')[1].split('/')[2];
    this.getCurItem(_id);
  },
  methods: {
    // 获取数据的方法
    async getCurItem(curID) {
        await this.$axios.get("http://39.96.28.141:3000/good",{
        params:{
          getId:curID
        }
      }).then((data)=>{
        this.item = this.item.concat(data.data.data);
      //  console.log(this.item)
      });
      
    }
    
  },
};
</script>
<style scoped>
.item {
  background: #f5f5f5;
  overflow: hidden;
  padding: 2.4rem 0 2.5rem;
  -webkit-transform-origin: center top;
  transform-origin: center top;
  -webkit-user-select: none;
  user-select: none;
}
.phone {
  padding-top: 90px;
  width: 100%;
  height: 20%;
}
.phone img {
  width: 100%;
  height: 100%;
}
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
h4 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.item-titlebox .title-content {
  padding: 0.8rem 0.9rem;
  -webkit-user-select: text;
  user-select: text;
}
.item-titlebox .title-content {
  padding: 0.8rem 0.9rem;
  -webkit-user-select: text;
  user-select: text;
}
.item-titlebox .price {
  margin-right: 0.2rem;
  font-weight: 700;
}
.price {
  color: #d44d44;
  font-size: 0.7rem;
  display: inline-block;
  white-space: nowrap;
  font-size: 20px;
}
.item-titlebox .title-content {
  padding: 0.8rem 0.9rem;
  -webkit-user-select: text;
  user-select: text;
}
.activities-title {
  font-size: 0.6rem;
  line-height: 1.2;
  padding: 0 0 0.95rem;
  color: #999;
  display: block;
}
.activities-item {
  padding-bottom: 0.65rem;
  position: relative;
}
.activities-item .couponItem div:first-of-type {
  color: #d44d44;
  margin-right: 0.5rem;
  flex: 5.6rem;
  text-align: right;
  vertical-align: middle;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.activities-item .couponItem {
  font-size: 0.65rem;
  display: flex;
  justify-content: space-between;
  min-height: 18px;
}
.item[_ngcontent-c51] {
  background: #f5f5f5;
  overflow: hidden;
  padding: 2.4rem 0 2.5rem;
  -webkit-transform-origin: center top;
  transform-origin: center top;
  -webkit-user-select: none;
  user-select: none;
}
.tag-red {
  color: red;
  border: 1px solid red;
  font-size: 12px;
  padding: 0px 5px;
  background: rgb(250, 206, 206);
  border-radius: 5px;
  margin-right: 5px;
}
h6 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.item-box-column[_ngcontent-c13] .item-box[_ngcontent-c13] {
  font-size: 0.675rem;
}
</style>

