<template>
	<view class="content">
		<view class="todo-header">
			<!-- 状态栏的左侧 -->
			<view class="header-left">
				<text class="active-text">全部</text>
				<text>10条</text>
			</view>
			<!-- 状态栏的右侧 -->
			<view class="header-right">
				<text class="header-right-item active-tab">全部</text>
				<text class="header-right-item">待办</text>
				<text class="header-right-item">已完成</text>
			</view>
		</view>
		<view class="todo-content" v-for="item in list" :key="index">
			<!-- 列表项 -->
			<view class="todo-list todo-finish">
				<view class="todo-list-checkbox">
					<view class="checkbox"></view>
				</view>
				<view class="todo-list-content">{{item.content}}</view>
			</view>
			
		</view>
		<!-- 创建按钮 -->
		<view class="create-todo" @click="create">
			<text class="iconfont icon-jia" :class="{'create-todo-active':textShow}"></text>
		</view>
		<!-- 输入框 -->
		<view v-if="active" class="create-content" :class="{'create--show':textShow}">
			<view class="create-content-box">
				<!-- input 输入 -->
				<view class="create-input">
					<input type="text" v-model="value" placeholder="请输入您要创建的todo" />
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
			return{
				list: [
					{
						content: "test1"
					},
					{
						content: "test2"
					}
				]
			}
		}
	}
</script>

<style>
	@import '../../common/icon.css';
	
	.todo-header{
		display: flex;
		padding: 15px;
		height: 45px;
		align-items: center;
		color: #333;
		font-size: 12px;
		box-sizing: border-box;
		box-shadow: -1px 1px 5px 0 rgba(0, 0, 0, 0.1);
	}
	.header-left{
		width: 100%;
	}
	.header-right{
		flex-shrink: 0;
	}
	.header-right-item{
		padding: 0 5px;
	}
	
	.active-tab{
		color: #279ABF;
	}
	.active-text{
		font-size: 14px;
		color: #279ABF;
		padding-right: 5px;
	}
	/* 列表项的样式 */
	.todo-content{
		position: relative;
	}
	.todo-list{
		display: flex;
		align-items: center;
		position: relative;
		padding: 15px;
		margin: 15px;
		font-size: 12px;
		box-shadow: -1px 1px 5px 1 rgba(0, 0, 0, 0.1),-1px 2px 1px 0 rgba(255, 255, 255) inset;
		border-radius: 10px;
		/* color: #fff; */
		background-color: #cfebfd;
		overflow: hidden;
	}
	/* 列表项的样式 */
	.todo-list::after{
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 5px;
		background-color: #91d1e8;
	}
	.todo-list-checkbox{
		padding-right: 15px;
	}
	.checkbox{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #fff;
		box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
	}
	
	.todo-finish .checkbox{
		background-color: #eee;
		position: relative;
	}
	.todo-finish .checkbox::after{
		position: absolute;
		content: "";
		width: 10px;
		height: 10px;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		margin: auto;
		box-shadow: 0 0 2px 0 rgba(0,0,0,0.2) inset;
		background-color: #CFEBFD;
		border-radius: 50%;
	}
	.todo-finish .todo-list-content{
		color: #999;
	}
	/* 删除线 */
	.todo-finish.todo-list::before{
		position: absolute;
		content: "";
		top: 0;
		bottom: 0;
		left: 40px;
		right: 10px;
		height: 2px;
		margin: auto 0;
		background: #BDCBB8;
	}
	..todo-finish.todo-list::after{
		color: #ccc;
	}
	
	/* 创建按钮 */
	.create-todo {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 20px;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: #deeff5;
		box-shadow: -1px 1px 5px 2px rgba(0, 0, 0, 0.1), -1px 1px 1px 0 rgba(255, 255, 255) inset;
	}
	
	.icon-jia {
		font-size: 30px;
		color: #add8e6;
	}
	
	.create-content {
		position: fixed;
		bottom: 95px;
		left: 20px;
		right: 20px;
		transition: all 0.3s;
		opacity: 0;
		transform: scale(0) translateY(200%)
	}
	
	.create--show {
		opacity: 1;
		transform: scale(1) translateY(0);
	}
	
	.create-content-box {
		display: flex;
		align-items: center;
		padding: 0 15px;
		padding-right: 0;
		border-radius: 50px;
		background: #DEEFF5;
		box-shadow: -1px 1px 5px 2px rgba(0, 0, 0, 0.1), -1px 1px 1px 0 rgba(255, 255, 255) inset;
		z-index: 2;
	}
	
	.create-input {
		width: 100%;
		padding-right: 15px;
		color: #add8e6;
	}
	
	.create-button {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		width: 80px;
		height: 50px;
		border-radius: 50px;
		font-size: 16px;
		color: #88d4ec;
		box-shadow: -2px 0px 2px 1px rgba(0, 0, 0, 0.1);
	}
	
	.create-content:after {
		content: '';
		position: absolute;
		right: 0;
		left: 0;
		bottom: -8px;
		margin: 0 auto;
		width: 20px;
		height: 20px;
		background: #DEEFF5;
		transform: rotate(45deg);
		box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.1);
		z-index: -1;
	}
	
	.create-content-box:after {
		content: '';
		position: absolute;
		right: 0;
		left: 0;
		bottom: -8px;
		margin: 0 auto;
		width: 20px;
		height: 20px;
		background: #DEEFF5;
		transform: rotate(45deg);
	}
	
	.default {
		padding-top: 100px;
	}
	
	.image-default {
		display: flex;
		justify-content: center;
	}
	
	.image-default image {
		width: 100%;
	}
	
	.default-info {
		text-align: center;
		font-size: 14px;
		color: #CCCCCC;
	}
	
	.icon-jia {
		transition: transform 0.3s;
	}
	
	.create-todo-active {
		transform: rotate(135deg);
	}
</style>
