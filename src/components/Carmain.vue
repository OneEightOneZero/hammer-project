<template>
  <div class="main">
    <div class="MainCar" v-for="(aa,index) in shop" :key="index">
      <input style="width:20px;height:20px;" type="checkbox" :ref="index" @click="iptcheck(index)">
      <img :src="aa.imgurl" width="80px">
      <div class="MainCarBox">
        <h2 v-text="aa.name"></h2>
        <p v-text="`￥${aa.price}`"></p>
        <span class="munc" v-text="`*${aa.num}`"></span>
      </div>
    </div>
    <div class="buy">
      <input style="width:20px;height:20px;" type="checkbox" @click="allmoney" :ref="'allchecks'">
      <p>
        合计：
        <span v-text="totalPrice"></span>
      </p>
      <h6>免邮费</h6>
      <div class="del" @click="delItem">删除</div>
      <div>去结算</div>
    </div>
    <div class="recommend">
      <p style="margin:3px 0 0 20px;font-size:20px;font-weight:900;">相关推荐</p>
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
        <img src="../assets/images/bottom_1 .webp">
        <img src="../assets/images/bottom_2.webp">
        <img src="../assets/images/bottom_3.webp">
        <img src="../assets/images/bottom_4.webp">
        <div style="width:100%;height:100px;"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataArr2: [],
      shop: [],
      totalPrice: 0,
      allCheck: false,
      listCheck: [],
      active: true,
      checkNum: 0,
      curuser:""
    };
  },
  methods: {
    // 获取数据的方法
    async loadMore() {
      let data = await this.$axios.get("http://39.96.28.141:3000/goods");
      this.dataArr2 = this.dataArr2.concat(data.data.data2);
      // console.log(this.dataArr2);
    },
    async getshop(users) {
      this.shop= [];
      this.$store.commit("editLoding",true)
      let data = await this.$axios.get("http://39.96.28.141:3000/shopCar", {
        params: {
          users
        }
      });
      // 拿到数据再触发mutations修改loading的状态
      data?this.$store.commit("editLoding",false):null;
      this.shop = this.shop.concat(data.data);
    },
    autoLogin() {
      // console.log(666);
      // console.log(localStorage.getItem("token"));
      this.$axios({
        method: "post",
        url: "http://39.96.28.141:3000/users/autoLogin",
        data: this.$qs.stringify({
          isToken: localStorage.getItem("token")
        })
      }).then(res => {
        // console.log(res.data.curuser);
        // console.log(res.data.status);
        let fn = {
          true: async () => {
            this.getshop(res.data.curuser);
            this.curuser=res.data.curuser;
          },
          false: () => {}
        };
        fn[res.data.status]();
      });
    },
    async delItem(){
      for(let j = this.shop.length-1;j>=0;j--){
        if(this.$refs[j][0].checked){
          let delGuid = this.shop[j].guid;
          let delAccount = this.curuser;
          let data = await this.$axios.get("http://39.96.28.141:3000/shopCar/delItem", {
            params: {
              delAccount,
              delGuid
            }
          });
        }
      }
      this.getshop(this.curuser);
    },
    iptcheck(idx) {
      // console.log(this.$refs[idx][0].checked);
      // console.log(this.shop);
      for (let i = 0; i <= this.shop.length; i++) {
        if (i == idx) {
          if (this.$refs[idx][0].checked) {
            this.totalPrice += this.shop[i].num * this.shop[i].price;
            this.checkNum++;
          } else {
            this.totalPrice -= this.shop[i].num * this.shop[i].price;
            this.checkNum--;
          }
        }
        if (this.checkNum == this.shop.length) {
          this.$refs.allchecks.checked = true;
        }else{
          this.$refs.allchecks.checked = false;
        }
      }
    },
    allmoney() {
      // console.log(this.$refs.allchecks.checked);
      if (this.$refs.allchecks.checked) {
        this.checkNum = this.shop.length;
        this.totalPrice = 0;
        for (let i = 0; i <= this.shop.length-1; i++) {
          this.$refs[i][0].checked = true;
          this.totalPrice += this.shop[i].num * this.shop[i].price;
        }
      } else {
        this.checkNum = 0;
        this.totalPrice = 0;
        for (let i = 0; i <= this.shop.length-1; i++) {
          this.$refs[i][0].checked = false;
        }
      }
    }
  },
  //生命周期函数，创建后执行created()函数
  created() {
    (async () => {
      this.loadMore();
      await this.autoLogin();
    })();
  }
};
</script>
<style scoped>
.munc {
  position: absolute;
  bottom: 17%;
  right: 40%;
}
.main {
  margin-top: 50px;
  width: 100%;
  height: auto;
}
.main .MainCar {
  width: 100%;
  height: 100px;
  /* background: #ccc; */
  position: relative;
}
.main .MainCar input {
  position: absolute;
  top: 40px;
  left: 25px;
}
.main .MainCar img {
  position: absolute;
  top: 8px;
  left: 50px;
}
.main .MainCar .MainCarBox {
  position: relative;
  width: 70%;
  height: 100px;
  float: right;
  /* background: rgb(231, 107, 107); */
}
.main .MainCar .MainCarBox h2 {
  width: 200px;
  position: absolute;
  top: 18px;
  left: 50px;
  font-family: "楷体";
  font-weight: 999;

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: nowrap;
}
.main .MainCar .MainCarBox p {
  position: absolute;
  bottom: 18px;
  left: 55px;
  color: red;
}
.bottom_1 {
  width: 100%;
  height: auto;
}
.bottom_1 .phone1 {
  width: 50%;
  height: auto;
  float: left;
  box-sizing: border-box;
}
.bottom_1 .phone1 p {
  margin-left: 30px;
}
.bottom_1 .phone1 img {
  width: 100%;
}
.top_1 {
  width: 100%;
  height: 30px;
  border-top: 1px soild #ccc;
  padding-left: 20px;
  box-sizing: border-box;
}
.imgBot img {
  width: 50%;
}
.buy {
  width: 100%;
  height: 50px;
  background: linear-gradient(to top, #ccc, #fff);
  position: fixed;
  bottom: 66px;
}
.buy input {
  margin: 20px 0 0 20px;
}
.buy p {
  position: absolute;
  top: 8px;
  right: 37%;
  font-size: 14px;
  color: red;
}
.buy h6 {
  position: absolute;
  top: 28px;
  right: 46%;
  font-size: 13px;
  color: rgb(255, 7, 181);
}
.buy div {
  width: 16%;
  height: 40px;
  position: absolute;
  top: 5px;
  right: 2%;
  font-size: 16px;
  text-align: center;
  line-height: 43px;
  color: #fff;
  background: linear-gradient(to top, cyan, skyblue);
  border-radius: 5px;
}
.buy .del {
  background: red;
  top: 5px;
  right: 19%;
}
</style>