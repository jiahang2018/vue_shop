import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/users/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'
import Calte from '../components/goods/Calte.vue'
import Params from '../components/goods/Params.vue'
import List from '../components/goods/List.vue'
import Add from '../components/goods/Add.vue'
import Orders from '../components/order/Order.vue'
import Report from '../components/report/Report.vue'

Vue.use(VueRouter)
Vue.use(Rights)



const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          name: 'Welcome',
          component: Welcome,
        },
        {
          path: '/users',
          name: 'Users',
          component: Users,
        },
        {
          path: '/rights',
          name: 'Rights',
          component: Rights,
        },
        {
          path: '/roles',
          name: 'Roles',
          component: Roles,
        },
        {
          path: '/categories',
          name: 'Calte',
          component: Calte,
        }
        , {
          path: '/params',
          name: 'Params',
          component: Params,
        },
        {
          path: '/goods',
          name: 'List',
          component: List,
        },
        {
          path: '/goods/add',
          name: 'Add',
          component: Add,
        },
        {
          path: '/orders',
          name: 'Orders',
          component: Orders,
        },
        {
          path: '/reports',
          name: 'Report',
          component: Report,
        }

      ]
    }
  ]
})
//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path == '/login') return next()
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()

})
export default router

