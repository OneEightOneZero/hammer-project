<template>
  <section _ngcontent-c0 class="main-wrapper is-header-shown is-bottom-shown">
    <div _ngcontent-c0></div>
    <div _nghost-c8 class>
      <div _ngcontent-c8>
        <div _ngcontent-c8></div>
        <div _nghost-c9>
          <div _ngcontent-c9 class="wrapper page-for-center">
            <!---->
            <div @click="goLogin" _ngcontent-c9 class="common-box arrow-right-icon box-userinfo">
              <div _ngcontent-c9 class="avatar">
                <img
                  _ngcontent-c9
                  src="//static.smartisanos.cn/account/asset/img/default-user-avatar.png"
                >
              </div>登录/注册
            </div>
            <!---->
            <ul _ngcontent-c9 class="common-box menu-list-parallel box-order">
              <li _ngcontent-c9>
                <a
                  _ngcontent-c9
                  class="icons icon-order"
                  target="_self"
                  href="javascript:;"
                >全部订单</a>
              </li>
              <li _ngcontent-c9>
                <a
                  _ngcontent-c9
                  class="icons icon-unpay"
                  target="_self"
                  href="javascript:;"
                >待付款</a>
                <div _ngcontent-c9 class="tag-container">
                  <!---->
                </div>
              </li>
              <li _ngcontent-c9>
                <a
                  _ngcontent-c9
                  class="icons icon-undone"
                  target="_self"
                  href="javascript:;"
                >待收货</a>
                <div _ngcontent-c9 class="tag-container">
                  <!---->
                </div>
              </li>
              <li _ngcontent-c9>
                <a
                  _ngcontent-c9
                  class="icons icon-aftersale"
                  target="_self"
                  href="javascript:;"
                >售后</a>
              </li>
            </ul>
            <!---->
            <!---->
            <ul _ngcontent-c9 class="common-box menu-list-vertical">
              <li _ngcontent-c9 class="arrow-right-icon">
                <a _ngcontent-c9 target="_self" href="javascript:;">地址管理</a>
              </li>
              <li _ngcontent-c9 class="arrow-right-icon">
                <a _ngcontent-c9 target="_self" href="javascript:;">我的优惠券</a>
              </li>
              <li _ngcontent-c9 class="arrow-right-icon">
                <a _ngcontent-c9 target="_self" href="javascript:;">优先购买码</a>
              </li>
              <li _ngcontent-c9 class="arrow-right-icon">
                <a _ngcontent-c9 target="_self" href="javascript:;">提货兑换卡</a>
              </li>
            </ul>
            <!---->
            <ul _ngcontent-c9 class="common-box menu-list-vertical">
              <li _ngcontent-c9 class="arrow-right-icon">
                <a
                  _ngcontent-c9
                  href="javascript:;"
                  target="_self"
                >常见问题</a>
              </li>
              <li _ngcontent-c9 class="arrow-right-icon">
                <a _ngcontent-c9 href="javascript:;" target="_self">服务支持</a>
              </li>
            </ul>
            <!---->
            <ul _ngcontent-c9 class="common-box menu-list-vertical">
              <li _ngcontent-c9 class="arrow-right-icon">
                <a _ngcontent-c9 href="javascript:;" target="_self">意外碎屏保修服务</a>
              </li>
              <li _ngcontent-c9 class="arrow-right-icon">
                <a _ngcontent-c9 href="javascript:;" target="_self">延长保修服务</a>
              </li>
            </ul>
          </div>
        </div>
        <div _ngcontent-c8 _nghost-c5 class="ng-tns-c5-3">
          <div _ngcontent-c5 class="ng-tns-c5-3 ng-tns-c7-4" _nghost-c7>
            <div
              _ngcontent-c7
              class="modal-wrap ng-trigger ng-trigger-animationState"
              style="opacity: 0; display: none;"
            >
              <div
                _ngcontent-c7
                class="shadow ng-trigger ng-trigger-animationState"
                style="opacity: 0; display: none;"
              ></div>
              <div
                _ngcontent-c7
                class="container ng-trigger ng-trigger-animationStateNone"
                style="opacity: 0; display: none;"
              >
                <div _ngcontent-c5 class="dialog ng-tns-c5-3">
                  <div _ngcontent-c5 class="title">提示</div>
                  <div _ngcontent-c5 class="content">
                    <div _ngcontent-c8 class="dialog-confirm-msg"></div>
                  </div>
                  <div _ngcontent-c5 class="button-wrapper">
                    <!---->
                    <button
                      _ngcontent-c5
                      class="button-confirm ng-trigger ng-trigger-buttonClick"
                    >确认</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  methods: {
    goLogin() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>


<style scoped>
ul {
  padding-inline-start: 0;
}
.main-wrapper.is-header-shown[_ngcontent-c0] {
  margin-top: 50px;
}
.menu-list-vertical[_ngcontent-c9] a[_ngcontent-c9] {
  position: relative;
  display: block;
  text-decoration: none;
  color: #333;
}
.page-for-center[_ngcontent-c9]
  .menu-list-vertical[_ngcontent-c9]
  li[_ngcontent-c9]
  a[_ngcontent-c9] {
  padding-left: 0;
  text-indent: 0.93rem;
}
.menu-list-vertical[_ngcontent-c9] li[_ngcontent-c9]:before {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  content: "";
  width: 100%;
  height: 1px;
  background: #f2f2f2;
  /* -webkit-transform: scaleY(.667); */
  transform: scaleY(0.667);
  /* -webkit-transform-origin: bottom; */
  transform-origin: bottom;
}
.arrow-right-icon[_ngcontent-c9]:after {
  content: "";
  display: inline-block;
  width: 0.3rem;
  height: 0.5rem;
  position: absolute;
  right: 0.6rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  background: url(../assets/jiantou.png) no-repeat 50%;
  background-size: contain;
}
.menu-list-parallel[_ngcontent-c9]
  li[_ngcontent-c9]
  .icons[_ngcontent-c9]:before {
  top: 0.4rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.icons.icon-order[_ngcontent-c9]:before {
  background: url(../assets/quanbu.png) no-repeat 50%;
  background-size: 0.8rem;
}
.icons[_ngcontent-c9]:before {
  content: " ";
  display: block;
  position: absolute;
  top: 50%;
  left: 0.9rem;
  width: 1.2rem;
  height: 1.2rem;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.icons.icon-undone[_ngcontent-c9]:before {
  background: url(../assets/shopping.png) no-repeat 50%;
  background-size: 1rem;
}
.icons.icon-aftersale[_ngcontent-c9]:before {
  background: url(../assets/shouhou.png) no-repeat 50%;
  background-size: 0.8rem;
}
.icons[_ngcontent-c9]:before {
  content: " ";
  display: block;
  position: absolute;
  top: 50%;
  left: 0.9rem;
  width: 1.2rem;
  height: 1.2rem;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.icons[_ngcontent-c9]:before {
  content: " ";
  display: block;
  position: absolute;
  top: 50%;
  left: 0.9rem;
  width: 1.2rem;
  height: 1.2rem;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.page-for-center[_ngcontent-c9]
  .box-userinfo[_ngcontent-c9]
  .avatar[_ngcontent-c9] {
  position: absolute;
  left: 0.9rem;
  top: 50%;
  width: 2.66rem;
  height: 2.66rem;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.arrow-right-icon[_ngcontent-c9]:after {
  content: "";
  display: inline-block;
  width: 0.3rem;
  height: 0.5rem;
  position: absolute;
  right: 0.6rem;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  background: url(../assets/jiantou.png) no-repeat 50%;
  background-size: contain;
}
.main-wrapper.is-bottom-shown[_ngcontent-c0] {
  margin-bottom: 54px;
  /* background: #e5e5e5; */
}

.main-wrapper[_ngcontent-c0] {
  overflow: scroll;
  /* background: #e5e5e5; */
}
.page-for-center[_ngcontent-c9] {
  padding: 0.7rem 0.6rem 0;
}

.wrapper[_ngcontent-c9] {
  height: 100%;
  width: 100%;
  /* background: #e5e5e5; */
  background: url(../assets/bg-layout@2x.5611bddf255be8472b81b7a740665a5d.png)
    repeat;
  background-size: 5rem;
  box-sizing: border-box;
  min-height: 100vh;
}

.page-for-center[_ngcontent-c9]
  .box-userinfo[_ngcontent-c9]
  .avatar[_ngcontent-c9]
  img[_ngcontent-c9] {
  width: 2.66rem;
  height: 2.66rem;
  border-radius: 50%;
}

.page-for-center[_ngcontent-c9] .box-userinfo[_ngcontent-c9] {
  position: relative;
  height: 4.15rem;
  line-height: 4.15rem;
  padding-left: 4.35rem;
  margin-bottom: 0;
  border-bottom: 0;
  border-radius: 0.4rem 0.4rem 0 0;
  font-size: 0.85rem;
  color: #333;
  box-shadow: none;
}

.common-box[_ngcontent-c9] {
  /* position: relative; */
  overflow: hidden;
  /* border-radius: .4rem; */
  background: #fff;
  /* margin-bottom: .7rem;
    box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 18px 20px -10px rgba(0,0,0,.03), 0 18px 20px -10px rgba(0,0,0,.03), 0 10px 20px -10px rgba(0,0,0,.03); */
}

.page-for-center[_ngcontent-c9] .box-order[_ngcontent-c9] {
  border-radius: 0 0 0.4rem 0.4rem;
}

.common-box[_ngcontent-c9] {
  position: relative;
  overflow: hidden;
  border-radius: 0.4rem;
  background: #fff;
  margin-bottom: 0.7rem;
  margin-top: 0px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1),
    0 18px 20px -10px rgba(0, 0, 0, 0.03), 0 18px 20px -10px rgba(0, 0, 0, 0.03),
    0 10px 20px -10px rgba(0, 0, 0, 0.03);
}

ol,
ul {
  list-style: none;
}

.page-for-center[_ngcontent-c9] .box-order[_ngcontent-c9] li[_ngcontent-c9] {
  font-size: 0.5rem;
}

.menu-list-parallel[_ngcontent-c9] li[_ngcontent-c9] {
  float: left;
  width: 25%;
  height: 3rem;
  text-align: center;
}

.menu-list-parallel[_ngcontent-c9] li[_ngcontent-c9],
.menu-list-vertical[_ngcontent-c9] li[_ngcontent-c9] {
  position: relative;
  font-size: 0.85rem;
  box-sizing: border-box;
}

.icons[_ngcontent-c9]:before {
  top: 0.4rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.icons.icon-unpay[_ngcontent-c9]:before {
  background: url(../assets/fukuan.png) no-repeat 50%;
  background-size: 1rem;
}

.icons[_ngcontent-c9]:before {
  content: " ";
  display: block;
  position: absolute;
  top: 50%;
  left: 0.9rem;
  width: 1.2rem;
  height: 1.2rem;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.min-font-12px
  [_nghost-c9]
  .page-for-center[_ngcontent-c9]
  .box-order[_ngcontent-c9]
  a[_ngcontent-c9] {
  -webkit-transform: scale(0.83333);
  transform: scale(0.83333);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}

.page-for-center[_ngcontent-c9] .box-order[_ngcontent-c9] a[_ngcontent-c9],
.page-for-center[_ngcontent-c9] .box-order[_ngcontent-c9] li[_ngcontent-c9] {
  font-size: 0.5rem;
}

.menu-list-parallel[_ngcontent-c9] li[_ngcontent-c9] a[_ngcontent-c9] {
  padding: 2rem 0 0.5rem;
}

.menu-list-parallel[_ngcontent-c9] a[_ngcontent-c9],
.menu-list-vertical[_ngcontent-c9] a[_ngcontent-c9] {
  position: relative;
  display: block;
  text-decoration: none;
  color: #333;
}

.tag-container[_ngcontent-c9] {
  position: absolute;
  top: 0.25rem;
  right: 0.9rem;
  font-size: 0.4rem;
}
.common-box[_ngcontent-c9] {
  position: relative;
  overflow: hidden;
  border-radius: 0.4rem;
  background: #fff;
  margin-bottom: 0.7rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1),
    0 18px 20px -10px rgba(0, 0, 0, 0.03), 0 18px 20px -10px rgba(0, 0, 0, 0.03),
    0 10px 20px -10px rgba(0, 0, 0, 0.03);
}
.menu-list-vertical[_ngcontent-c9] li[_ngcontent-c9] {
  height: 3rem;
  line-height: 3rem;
}

.menu-list-parallel[_ngcontent-c9] li[_ngcontent-c9],
.menu-list-vertical[_ngcontent-c9] li[_ngcontent-c9] {
  position: relative;
  font-size: 0.85rem;
  box-sizing: border-box;
}
.menu-list-vertical[_ngcontent-c9] li[_ngcontent-c9] {
  height: 3rem;
  line-height: 3rem;
}
.menu-list-parallel[_ngcontent-c9] li[_ngcontent-c9],
.menu-list-vertical[_ngcontent-c9] li[_ngcontent-c9] {
  position: relative;
  font-size: 0.85rem;
  box-sizing: border-box;
}
.page-for-center[_ngcontent-c9] .box-order[_ngcontent-c9] a[_ngcontent-c9],
.page-for-center[_ngcontent-c9] .box-order[_ngcontent-c9] li[_ngcontent-c9] {
  font-size: 0.5rem;
}
.page-for-center[_ngcontent-c9] .box-order[_ngcontent-c9]:before {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  content: "";
  width: 100%;
  height: 1px;
  background: #f2f2f2;

  transform: scaleY(0.667);

  transform-origin: top;
}
.menu-list-parallel[_ngcontent-c9] li[_ngcontent-c9]:before {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 1px;
  height: 100%;
  background: #f2f2f2;
  transform: scaleX(0.667);
  transform-origin: right;
}
.menu-list-parallel[_ngcontent-c9] li[_ngcontent-c9] a[_ngcontent-c9] {
  padding: 2rem 0 0.5rem;
}

.menu-list-parallel[_ngcontent-c9] a[_ngcontent-c9],
.menu-list-vertical[_ngcontent-c9] a[_ngcontent-c9] {
  position: relative;
  display: block;
  text-decoration: none;
  color: #333;
}
</style>
