import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/users/Users.vue'

Vue.use(VueRouter)



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

