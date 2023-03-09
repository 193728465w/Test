import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
Vue.use(VueRouter)

//1.创建路由组件


//2.将组件与路由进行映射

const routes = [
  {
    path: '/',
    component: Main,
    redicrect :'/home',
    children: [
      { 
        path: '/home',
        component: Home
      },
      { 
        path: '/user',
        component: User
      },
      { 
        path: '/mall',
        component: Mall
      },
      {
        path:'/PageOne',
        component: PageOne
      },
      {
        path: 'PageTwo',
        component: PageTwo
      }
    ]
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router

