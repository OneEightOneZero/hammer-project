<template>
    <div>
        <xlogin/>
        <Login/>
    </div>
</template>
<script>
// 引用组件
import Xlogin from '../components/Xlogin.vue'
import Login from '../components/Login.vue'

export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Xlogin,
    Login
  },
  destroyed() {
  }
}
</script>
