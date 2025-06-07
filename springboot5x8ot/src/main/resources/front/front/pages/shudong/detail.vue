
<template>
<view>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view class="container" :style='{"minHeight":"100vh","width":"100%","padding":"80rpx 0 132rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20221112/286392d539b94f04bcf52c9a98e1d573.png) no-repeat right top,url(http://codegen.caihongy.cn/20221112/e866eac60553442587c2b20f0b4f151b.png) no-repeat right bottom,#fdfaf0","height":"auto"}'>
						<swiper :style='{"border":"4rpx dotted #f7de91","boxShadow":"0px 2rpx 8rpx #999","margin":"0 auto","borderRadius":"200rpx","background":"none","width":"calc(100% - 80rpx)","height":"360rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
				<swiper-item :style='{"width":"100%","borderRadius":"200rpx","background":"#fff","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index">
					<image :style='{"width":"100%","objectFit":"cover","borderRadius":"200rpx","display":"block","height":"360rpx"}' mode="aspectFill" v-if="swiper.substring(0,4)=='http'" :src="swiper"></image>
					<image :style='{"width":"100%","objectFit":"cover","borderRadius":"200rpx","display":"block","height":"360rpx"}' mode="aspectFill" v-else :src="baseUrl+swiper"></image>
				</swiper-item>
			</swiper>
									            <view :style='{"padding":"24rpx","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}' class="detail-content">

				<view :style='{"margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 2rpx 0","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","minWidth":"180rpx","fontWeight":"600"}' class="lable">标题：</view>
					<view :style='{"padding":"0px","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.biaoti}}</view>
				</view>


				<view :style='{"padding":"0 24rpx 0 0","margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 0px 0","display":"flex","width":"48%","borderStyle":"solid","height":"auto"}' class="detail-list-item" v-if="!thumbsupFlag&&!crazilyFlag">
					<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="lable">赞：</view>
					<view :style='{"width":"100%","flex":"1","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"color":"#333","lineHeight":"80rpx","fontSize":"28rpx"}'>{{detail.thumbsupnum}}</view>
						<view :style='{"boxShadow":"2rpx 4rpx 8rpx #ccc","color":"#333","borderRadius":"100%","textAlign":"center","background":"radial-gradient(circle, rgba(252,243,188,1) 0%, rgba(255,219,6,1) 100%)","width":"72rpx","lineHeight":"72rpx","fontSize":"36rpx","height":"72rpx"}' class="cuIcon-appreciate" @click="zan"></view>
					</view>
				</view>
				<view :style='{"padding":"0 24rpx 0 0","margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 0px 0","display":"flex","width":"48%","borderStyle":"solid","height":"auto"}' class="detail-list-item" v-if="thumbsupFlag">
					<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="lable">已赞：</view>
					<view :style='{"width":"100%","flex":"1","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"color":"#333","lineHeight":"80rpx","fontSize":"28rpx"}'>{{detail.thumbsupnum}}</view>
						<view :style='{"boxShadow":"2rpx 4rpx 8rpx #ccc","color":"#333","borderRadius":"100%","textAlign":"center","background":"radial-gradient(circle, rgba(252,243,188,1) 0%, rgba(255,219,6,1) 100%)","width":"72rpx","lineHeight":"72rpx","fontSize":"36rpx","height":"72rpx"}' class="cuIcon-appreciate" @click="zan"></view>
					</view>
				</view>
				<view :style='{"padding":"0 24rpx 0 0","margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 0px 0","display":"flex","width":"48%","borderStyle":"solid","height":"auto"}' class="detail-list-item" v-if="!thumbsupFlag&&!crazilyFlag">
					<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="lable">踩：</view>
					<view :style='{"width":"100%","flex":"1","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"color":"#333","lineHeight":"80rpx","fontSize":"28rpx"}'>{{detail.crazilynum}}</view>
						<view style="transform: rotate(180deg);" :style='{"boxShadow":"2rpx 4rpx 8rpx #ccc","color":"#333","borderRadius":"100%","textAlign":"center","background":"radial-gradient(circle, rgba(252,243,188,1) 0%, rgba(255,219,6,1) 100%)","width":"72rpx","lineHeight":"72rpx","fontSize":"36rpx","height":"72rpx"}' class="cuIcon-appreciate" @click="cai"></view>
					</view>
				</view>
				<view :style='{"padding":"0 24rpx 0 0","margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 0px 0","display":"flex","width":"48%","borderStyle":"solid","height":"auto"}' class="detail-list-item" v-if="crazilyFlag">
					<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="lable">踩：</view>
					<view :style='{"width":"100%","flex":"1","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"color":"#333","lineHeight":"80rpx","fontSize":"28rpx"}'>{{detail.crazilynum}}</view>
						<view style="transform: rotate(180deg);" :style='{"boxShadow":"2rpx 4rpx 8rpx #ccc","color":"#333","borderRadius":"100%","textAlign":"center","background":"radial-gradient(circle, rgba(252,243,188,1) 0%, rgba(255,219,6,1) 100%)","width":"72rpx","lineHeight":"72rpx","fontSize":"36rpx","height":"72rpx"}' class="cuIcon-appreciate" @click="cai"></view>
					</view>
				</view>




				<view class="detail-list-item rich" :style='{"margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 0px 0","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"width":"188rpx","padding":"0 20rpx 0 0","lineHeight":"1.5","fontSize":"28rpx","color":"#333","textAlign":"right"}'>内容</view>
					<view class="rich-text" :style='{"minHeight":"240rpx","border":"2rpx solid #f7de91","padding":"20rpx","boxShadow":"0 4rpx 8rpx rgba(182,158,18,.4),inset 0px 0px 64rpx 0px #fcf6d6","margin":"0","borderRadius":"8rpx","background":"#fff","width":"calc(100% - 8rpx)","lineHeight":"1.5"}'>
						<rich-text :nodes="detail.neirong"></rich-text>
					</view>
				</view>



				<view class="bottom-content bg-white tabbar border shop" :style='{"width":"100%","padding":"10rpx 24rpx","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>

				</view>
			</view>

		</view>
	</view>
</mescroll-uni>
</view>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				id: '',
                userid: '',
				detail: {},
				swiperList: [],
				commentList: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				user: {},
				thumbsupFlag: 0,
				crazilyFlag: 0,
				count: 0,
				timer: null
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {
			this.id = options.id;
            if(options.userid) {
                this.userid = options.userid;
            }
			// 渲染数据
			this.init();
		},
        onUnload() {
            if(this.timer) {
                clearInterval(this.timer);
            }
        },
		async onShow(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
			this.getThumbsup();
		},
		destroyed: function() {
			//window.clearInterval(this.inter);
		},
		methods: {
			// 支付
			onPayTap(){
				uni.setStorageSync('paytable','shudong');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
            onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
                this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
            },
			// 跨表
			onAcrossTap(tableName,crossOptAudit,statusColumnName,tips,statusColumnValue){
				uni.setStorageSync('crossTable','shudong');
				uni.setStorageSync(`crossObj`, this.detail);
				uni.setStorageSync(`statusColumnName`, statusColumnName);
				uni.setStorageSync(`statusColumnValue`, statusColumnValue);
				uni.setStorageSync(`tips`, tips);
				if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
					var obj = uni.getStorageSync('crossObj');
					for (var o in obj){
						if(o==statusColumnName && obj[o]==statusColumnValue){
							this.$utils.msg(tips);
							return
						}
					}
				}
				this.$utils.jump(`../${tableName}/add-or-update?cross=true`);
			},
			// 获取详情
			async init(){
                if(this.timer) {
                    clearInterval(this.timer);
                }
				let res = await this.$api.info('shudong', this.id);
				this.detail = res.data;
				// 轮播图片
				this.swiperList = this.detail.fengmian ? this.detail.fengmian.split(",") : [];
				//修改富文本的图片样式
				this.detail.neirong = this.detail.neirong.replace(/img src/gi,"img style=\"width:100%;\" src");
			},

			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},

			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				mescroll.resetUpScroll()
			},

			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				mescroll.endSuccess(mescroll.size, this.hasNext);

            },



			onChatTap() {
				this.$utils.jump('../chat/chat')
			},
			// 下载
			download(url){
				let _this = this;
				url=_this.$base.url +  url;
				uni.downloadFile({
					url: url,
					success: (res) => {
						if (res.statusCode === 200) {
							_this.$utils.msg('下载成功');
							 window.open(url);
						}
					}
				});
			},
			//
			onCartTabTap() {
				this.$utils.tab('../shop-cart/shop-cart')
			},
			// 添加评论
			async onCommentTap() {
				this.$utils.jump(`../discussshudong/add-or-update?refid=${this.id}`)
			},
			// 获取赞踩
			async getThumbsup() {
				let params = {
					page: 1,
					limit: 1,
					refid: this.id,
					tablename: 'shudong',
					userid: this.user.id,
					type: '%2%',
				}
				let res = await this.$api.list(`storeup`, params);
				if (res.data.list.length > 0) {
					if(res.data.list[0].type=='21') {
						this.thumbsupFlag = 1;
					} else {
						this.crazilyFlag = 1;
					}
				}

			},
			// 点赞
			async zan() {
				let _this = this;
				let params = {
					page: 1,
					limit: 1,
					refid: _this.detail.id,
					tablename : 'shudong',
					userid: _this.user.id,
					type: '%2%',
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length > 0) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消点赞',
						success: async function(res) {
							if (res.confirm) {
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.detail.thumbsupnum = parseInt(_this.detail.thumbsupnum) - 1;
								await _this.$api.update('shudong', _this.detail);
								_this.$utils.msg('取消成功');
								_this.thumbsupFlag=0;
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否点赞',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
                                name: _this.detail.biaoti,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'shudong',
								type: '21'
							});
							_this.detail.thumbsupnum = parseInt(_this.detail.thumbsupnum) + 1;
							await _this.$api.update('shudong', _this.detail);
							_this.$utils.msg('点赞成功');
							_this.thumbsupFlag=1;
						}
					}
				});
			},
			// 踩
			async cai() {
				let _this = this;
				let params = {
					page: 1,
					limit: 1,
					refid: _this.detail.id,
					tablename: 'shudong',
					userid: _this.user.id,
					type: '%2%',
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length > 0) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消点踩',
						success: async function(res) {
							if (res.confirm) {
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.detail.crazilynum = parseInt(_this.detail.crazilynum) - 1;
								await _this.$api.update('shudong', _this.detail);
								_this.$utils.msg('取消成功');
								_this.crazilyFlag=0;
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否点踩',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
                                name: _this.detail.biaoti,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'shudong',
								type: '22'
							});
							_this.detail.crazilynum = parseInt(_this.detail.crazilynum) + 1;
							await _this.$api.update('shudong', _this.detail);
							_this.$utils.msg('点踩成功');
							_this.crazilyFlag=1;
						}
					}
				});
			},
			onSHTap() {
				this.$refs.popup.open()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.seat-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #FFFFFF;
		margin: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		font-size: 30upx;
		.seat-item {
			width: 33.33%;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;
	
			.seat-icon {
				width: 50upx;
				height: 50upx;
				margin-bottom: 10upx;
			}
		}
	}
	
	audio {
		display: flex;
		flex-direction: column;
	}
	
	.audio /deep/ .uni-audio-default {
		width: inherit;
	}
</style>
