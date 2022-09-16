// 导航守卫
import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 只执行不用导出

const whiteList = ['/login', '/404'] // 白名单页面
// 路由守卫
router.beforeEach(async(to, from, next) => {
  if (store.getters.token) {
    NProgress.start()
    if (to.path === '/login') {
      next('/')
    } else {
      if (!store.getters.userId) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done()
})
