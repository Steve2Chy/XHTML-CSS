<!-- 1模板：html结构 -->
<template>
  <div id="app">
		<app_header v-on:msgChange="updateMsg($event)" v-bind:msg="msg"></app_header>
		<users v-bind:users="users"></users>
		<users v-bind:users="users"></users>
		<app_footer v-bind:msg="msg"></app_footer>
  </div>
</template>

<!-- 2行为：处理操作 -->
<script>

import Users from './components/Users.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
	data(){ //data:function(){
		return {
			msg:"这是传值：string number boolean",
			users : [{
				name:"陈景润",
				position:"数学家",
				show:false
			},{
				name:"华罗庚",
				position:"数学家",
				show:false
			},{
				name:"牛顿",
				position:"物理学家",
				show:false
			},{
				name:"爱因斯坦",
				position:"物理学家",
				show:false
			}]
		}
	},
	methods:{
		updateMsg(msg){
			this.msg = msg;
		}
	},
  components: {
		users : Users,
		app_header: Header,
		app_footer: Footer
  }
}
</script>

<!-- 3样式：解决样式 -->
<style scoped>
h1{
	color: cadetblue;
}
</style>
