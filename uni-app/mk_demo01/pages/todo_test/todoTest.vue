<template>
	<view class="content">
		<!-- 头部 -->
		<view class="todo-header" v-if="list.length !== 0">
			<view class="todo-header-left">
				<text class="active-text">{{text}}</text>
				<text>{{dateList.length}}条</text>
			</view>
			<view class="todo-header-right">
				<view class="todo-header-right-item" @click="tab(1)" :class="{'active-tab': tabIndex === 1}">全部</view>
				<view class="todo-header-right-item" @click="tab(2)" :class="{'active-tab': tabIndex === 2}">待办</view>
				<view class="todo-header-right-item" @click="tab(3)" :class="{'active-tab': tabIndex === 3}">已完成</view>
			</view>
		</view>
		<!-- 内容列表部分 -->
		<view class="todo-content" v-if="list.length !== 0">
			<view class="todo-list" v-for="(item, index) in dateList" :key="index" @click="finish(item.id)" :class="{'todo-finish': item.checked}">
				<view class="todo-list_checkbox">
					<view class="checkbox"></view>
				</view>
				<view class="todo-list_content">{{item.content}}</view>
			</view>
		</view>
		<!-- 缺省页面 -->
		<view  class="default" v-else>
			<view class="default-image">
				<image src="../../static/default.png" mode="aspectFit"></image>
			</view>
			<view class="default-text">
				<view class="default-text_item">您还没有创建待办事项</view>
				<view class="default-text_item">点击下面+号创建一个吧</view>
			</view>
		</view>
		<!-- 创建按钮 -->
		<view class="create-todo" @click="create">
			<view class="iconfont icon-jia"  :class="{'create-todo-active': textShow}"></view>
		</view>
		<!-- 输入框 -->
		<view class="create-content" v-if="active" :class="{'create-show': textShow}">
			<view class="create-content-box">
				<!-- input框 -->
				<view class="create-input">
					<input type="text" placeholder="请输入你想输入的内容" v-model="value">
				</view>
				<!-- 发布按钮 -->
				<view class="create-button" @click="add">
					创建
				</view>
			</view>
		</view>
	</view>
</template>

<script>
		
	export default{
			
		data() {
			return {
				list: [
					
				],
				value: '',
				active: false,
				textShow: false,
				tabIndex: 1,
				text: ''
			}
		},
		computed:{
			dateList() {
				let list = JSON.parse(JSON.stringify(this.list))
				let newList = []
				if(this.tabIndex === 1) {
					this.text = "全部";
					return list
				}
				if(this.tabIndex === 2) {
					this.text = "待办"
					list.forEach((item) => {
						if(!item.checked) {
							newList.unshift(item)
						}
					})
					return newList
				}
				if(this.tabIndex === 3) {
					this.text = "已完成"
					list.forEach((item) => {
						if(item.checked) {
							newList.unshift(item)
						}
					})
					return newList
				}
			}
		},
		methods:{
			create() {
				if(!this.active) {
					this.open()
				}else{
					this.close()
				}
			},	
			// 打开动画
			open() {
				this.active = true;
				this.$nextTick(() => {
					setTimeout(() => {
						this.textShow = true
					}, 50)
				})
			},
			// 关闭动画
			close() {
				this.textShow = false;
				this.$nextTick(() => {
					setTimeout(() => {
						this.active = false
					}, 350)
				})
			},
			add() {
				this.list.unshift({
					content: this.value,
					id: new Date().getTime(),
					checked: false
				})
				this.value = ''
				this.close()
			},
			finish(id) {
				console.log(id)
				let index = this.list.findIndex((item, index) => item.id === id)
				this.list[index].checked = !this.list[index].checked
			},
			tab(index) {
				this.tabIndex = index
			}
		}
	}
</script>

<style>
	/* 引入字体图标 */
	@import '../../common/icon.css';
	
	.todo-header{
		height: 90rpx;
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		font-size: 28rpx;
		box-sizing: border-box;
		box-shadow: -1px 1px 5px 0 rgba(0, 0, 0, 0.1);
		background: #FFFFFF;
		
	}
	.todo-header-left{
		width: 100%;
	}
	.todo-header-right{
		flex-shrink: 0;
		display: flex;
		
	}
	.todo-header-right-item{
		padding: 0 10rpx;
	}
	/* 全部选中样式 */
	.active-text{
		font-size: 30rpx;
		color: #279abf;
		margin-right: 10rpx;
	}
	/* 头部右栏tab选中样式*/
	.active-tab{
		color: #279abf;
	}
	
	/* 列表内容 */
	.todo-content{
		position: relative;
	}
	.todo-list{
		position: relative;
		display: flex;
		align-items: center;
		margin: 30rpx;
		padding: 30rpx;
		box-shadow: 2rpx 2rpx 10rpx 2rpx rgba(0, 0, 0, 0.1), -1px 2px 1px 0 rgba(255, 255, 255) inset;
		font-size: 28rpx;
		color: #0c3854;
		background-color: #cfebfd;
		border-radius: 20rpx;
		
		overflow: hidden;
	}
	/* 列表左侧的竖条 */
	.todo-list:after{
		display: block;
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 10rpx;
		background: #91d1e8;
	}
	
	/* 列表内的圆 */
	.todo-list_checkbox{
		padding-right: 30rpx;
	}
	
	.checkbox{
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		background-color: #FFF;
		box-shadow: 0 0 10rpx 4rpx rgba(0, 0, 0, 0.1);
	}
	
	/* 完成情况下的选中球 */
	.todo-finish .checkbox{
		position: relative;
		background: #eee;
	}
	.todo-finish .checkbox:after{
		position: absolute;
		content: '';
		width: 20rpx;
		height: 20rpx;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		border-radius: 50%;
		background: #CFEBFD;
		box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.2) inset;
	}
	/* 完成情况下的内容 文字颜色和中划线 */
		
	.todo-finish .todo-list_content{
		color: #999999;
	}
		
	.todo-finish.todo-list::before{
		position: absolute;
		content: '';
		top: 0;
		bottom: 0;
		left: 80rpx;
		right: 20rpx;
		height: 4rpx;
		margin: auto 0;
		background-color: #bdcdd8;
		/* z-index: 1; */
	}
	/* 完成情况下的左竖线颜色 */
	.todo-finish.todo-list:after {
		background: #cccccc;
	}
	
	/* 创建按钮 */
	.create-todo{
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 40rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		background-color:#deeff5;
		box-shadow: -2rpx 2rpx 10rpx 4rpx rgba(0, 0, 0, 0.2), 
					-2rpx 2rpx 2rpx 0 rgba(255, 255, 255) inset;
	}
		
	.icon-jia{
		font-size: 60rpx;
		color: #add8e6;
	}
	/* 创建内容 */
		
	.create-content{
		position: fixed;
		bottom: 190rpx;
		left: 40rpx;
		right: 40rpx;
		transition: all 0.3s;
		opacity: 0;
		transform: scale(0) translateY(200%);
	}
	.create-show{
		opacity: 1;
		transform: scale(1) translateY(0);
	}
	
	.create-content-box{
		display: flex;
		align-items: center;
		padding-left: 30rpx;
		padding-left: 30rpx;
		border-radius: 100rpx;
		box-shadow: -2rpx 2rpx 10rpx 4rpx rgba(0, 0, 0, 0.1), -2rpx 2rpx 2rpx 0 rgba(255, 255, 255) inset;
		background-color:#deeff5;
		z-index: 2;
	}
	
	.create-input{
		width: 100%;
		padding-right: 30rpx;
		color: #ADD8E6;
	}
	/* 右边的创建按钮 */
	.create-button{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		height: 100rpx;
		width: 160rpx;
		border-radius: 50rpx;
		font-size: 32rpx;
		color: #88d4ec;
		box-shadow: -2rpx 0 4rpx 2rpx rgba(0, 0, 0, 0.1);
	}
	/* 内容中间下箭头 */
	.create-content::after{
		position: absolute;
		content: '';
		width: 40rpx;
		height: 40rpx;
		right: 0;
		left: 0;
		bottom: -16rpx;
		margin: 0 auto;
		background-color:#deeff5;
		transform: rotate(45deg);
		box-shadow: 2rpx 2rpx 10rpx 4rpx rgba(0, 0, 0, 0.1);
		z-index: -1;
	}
	/* create-content-box覆盖 */
	.create-content-box::after{
		position: absolute;
		content: '';
		width: 40rpx;
		height: 40rpx;
		right: 0;
		left: 0;
		bottom: -16rpx;
		margin: 0 auto;
		background-color:#deeff5;
		transform: rotate(45deg);
	}
	/* 缺省页面 */
	.default{
		padding-top: 200rpx;
	}
	.default-image{
		display: flex;
		justify-content: center;
	}
	
	.default-text{
		text-align: center;
		color: #CCC;
		font-size: 32rpx;
	}
	
	/* 底部动画 */
	.icon-jia {
		transition: transform 0.3s;
	}
	.create-todo-active{
		transform: rotate(135deg);
	}
</style>