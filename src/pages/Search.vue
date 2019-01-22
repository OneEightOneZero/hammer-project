<template>
    <div>
        <Xsearch />
        <!-- <Xbanner /> -->
    </div>
</template>
<script>
// 引用组件
import Xsearch from '../components/Xsearch.vue'
// import Xbanner from '../components/Xbanner.vue'

export default {
  components: {
    // 注册组件
    // 引用组件，在注册，然后在template使用
    Xsearch,
    // Xbanner
  }
}
</script>