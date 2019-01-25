// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
import Vue from "vue";
import Vuex from "vuex"; //var Vuex = require('vuex')
Vue.use(Vuex);
// 引入路由模块
import router from "./configs/router.js";
import store from "./configs/store.js";
// 微信样式
import "weui";

// 全局样式
import "./styles/app.css";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"; //全局更改

// 引入ajax库
import axios from "axios";
import qs from 'qs';
// 引入jQuery库
import $ from "jquery";

// 把库挂载到原型链
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.prototype.$ = $;

Vue.config.productionTip = false;

// Root容器
new Vue({
  el: "#app",
  // 挂载路由
  router,
  store,
  // 把Ap,p组件挂载到#app的这个节点上
  render: h => h("router-view")
});
// .$mount('#app')
