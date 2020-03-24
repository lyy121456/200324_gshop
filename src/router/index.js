/*路由器对象模块*/
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login/Login.vue'
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

/*声明使用插件*/
Vue.use(Router)

export default new Router({
	/*所有路由*/
  routes: [
    {
      path: '/login',
	  component:Login
    },
    {
      path: '/msite',
	  component:Msite,
	  meta:{
		  showFooter:true
	  }
    },
    {
      path: '/order',
	  component:Order,
	  meta:{
		  showFooter:true
	  }
    },
    {
      path: '/profile',
	  component:Profile,
	  meta:{
		  showFooter:true
	  }
    },
    {
      path: '/search',
	  component:Search,
	  meta:{
		  showFooter:true
	  }
    },
	{
	  path:'/',
	  redirect:'/msite'
	}
  ]
})
