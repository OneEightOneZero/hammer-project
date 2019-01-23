//头部结构
<template>
  <div class="box">
    <form action="#">
      <ul class="boxUl">
        <li>
          <span class="cr">国家和地区</span>
          <span
            role="button"
            class="country ng-binding"
            title="中国"
            ng-click="showList($event)"
            ng-bind="country"
          >中国</span>
        </li>
        <li>
            <span class="phone">+86</span>
            <input class="numbery" type="text" placeholder="手机号">
        </li>
        <li>
            <input type="text" placeholder="短信验证码" class="yzm">
            <button class="getm">获取验证码</button>
        </li>
        <li>
            <input type="password" placeholder="密码" class="numbery">
        </li>
        <li>
            <input type="password" placeholder="确认密码" class="numbery">
        </li>
        <li>
            <button class="sign">点击查看协议</button>
        </li>
        <li>
            <button class="sign">同意协议并注册</button>
        </li>
      </ul>
    </form>
    <div class="login" style="padding-left:80px;
    box-sizing: border-box;">
        <span style="login_go">我已经有账号了：<a style="#58bc58" href="javascript:;">跳往登录页</a></span>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.login{
    /* position: absolute; */
    bottom:0px;
    left:0px;
    width: 100%;
    height: 80px;
    background: #ccc;
    z-index: 999;
}
.box {
  height: 100%;
  padding-top: 50px;
}
.box .boxUl {
  list-style: none;
  padding: 8% 5%;
  background: #ccc;
  height: 100%;
}
.box .boxUl li {
  background: #fff;
  font-size: 20px;
  line-height: 50px;
  padding-top: 5px;
  width: 100%;
  height: 50px;
  margin-bottom: 17px;
  border-radius: 5px;
}
.box .boxUl li .cr {
  color: rgb(95, 93, 93);
  padding-left: 10px;
}
.box .boxUl li .ng-binding {
  display: block;
  height: 50px;
  width: 10%;
  color: rgb(95, 93, 93);
  font-size: 14px;
  float: right;
  padding-right: 20px;
}
.box .boxUl li .phone{
  color: rgb(95, 93, 93);
  padding-left: 10px;

}
.box .boxUl li .numbery{
    border: 1px solid #fff;
    height: 45px;
    width: 40%;
    padding-left:5px;
    margin-top:-5px;
}
.box .boxUl li .yzm{
    border: 1px solid #fff;
    height: 45px;
    width: 40%;
    padding-left:5px;
    margin-top:-5px;
}
.box .boxUl li .getm{
    border: 1px solid #fff;
    height: 45px;
    padding-left:5px;
    width: 33%;
    font-size: 18px;
    float: right;
    border-radius: 5px;
}
.box .boxUl li .sign{
    width: 100%;
    height: 56px;
    position: relative;
    top: -5px;
}
</style>
