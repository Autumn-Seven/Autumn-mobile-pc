<template>
  <div>
    <!-- 页头 -->
    <header-view></header-view>
    <!-- 内容 -->
    <router-view/>
    <!-- 页脚 -->
    <footer-view></footer-view>
  </div>
</template>

<script>

import headerView from "./header";
import footerView from "./footer";
export default {
  components:{
    headerView,
    footerView
  },
  data () {
    return {

    }
  },
  methods: {
    go () {
      this.$router.push({ path: '/secondPage' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
