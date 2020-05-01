<template>
	<view>
		<view>{{childTitle}}</view>
		<button @click="handleClick">弹出属性值</button>
	</view>
</template>

<script>
	export default{
		data() {
			return{}
		},
		props: {				
			childTitle: {				
				type:String,
				default:''
			}
		},
		methods:{
			handleClick() {
				this.$emit("toParent", this.childTitle)
			}
		}
	}
</script>

<style>
</style>
