import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // 非同步載入
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/peter',
    name: 'peter',
    meta: {
      checkUser: true
    },
    // 針對單頁的判斷， 比較少用到， 大部分用 beforeEach + meta 就可以解決
    beforeEnter: (to, from, next) => {
      if (from.path === '/about') {
        next()
      } else {
        next('/about')
      }
    },
    component: () => import(/* webpackChunkName: "peter" */ '../views/Peter.vue')
  },
  {
    path: '/nested',
    name: 'parent',
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "nestChild" */ '../views/Parent/Child.vue')
      },
      {// 要用 params 的話需先訂好名稱， query就不用
        // 決定 id 權限在 router 就先擋掉(cildMap = { 1: userRight, 2: userWrong })， 如果進模組後才擋會浪費 render 的資源
        path: 'child/:cid',
        name: 'child',
        component: () => import(/* webpackChunkName: "nestChild" */ '../views/Parent/Child.vue')
      },
      {
        path: '*',
        redirect: '/nested'
      }
    ],
    component: () => import(/* webpackChunkName: "nestChild" */ '../views/Parent/Child.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

// 對所有 router 規則做檢查， 適合做 " 很多頁都要做的事情 "， 像是可用來檢查使用者， 搭配 meta 使用
router.beforeEach((to, from, next) => {
  if (to.meta.checkUser) {
    console.log('check user')
  }
  next()
})

export default router
