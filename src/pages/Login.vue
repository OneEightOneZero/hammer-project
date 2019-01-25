<template>
    <div>
        <xlogin/>
        <Login/>
        <Success/>
    </div>
</template>
<script>
// 引用组件
import Xlogin from '../components/Xlogin.vue'
import Login from '../components/Login.vue'
import Success from '../components/Success.vue'

export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Xlogin,
    Login,
    Success,
  },
  destroyed() {
  }
}
</script>
