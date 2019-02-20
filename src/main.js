// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'

//import Users from './components/Users.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

// 配置路由
const router = new VueRouter({
	routes:[
		{path:"/",component:Home},
		{path:"/helloworld",component:HelloWorld}
	],
	mode:'history'
})
// 全局注册组件
//Vue.compile("users",Users);

/* eslint-disable no-new */
new Vue({
	router,
	el: '#app',
	template: '<App/>',
	components: { App }
})
//访问模式
// index.html -> main.js -> App.vue