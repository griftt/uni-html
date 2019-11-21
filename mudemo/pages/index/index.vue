	
<template>
	<view>
		<view class="cu-bar tabbar bg-black">
					<view class="action text-green" @click="NavChange" data-cur="main">
						<view class="cuIcon-homefill"></view> 首页
					</view>
					<view class="action text-gray" @click="NavChange" data-cur="category">
						<view class="cuIcon-similar"></view> 分类
					</view>
					<view class="action text-gray add-action" @click="NavChange" data-cur="publish">
						<button class="cu-btn cuIcon-add bg-green shadow"></button>
						发布
					</view>
					<view class="action text-gray" @click="NavChange" data-cur="near">
						<view class="cuIcon-cart">
							<view class="cu-tag badge">99</view>
						</view>
						附近
					</view>
					<view class="action text-gray" @click="NavChange" data-cur="mime">
						<view class="cuIcon-my">
							<view class="cu-tag badge"></view>
						</view>
						我的
					</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'mime',
				InputBottom: 0
			};
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
				uni.showModal({
					content: this.PageCur ,
					showCancel: false
				});
			}
		}
	}
</script>

<style>
	 view.cu-bar {
		position:relative;
		bottom: 0;
	}
</style>
