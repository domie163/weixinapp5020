<template>
<view class="content">
	<view :style='{"width":"100%","padding":"0 0 40rpx","background":"#f6f6f6","height":"auto"}'>
		<swiper :style='{"width":"100%","background":"#fff","height":"360rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
			<swiper-item :style='{"width":"100%","background":"#fff","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"width":"100%","objectFit":"cover","display":"block","height":"360rpx"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"width":"100%","padding":"0 8rpx","lineHeight":"60rpx","fontSize":"28rpx","color":"#333","background":"#fff"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>


		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"0 0 40rpx","margin":"0","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221114/39bc0516d1cb44be86e3bb9327b8a815.jpg) no-repeat center center","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
            <block v-for="item in menuList" v-bind:key="item.roleName">
                <block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"width":"23%","padding":"12rpx 0","margin":"10rpx 0","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2('../'+child.tableName+'/list')">
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"0","margin":"0px auto","color":"#333","borderRadius":"100%","background":"none","display":"block","width":"64rpx","lineHeight":"64rpx","fontSize":"64rpx","height":"64rpx"}'></view>
                                <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#333","textAlign":"center","width":"100%","lineHeight":"28rpx","fontSize":"28rpx"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
		<!-- menu -->
		
		
		<!-- 新闻资讯 -->
		<!-- 新闻资讯 -->
		

		<!-- 商品推荐 -->
		<view class="listBox recommend">
			<view v-if="false && 1 == 1" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"width":"100%","padding":"0px","boxShadow":"0px 4rpx 4rpx rgba(0,0,0,.1)","margin":"0","background":"#fff"}'>
				<view :style='{"padding":"0 48rpx","boxShadow":"0px 8rpx 2rpx rgba(0,0,0,.2)","color":"#333","borderRadius":"0 0 64rpx 0","background":"radial-gradient(circle, rgba(255,239,146,1) 0%, rgba(255,219,6,1) 100%),rgb(255,239,146)","display":"inline-block","width":"auto","fontSize":"32rpx","lineHeight":"80rpx","height":"80rpx"}'>互帮互助推荐</view>
			</view>
			
			<view v-if="false && 1 == 2" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<!-- 样式1 -->
			<view class="list-box style1" :style='{"padding":"0px","boxShadow":"0 0px 0px rgba(0,0,0,.1)","margin":"40rpx 24rpx","borderRadius":"24rpx","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 48rpx)","justifyContent":"space-between","height":"auto"}'>
				<view @tap="onDetailTap('hubanghuzhu',product.id)" v-for="(product,index) in hubanghuzhulist" :key="index" class="list-item" :style='{"border":"2rpx solid #f7de91","boxShadow":"0 4rpx 8rpx rgba(182,158,18,.4),inset 0px 0px 64rpx 0px #ffef92","padding":"0px 0 24rpx 0","margin":"0 0 40rpx","backgroundColor":"#fff","borderRadius":"24rpx","textAlign":"center","flexWrap":"wrap","display":"flex","width":"48%","position":"relative","height":"auto"}'>
					<view :style='{"padding":"4rpx 20rpx","margin":"0 auto","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","background":"none","width":"96%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis","order":"2"}' class="list-item-title ">标题:{{product.biaoti}}</view>
					<view :style='{"padding":"4rpx 20rpx","margin":"0 auto","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","background":"none","width":"96%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis","order":"2"}' class="list-item-title ">发布类型:{{product.fabuleixing}}</view>
					<image :style='{"padding":"0","margin":"48rpx auto 8rpx","objectFit":"cover","borderRadius":"100%","display":"block","width":"260rpx","height":"260rpx"}' class="list-item-image" mode="aspectFill" v-if="product.tupian.substring(0,4)=='http'" :src="product.tupian"></image>
					<image :style='{"padding":"0","margin":"48rpx auto 8rpx","objectFit":"cover","borderRadius":"100%","display":"block","width":"260rpx","height":"260rpx"}' class="list-item-image" mode="aspectFill" v-else :src="product.tupian?baseUrl+product.tupian.split(',')[0]:''"></image>
				</view>
			</view>
			
			
			
			  
			
			
			  
			
			  
			<view v-if="false && 1 == 3" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
		<view class="listBox recommend">
			<view v-if="false && 1 == 1" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"width":"100%","padding":"0px","boxShadow":"0px 4rpx 4rpx rgba(0,0,0,.1)","margin":"0","background":"#fff"}'>
				<view :style='{"padding":"0 48rpx","boxShadow":"0px 8rpx 2rpx rgba(0,0,0,.2)","color":"#333","borderRadius":"0 0 64rpx 0","background":"radial-gradient(circle, rgba(255,239,146,1) 0%, rgba(255,219,6,1) 100%),rgb(255,239,146)","display":"inline-block","width":"auto","fontSize":"32rpx","lineHeight":"80rpx","height":"80rpx"}'>闲置交易推荐</view>
			</view>
			
			<view v-if="false && 1 == 2" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<!-- 样式1 -->
			<view class="list-box style1" :style='{"padding":"0px","boxShadow":"0 0px 0px rgba(0,0,0,.1)","margin":"40rpx 24rpx","borderRadius":"24rpx","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 48rpx)","justifyContent":"space-between","height":"auto"}'>
				<view @tap="onDetailTap('xianzhijiaoyi',product.id)" v-for="(product,index) in xianzhijiaoyilist" :key="index" class="list-item" :style='{"border":"2rpx solid #f7de91","boxShadow":"0 4rpx 8rpx rgba(182,158,18,.4),inset 0px 0px 64rpx 0px #ffef92","padding":"0px 0 24rpx 0","margin":"0 0 40rpx","backgroundColor":"#fff","borderRadius":"24rpx","textAlign":"center","flexWrap":"wrap","display":"flex","width":"48%","position":"relative","height":"auto"}'>
					<view :style='{"padding":"4rpx 20rpx","margin":"0 auto","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","background":"none","width":"96%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis","order":"2"}' class="list-item-title ">物品名称:{{product.wupinmingcheng}}</view>
					<image :style='{"padding":"0","margin":"48rpx auto 8rpx","objectFit":"cover","borderRadius":"100%","display":"block","width":"260rpx","height":"260rpx"}' class="list-item-image" mode="aspectFill" v-if="product.wupintupian.substring(0,4)=='http'" :src="product.wupintupian"></image>
					<image :style='{"padding":"0","margin":"48rpx auto 8rpx","objectFit":"cover","borderRadius":"100%","display":"block","width":"260rpx","height":"260rpx"}' class="list-item-image" mode="aspectFill" v-else :src="product.wupintupian?baseUrl+product.wupintupian.split(',')[0]:''"></image>
				</view>
			</view>
			
			
			
			  
			
			
			  
			
			  
			<view v-if="false && 1 == 3" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
		<view class="listBox recommend">
			<view v-if="false && 1 == 1" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"width":"100%","padding":"0px","boxShadow":"0px 4rpx 4rpx rgba(0,0,0,.1)","margin":"0","background":"#fff"}'>
				<view :style='{"padding":"0 48rpx","boxShadow":"0px 8rpx 2rpx rgba(0,0,0,.2)","color":"#333","borderRadius":"0 0 64rpx 0","background":"radial-gradient(circle, rgba(255,239,146,1) 0%, rgba(255,219,6,1) 100%),rgb(255,239,146)","display":"inline-block","width":"auto","fontSize":"32rpx","lineHeight":"80rpx","height":"80rpx"}'>发现推荐</view>
			</view>
			
			<view v-if="false && 1 == 2" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<!-- 样式1 -->
			<view class="list-box style1" :style='{"padding":"0px","boxShadow":"0 0px 0px rgba(0,0,0,.1)","margin":"40rpx 24rpx","borderRadius":"24rpx","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 48rpx)","justifyContent":"space-between","height":"auto"}'>
				<view @tap="onDetailTap('faxian',product.id)" v-for="(product,index) in faxianlist" :key="index" class="list-item" :style='{"border":"2rpx solid #f7de91","boxShadow":"0 4rpx 8rpx rgba(182,158,18,.4),inset 0px 0px 64rpx 0px #ffef92","padding":"0px 0 24rpx 0","margin":"0 0 40rpx","backgroundColor":"#fff","borderRadius":"24rpx","textAlign":"center","flexWrap":"wrap","display":"flex","width":"48%","position":"relative","height":"auto"}'>
					<view :style='{"padding":"4rpx 20rpx","margin":"0 auto","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"center","background":"none","width":"96%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis","order":"2"}' class="list-item-title ">文章标题:{{product.wenzhangbiaoti}}</view>
					<image :style='{"padding":"0","margin":"48rpx auto 8rpx","objectFit":"cover","borderRadius":"100%","display":"block","width":"260rpx","height":"260rpx"}' class="list-item-image" mode="aspectFill" v-if="product.tupian.substring(0,4)=='http'" :src="product.tupian"></image>
					<image :style='{"padding":"0","margin":"48rpx auto 8rpx","objectFit":"cover","borderRadius":"100%","display":"block","width":"260rpx","height":"260rpx"}' class="list-item-image" mode="aspectFill" v-else :src="product.tupian?baseUrl+product.tupian.split(',')[0]:''"></image>
				</view>
			</view>
			
			
			
			  
			
			
			  
			
			  
			<view v-if="false && 1 == 3" class="idea recommendIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
		<!-- 商品推荐 -->
		
		

		<!-- 商品列表 -->
																																																																												<!-- 商品列表 -->
		
		

	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
                role : '',
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				//轮播
				swiperList: [],
				hubanghuzhulist: [],
				xianzhijiaoyilist: [],
				faxianlist: [],
				news: [],
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
        async onLoad(){
            this.role = uni.getStorageSync("role");
            let table = uni.getStorageSync("nowTable");
            let res = await this.$api.session(table);
            this.user = res.data;
            this.tableName = table;
            let menus = menu.list();
            this.menuList = menus;
            this.menuList.forEach((item,key) => {
                if(this.role==item.roleName) {
                    item.frontMenu.forEach((item2,key2) => {
                        if(item2.child[0].buttons.indexOf("查看")>-1) {
                            this.swiperMenuList.push(item2);
                        }
                    })
                }
            })
        },
		async onShow() {
            let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.page('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}

			// 推荐信息
			res = await this.$api.recommend('hubanghuzhu', {                                              
                page: 1,
                limit: 4
            });
			this.hubanghuzhulist = res.data.list
			// 推荐信息
			res = await this.$api.recommend('xianzhijiaoyi', {                                              
                page: 1,
                limit: 4
            });
			this.xianzhijiaoyilist = res.data.list
			// 推荐信息
			if(uni.getStorageSync("userid")!==null) {
				res = await this.$api.recommend2('faxian', {
                    page: 1,
                    limit: 4
                });
			} else {
				res = await this.$api.recommend('faxian', {                                              
                    page: 1,
                    limit: 4
                });
			}
			this.faxianlist = res.data.list

		},

		methods: {

			//轮播图跳转
			onSwiperTap(e) {

			},
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
                uni.navigateTo({
                    url: url,
                    fail: function() {
                        uni.switchTab({
                            url: url
                        });
                    }
                });
            }
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
