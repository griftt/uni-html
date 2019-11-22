<template>
	<view class="mimeBox">
		
		
		<view class="bg-img bg-mask flex align-center" @click="ChooseImage" style="backgroundImage: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg); height: 414upx;"
	>
			<view class="padding-xxl text-white">
				<view class="padding">
					<view class="cu-avatar round lg margin-left"  v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]">
						<view class="cu-tag badge" :class="index%2==0?'cuIcon-female bg-pink':'cuIcon-male bg-blue'"></view>
					</view>
				</view>
				<view class="padding-xs text-lg">
					Only the guilty need fear me.
				</view>
			</view>
		</view>
		
		<view class="cu-card dynamic" :class="isCard?'no-card':''">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content flex-sub">
							<view>凯尔</view>
							<view class="text-gray text-sm flex justify-between">
								2019年12月3日
							</view>
						</view>
					</view>
				</view>
				<view class="text-content">
					折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！
				</view>
				<view class="grid flex-sub padding-lr" :class="isCard?'col-3 grid-square':'col-1'">
					<view class="bg-img" :class="isCard?'':'only-img'" style="background-image:url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');height: 414upx;"
					 v-for="(item,index) in isCard?9:1" :key="index">
					</view>
				</view>
				<view class="text-gray text-sm text-right padding">
					<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
					<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
					<text class="cuIcon-messagefill margin-lr-xs"></text> 30
				</view>
			</view>
		</view>
		<view class="cu-bar bot tabbar margin-bottom-xl bg-black ">
			<view class="action " @click="NavChange" data-cur="main" :class="PageCur=='main'?'text-green':'text-gray'">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<view class="action " @click="NavChange" data-cur="category" :class="PageCur=='category'?'text-green':'text-gray'">
				<view class="cuIcon-similar"></view> 分类
			</view>
			<view class="action  add-action " @click="NavChange" data-cur="submit" :class="PageCur=='submit'?'text-green':'text-gray'">
				<button class="cu-btn cuIcon-add bg-green shadow"></button>
				提交
			</view>
			<view class="action   " @click="NavChange" data-cur="Collection" :class="PageCur=='Collection'?'text-green':'text-gray'">
				<view class="cuIcon-cart">
					<view class="cu-tag badge">99</view>
				</view>
				收藏
			</view>
			<view class="action " @click="NavChange" data-cur="mime" :class="PageCur=='mime'?'text-green':'text-gray'">
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
				ColorList: this.ColorList,
				PageCur:'mime',
				"backGrouodPic":'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
				isCard: false,
				imgList: [],
				avatar: [
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
					]
	
			};
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		        console.log(option.id); //打印出上个页面传递的参数。
		    },
		methods: {
			
			
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '删除',
					content: '确定要删除吗？',
					cancelText: '留着吧',
					confirmText: '让它走',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			IsCard(e) {
				this.isCard = e.detail.value
			},
			
			
		}
	}
	
</script>

	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
<style>
</style>
