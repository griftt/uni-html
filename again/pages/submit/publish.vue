<template>
	<view>
	<cu-custom bgColor="bg-gradual-pink" :isBack="true">
		<block slot="backText">返回</block>
		<block slot="content">故事</block>
	</cu-custom>
	<view class="cu-form-group margin-top">
		<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="分享你刚编的故事"></textarea>
	</view>
	<view class="cu-bar bg-white margin-top">
		<view class="action">
			看我
		</view>
		<view class="action">
			{{imgList.length}}/4
		</view>
	</view>
	<view class="cu-form-group">
		<view class="grid col-4 grid-square flex-sub">
			<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
			 <image :src="imgList[index]" mode="aspectFill"></image>
				<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
					<text class='cuIcon-close'></text>
				</view>
			</view>
			<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
				<text class='cuIcon-cameraadd'></text>
			</view>
		</view>
	</view>
	<button class="cu-btn round bg-green shadow bot"> <text class="lg text-white" :class="'cuIcon-share'"></text>发布</button>
	
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				modalName: null,
				ColorList: this.ColorList,
				PageCur:'submit',
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
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			}
			
		}
	}
</script>

<style>
</style>
