<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area" :class="{'font': font}" :style="{'width':'200rpx'}">
			<text class="title">{{title}}</text>
		</view>
		<view>
			<button type="default" size="default" @click="handleClick('hello', $event , 'you',)">点我</button>
		</view>
		<list childTitle="子标题" @toParent="reciveChild"></list>
		
		<view>父组件收到的值：{{recive}}</view>
	</view>
</template>

<script>
	/*
	样式： 1.静态 2.数组 3.对象
	style： 1.静态 2数组 3.对象
	*/
   import list from '@/components/list/list.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				content: 'myClass',
				background: 'myBackground',
				font: true,
				recive: ''
			}
		},
		components:{
			list
		},
		onLoad() {

		},
		methods: {
			handleClick(e, a, b) {
				console.log(e + b)
				console.log(a)
			},
			reciveChild(e) {
				console.log(e)
				this.recive = e
			}
		}
	}
</script>

<style>
	.font{
		display: none;
	}
	.myBackground{
		color: #fff;
	}
	.myClass{
		background-color: red;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
