<template>
	<header>
		<h1 v-on:click="changeMsg">{{title}}{{msg}}</h1>
	</header>
</template>

<script>
export default {
  name: 'app_header',
  props:{
  	msg:{
  		type:String
  	}
  },
  data () {
    return {
		title:"Vue.js 学习小Demo"
    }
  },
  methods:{
	  changeMsg:function(){
		  //this.msg = "值变了";
		  this.$emit("msgChange","子向父组件传值");
	  }
  },
  beforeCreate:function(){
  	alert("组件实例化之前执行的函数");
  },
  created:function(){
  	alert("组件实例化完毕，但页面还未显示");
  },
  beforeMount:function(){
  	alert("组件挂载前，页面仍未展示，但虚拟Dom已经配置");
  },
  mounted:function(){
	alert("组件挂载后，此方法执行后，页面显示");
  },
  beforeUpdate:function(){
	alert("组件更新前，页面仍未更新，但虚拟Dom已经配置");
  },
  updated:function(){
	alert("组件更新后，此方法执行后，页面更新");
  },
  beforeDestroy:function(){
	alert("组件销毁前");
  },
  destroyed:function(){
	alert("组件销毁");
  }
}
</script>

<style scoped>
	header{
		background: lightgreen;
		padding: 10px;
	}
	header h1{
		color: #333;
		text-align: center;
	}
</style>
