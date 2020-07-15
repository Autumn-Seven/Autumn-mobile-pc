import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/pc/HelloWorld'
import SecondPage from '@/components/pc/secondPage'
// import Home from '@/components/pc/Home'
import Home from '@pc/layout/index'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:"/guangdong",
      children:[
            {
              path: '/guangdong',  
              component: () => import('@pc/page/guangdong')
            }
      ]
    },
    {
      path: '/secondPage',
      name: 'secondPage',
      component: SecondPage
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

/**
 * 判断是否为移动设备，是，则跳转到移动端的路径
 */
router.beforeEach((to, from, next) => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = '/Mindex.html#/'
    return
  }
  next()
})

export default router
