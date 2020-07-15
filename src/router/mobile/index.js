import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/framework/mobile/page/home'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

/**
 * 验证
 */
router.beforeEach((to, from, next) => {
  if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = '/Pindex.html#/guangdong'
    return
  }
  next()
})

export default router
