<template>
	<footer>
		<p>{{copyright}}</p>
		<p>{{msg}}</p>
	</footer>
</template>

<script>
export default {
  name: 'app_footer',
  props:{
	  msg:{
		type:String
	  }
  },
  data () {
    return {
		copyright:"Copyright 2018 Vue Demo"
    }
  }
}
</script>

<style scoped>
	footer{
		background: #333;
		padding: 10px;
	}
	footer p{
		color: lightgreen;
		text-align: center;
	}
</style>
