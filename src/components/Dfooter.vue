<template>
  <ul _ngcontent-c50 class="item-footer box-line line-top">
    <li _ngcontent-c50 class="cart-entry">
      <a _ngcontent-c50 target="_self" href="javescript:;">
        <!---->
        <img
          _ngcontent-c50
          src="data:image/png;base64,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"
        >
      </a>
    </li>
    <!---->
    <li _ngcontent-c50 @click="getxinxi">
      <span _ngcontent-c50 class="box-border">
        <a _ngcontent-c50>加入购物车</a>
      </span>
    </li>
    <!---->
    <li _ngcontent-c50 class="highlight">
      <span _ngcontent-c50 class="box-border">
        <a _ngcontent-c50>现在购买</a>
      </span>
    </li>
  </ul>
  <!-- <div class="footer">
    <p class="but">到货通知</p>
  </div>-->
</template>
<script>
export default {
  data() {
    return {
      item: []
    };
  },
  created() {
    let Url = location.href;
    let _id = Url.split("#")[1].split("/")[2];
    this.getCurItem(_id);
  },
  methods: {
    // 获取数据的方法
    async getCurItem(curID) {
      await this.$axios
        .get("http://39.96.28.141:3000/good", {
          params: {
            getId: curID
          }
        })
        .then(data => {
          this.item = this.item.concat(data.data.data);
          //  console.log(this.item)
        });
    },
    getxinxi() {
      this.$axios({
        method: "post",
        url: "http://39.96.28.141:3000/shopCar/addItem",
        data: this.$qs.stringify({
          addImgurl: this.item[0].imgurl,
          addName: this.item[0].name,
          addPrice: this.item[0].price,
          addGuid: this.item[0].guid,
          qty: 1,
          addAccount: "13633333333"
        })
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
ol,
ul {
  list-style: none;
}
ul.box-line[_ngcontent-c50] {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-content: center;
  justify-content: space-between;
  background: #fff;
  height: 2.75rem;
  padding: 0 0.4%;
  z-index: 202;
  box-shadow: 0 -11px 27px rgba(0, 0, 0, 0.08);
}
.box-line {
  position: relative;
}
li.cart-entry[_ngcontent-c50] {
  flex-shrink: 0;
  flex-basis: 2.5rem;
}
li[_ngcontent-c50] {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
  box-sizing: border-box;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 0.7%;
}
li.cart-entry[_ngcontent-c50] a[_ngcontent-c50] {
  display: inline-block;
  width: 100%;
  text-align: center;
  position: relative;
}
a[_ngcontent-c50] {
  text-decoration: none;
  color: inherit;
}
li.cart-entry[_ngcontent-c50] a[_ngcontent-c50] img[_ngcontent-c50] {
  display: block;
  margin: 0.35rem auto;
  width: 1.35rem;
}
li[_ngcontent-c50] {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
  box-sizing: border-box;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 0.7%;
}
li[_ngcontent-c50] > span[_ngcontent-c50] {
  width: 98%;
  height: 1.9rem;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#fff, #fcfcfc);
  color: #8c8c8c;
}
.box-border {
  position: relative;
}
li[_ngcontent-c50] {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
  box-sizing: border-box;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 0.7%;
}
li.highlight[_ngcontent-c50] > span[_ngcontent-c50] {
  color: #fff;
  background: #5f7ed7;
  background: linear-gradient(#6e98f4, #4b77ee);
}
li[_ngcontent-c50] > span[_ngcontent-c50] {
  width: 98%;
  height: 1.9rem;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#fff, #fcfcfc);
  color: #8c8c8c;
}
ul.box-line[_ngcontent-c50]:after {
  background: #dfdfdf;
}
.box-line.line-top:after {
  top: 0;
  bottom: auto;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.box-line:after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ebebeb;
  -webkit-transform: scaleY(0.667);
  transform: scaleY(0.667);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
/* .footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  text-align: center;
  box-shadow: blur #ccc;
}
.footer .but {
  display: block;
  width: 98%;
  height: 45px;
  background: rgb(243, 243, 43);
  border-radius: 5px;
  color: #fff;
  font-size: 23px;
  font-weight: 900;
} */
</style>
