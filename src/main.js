import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import { Row , Button } from 'element-ui';
import router from './router'
import store from './store'
import './api/mock'
import Cookie from 'js-cookie'
Vue.config.productionTip = false

//  按需引入组件
// Vue.use(Row)
// Vue.use(Button)
Vue.use(ElementUI)

//添加全局前置导航守卫
router.beforeEach((to ,from, next) => {
  //判断token是否存在
  const token = Cookie.get('token')
  //token 不存在，说明当前用户是未登录，应该跳转到login 界面
  if(!token && to.name !== 'login' ){
    next({ name: 'login'})
  } else if(token && to.name=== 'login'){ //token 存在，说明用户存在，此时跳转到首页
    next({ name:'home' })
  }else{
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')




