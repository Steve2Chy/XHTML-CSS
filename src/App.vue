<!-- 1模板：html结构 -->
<template>
  <div id="app">
		<ul>
			<!-- <li><a href="/">Home</a></li>
			<li><a href="/helloworld">Hello</a></li> -->
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/helloworld">Hello</router-link></li>
		</ul>
		<router-view></router-view>
  </div>
</template>

<!-- 2行为：处理操作 -->
<script>


export default {
  name: 'app',
	data(){ //data:function(){
		return {
			
		}
	}
}
</script>

<!-- 3样式：解决样式 -->
<style scoped>
h1{
	color: cadetblue;
}
</style>
