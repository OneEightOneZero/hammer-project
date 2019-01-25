<template>
  <div class="wrapper">
    <div class="content">
      <form action="#">
        <ul class="common-form">
          <li class="username border-1p">
            <div class="input">
              <span class="icon">
                <i></i>
              </span>
              <label for="username" class="placeholder ng-binding" ng-class="{'indent': showCcc}"></label>
              <input type="text" class="in1" v-model="numbers" placeholder="手机号/邮箱">
              <span
                id="u-required"
                aria-live="assertive"
                class="warning ng-binding"
                i-warning="form.username.$submitted &amp;&amp; form.username.$error.required"
              ></span>
              <span
                id="u-format-error"
                aria-live="assertive"
                class="warning ng-binding"
                i-warning="form.username.$blurred &amp;&amp; form.username.$error.username"
              >手机号/邮箱格式错误</span>
              <span
                id="u-not-exist"
                aria-live="assertive"
                class="warning ng-binding"
                i-warning="form.username.$blurred &amp;&amp; form.username.$error.nameValid"
              >手机号/邮箱不存在</span>
            </div>
          </li>
          <li class="password">
            <div class="input" style="opacity: 0.618;">
              <span class="icon">
                <i></i>
              </span>
              <label for="password" class="placeholde"></label>
              <input type="password" name="password" class="in2" v-model="mima" placeholder="密码">
              <span class="m-eye"></span>
              <span
                id="p-required"
                aria-live="assertive"
                class="warning"
                i-warning="form.password.$submitted &amp;&amp; form.password.$error.required"
              >请输入密码</span>
              <span
                :class="{'isError':actives}"
                id="p-error"
                aria-live="assertive"
                class="warning"
                i-warning="form.password.$submitted &amp;&amp; form.password.$error.passwordValid"
              >账号或密码错误</span>
            </div>
          </li>
          <li class="remember" ng-class="{'notes': isEmbedNotes}">
            <!-- ngIf: !isMiniprogram -->
            <div
              class="auto ng-binding ng-scope"
              ng-click="remembered = !remembered"
              ng-if="!isMiniprogram"
            >
              <span
                role="checkbox"
                aria-checked="true"
                class="checkbox checked"
                ng-class="{'checked' : remembered}"
              >
                <a></a>
              </span> 自动登录
            </div>
            <!-- end ngIf: !isMiniprogram -->
            <a class="forgotpassword ng-binding" ng-click="forgotPassword()">忘记密码</a>
            <a class="registercloud ng-binding" ng-click="toRegister()" @click="getZuce">注册</a>
          </li>
        </ul>
        <div class="btn-wrapper">
          <div
            class="btn btn-primary disabled"
            ng-class="{'disabled':form.$invalid}"
            ng-click="login()"
          >
            <a role="button" @click="login">登录</a>
          </div>
        </div>
        <div class="info-wrapper clearfix">
          <ul>
            <li>
              <!-- ngIf: !isMiniprogram -->
              <ul class="login-three ng-scope" ng-if="!isMiniprogram">
                <li class="text">其他账号登录：</li>
                <li role="button" class="wechat" ng-click="wechatLogin()"></li>
                <li role="button" class="weibo" ng-click="weiboLogin()"></li>
                <li role="button" class="qq" ng-click="qqLogin()"></li>
                <li role="button" class="alipay" ng-click="alipayLogin()"></li>
              </ul>
              <!-- end ngIf: !isMiniprogram -->
            </li>
            <li>
              <a role="button" ng-click="switchModel()" class="ng-binding">
                国际手机号登录
                <span class="smartisan-icon gt">
                  <img src="../assets/jiantou.png" alt="#" width="7px" height="9px">
                </span>
              </a>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: "",
      mima: "",
      actives: false
    };
  },
  methods: {
    getZuce() {
      this.$router.push({ name: "zuce" });
    },
    login() {
      this.$axios({
        method: "post",
        url: "http://39.96.28.141:3000/users/login",
        data: this.$qs.stringify({
          inputAccount: this.numbers,
          inputPassword: this.mima
        })
      }).then(res => {
        let fn = {
          success: () => {
            localStorage.setItem("token", res.data.token);
            this.$store.commit("editSuccess", true);
            setTimeout(() => {
              this.$store.commit("editSuccess", false);
              this.$router.push({ name: "wechat" });
            }, 2000);
          },
          fail: () => {
            this.actives = !this.actives;
            setTimeout(() => {
              this.actives = !this.actives;
            }, 3000);
          }
        };
        fn[res.data.status]();
        // switch (res.data.status){
        //   case "success":
        //   this.$router.push({ name: "wechat" });
        //   break
        // }
        // if(res.data.status == "success"){
        //   this.$router.push({ name: "wechat" });
        // }
      });
    }
  }
};
</script>

<style scoped>
.wrapper {
  padding-top: 50px;
  min-width: inherit;
  height: 100%;
  min-height: 757px;
  background-image: url(../assets/bg-layout@2x.5611bddf255be8472b81b7a740665a5d.png);
}
.content {
  width: 94%;
  height: 230px;
  margin: 0px 12px 0 12px;
  /* background: #ccc; */
}

.content form {
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

.common-form {
  width: 100%;
  height: 119px;
  padding-top: 14px;
  /* background: #666; */
}

.username {
  width: 100%;
  height: 44px;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-bottom: 0;
  border-radius: 6px 6px 0 0;
  margin-bottom: 0;
}

.input {
  border-top: 0;
  box-shadow: 0 3px 5px -4px rgba(0, 0, 0, 0.4) inset,
    -1px 0 3px -2px rgba(0, 0, 0, 0.1) inset;
  line-height: 33px;
  /* overflow: hidden; */
  position: relative;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

.input .icon {
  display: none;
  background: url(../assets/bg-layout@2x.5611bddf255be8472b81b7a740665a5d.png)
    repeat-x;
  border-radius: 6px 0 0 6px;
  border-right: 1px solid #d7d7d7;
  width: 32px;
  position: absolute;
  top: 0;
  left: 0;
}

span {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

.input .placeholder {
  line-height: 44px;
  left: 10px;
  color: #b2b2b2;
  font-size: 15px;
  padding: 1px 0 0;
  position: absolute;
  /* left: 44px; */
  top: 0px;
}

.input .placeholde {
  line-height: 44px;
  left: 10px;
  color: #b2b2b2;
  font-size: 15px;
  padding: 1px 0 0;
  position: absolute;
  /* left: 44px; */
  top: 0px;
}

.input .in1 {
  width: 100%;
  height: 44px;
  background: 0 0;
  border: 0;
  padding: 0px 10px;
  box-sizing: border-box;
  /* font-size: 14px;
    padding: 0 15px 0 44px;
    height: 100%;
    width: 100%; */
  position: absolute;
  top: 0px;
  left: 0px;
}

.input .in2 {
  width: 100%;
  height: 44px;
  background: 0 0;
  border: 0;
  padding: 0px 10px;
  box-sizing: border-box;
  /* font-size: 14px;
	padding: 0 15px 0 44px;
	height: 100%;
	width: 100%; */
  position: absolute;
  top: 0px;
  left: 1px;
}
.input .warning {
  display: none;
  position: fixed;
  top: auto;
  bottom: 48px;
  left: 50%;
  right: auto;
  width: auto;
  transform: translateX(-50%);
  text-align: center;
  border-radius: 4px;
  font-weight: 400;
  /* background: #ffe8b4; */
  background: linear-gradient(#ffebbd, #ffe7af);
  color: #6e5336;
  font-size: 13px;
  text-shadow: 0 -1px rgba(255, 255, 255, 0.2);
  border: 1px solid #cdbe9a;
  height: 34px;
  line-height: 37px;
  padding: 0 13px;
  /* -webkit-box-shadow: 0 2px 10px -4px rgba(0,0,0,.9), 0 1px 20px -9px rgba(0,0,0,.7); */
  box-shadow: 0 2px 10px -4px rgba(0, 0, 0, 0.9),
    0 1px 20px -9px rgba(0, 0, 0, 0.7);
  z-index: 100;
}
.input .isError {
  display: block;
}
.password {
  width: 100%;
  height: 44px;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 0px 0px 6px 6px;
  margin-bottom: 0;
}

.remember {
  margin: 14px 12px 20px;
  height: 14px;
  overflow: visible;
}

.login-form .remember {
  margin: 14px 12px 20px;
  height: 14px;
  overflow: visible;
}

.common-form li {
  position: relative;
}

li {
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

.login-form .remember .auto {
  font-size: 14px;
  color: #7f7f7f;
}

.remember .auto {
  /* color: #8f8f8f; */
  /* padding-left: 30px; */
  color: #7f7f7f;
  position: relative;
  top: 0px;
  left: 0px;
}

.remember .auto .checkbox {
  left: 0;
}

.login-form .remember .auto .checkbox {
  position: absolute;
  top: -4px;
  /* left: -2px; */
}

.checkbox {
  background-position: 0 -25px;
  float: left;
}

.checkbox a {
  /* background-image: url(../assets/checkbox_f49f6e4acf.png); */
  background: url(../assets/checkbox_f49f6e4acf.png) 0px 1px no-repeat;
  background-size: 22px auto;
  width: 22px;
  height: 22px;
  color: #787878;
}

.checkbox.checked a {
  display: block;
}

span {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

.remember .registercloud {
  font-size: 14px;
  color: #7f7f7f;
  right: 68px;
  margin-left: 0;
  float: right;
  display: inline;
  position: absolute;
  top: 0px;
  right: 68px;
}

.login-form .remember .registercloud:after {
  content: "";
  display: inline-block;
  width: 1px;
  height: 11px;
  background-color: #e5e5e5;
  margin-left: 12px;
  margin-top: -2px;
  vertical-align: middle;
}

.remember .forgotpassword {
  margin-right: 0;
  font-size: 14px;
  color: #7f7f7f;
  float: right;
  position: absolute;
  right: 0;
  top: 0px;
}

.btn-wrapper {
  margin-top: 24px;
  margin: 30px 0 0;
}

.login-form .btn-wrapper {
  position: relative;
}

.btn-wrapper {
  clear: both;
}

.form-v2 .btn-wrapper .btn,
.v2 .btn-wrapper .btn {
  height: 53px;
  line-height: 53px;
}

.login-form .btn {
  width: 100%;
}

.btn.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-primary {
  /* background: #4C68B0; */
  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.8);
  /* background: -webkit-linear-gradient(#6788d0,#4364bb); */
  background: linear-gradient(#6788d0, #4364bb);
  padding: 1px;
  box-sizing: border-box;
}

.btn {
  border-radius: 6px;
  cursor: pointer;
  display: inline-block;
  height: 51px;
  line-height: 34px;
  overflow: hidden;
  text-align: center;
  width: 100%;
}

.form-v2 .btn-wrapper .btn a,
.v2 .btn-wrapper .btn a {
  font-size: 18px;
  text-shadow: 0 -1px rgba(0, 0, 0, 0.2);
  height: 51px;
  line-height: 51px;
  border-radius: 6px;
}

.btn.disabled a {
  cursor: not-allowed;
}

.btn a {
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 14px;
}

.btn-wrapper .btn a {
  font-size: 18px;
  text-shadow: 0 -1px rgba(0, 0, 0, 0.2);
  height: 51px;
  line-height: 51px;
  border-radius: 6px;
}

.info-wrapper {
  margin-top: 14px;
  padding-top: 0;
  border: 0;
  box-shadow: none;
  margin: 30px 0 0;
  text-align: center;
  font-size: 14px;
  position: relative;
}
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.info-wrapper > ul > li:first-child {
  float: left;
}
.info-wrapper li {
  color: #999;
  font-size: 12px;
  line-height: 17px;
}
.login-three {
  position: fixed;
  margin: 0 auto;
  width: 124px;
  margin-right: -62px;
  right: 50%;
  bottom: 24px;
}
.login-three li.text {
  display: none;
}
.login-three li.text {
  background-image: none;
  margin-left: 0;
  width: auto;
  /* color: #bbb; */
  font-size: 100%;
  cursor: default;
  color: #999;
}
.login-three li {
  /* background-image: url(../img/v2/m/icons_c3a3154da5.png); */
  background-size: auto 40px;
  background-position: 0 0;
  /* width: 42px; */
  height: 40px;
  float: left;
  background-repeat: no-repeat;
  transition: all 1s ease;
  margin: 0 10px;
}
.login-three li.wechat {
  display: none;
  margin-left: 10px;
}
.info-wrapper > ul > li {
  float: right;
}
.form-v2 .info-wrapper li,
.form-v2 .info-wrapper li a {
  color: #999;
  font-size: 12px;
  line-height: 17px;
}
.smartisan-icon.gt {
  margin-top: -1px;
}
.smartisan-icon {
  display: inline-block;
  font-family: SmartisanIconFont;
  vertical-align: middle;
}
.login-three li {
  background-image: url(../assets/icons_c3a3154da5.png);
  background-size: auto 40px;
  /* background-position: 0 0; */
  width: 42px;
  height: 40px;
  margin: 0 10px;
}
.login-three li.qq {
  background-position: -119px 0;
}
.login-three li.weibo {
  background-position: -59px 0;
}
.login-three li.wechat {
  display: none;
}
.login-three li.alipay {
  display: none;
}
</style>
