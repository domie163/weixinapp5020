import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import xianzhijiaoyi from '@/views/modules/xianzhijiaoyi/list'
    import goumaiwupin from '@/views/modules/goumaiwupin/list'
    import shudong from '@/views/modules/shudong/list'
    import huzhufabuleixing from '@/views/modules/huzhufabuleixing/list'
    import faxian from '@/views/modules/faxian/list'
    import hubanghuzhu from '@/views/modules/hubanghuzhu/list'
    import discussxuexiziliao from '@/views/modules/discussxuexiziliao/list'
    import menu from '@/views/modules/menu/list'
    import storeup from '@/views/modules/storeup/list'
    import discussxianzhijiaoyi from '@/views/modules/discussxianzhijiaoyi/list'
    import wupinfenlei from '@/views/modules/wupinfenlei/list'
    import yonghu from '@/views/modules/yonghu/list'
    import chat from '@/views/modules/chat/list'
    import wenzhangfenlei from '@/views/modules/wenzhangfenlei/list'
    import xuexiziliao from '@/views/modules/xuexiziliao/list'
    import discusshubanghuzhu from '@/views/modules/discusshubanghuzhu/list'
    import ziliaoleibie from '@/views/modules/ziliaoleibie/list'
    import config from '@/views/modules/config/list'
    import discussfaxian from '@/views/modules/discussfaxian/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/xianzhijiaoyi',
        name: '闲置交易',
        component: xianzhijiaoyi
      }
      ,{
	path: '/goumaiwupin',
        name: '购买物品',
        component: goumaiwupin
      }
      ,{
	path: '/shudong',
        name: '树洞',
        component: shudong
      }
      ,{
	path: '/huzhufabuleixing',
        name: '互助发布类型',
        component: huzhufabuleixing
      }
      ,{
	path: '/faxian',
        name: '发现',
        component: faxian
      }
      ,{
	path: '/hubanghuzhu',
        name: '互帮互助',
        component: hubanghuzhu
      }
      ,{
	path: '/discussxuexiziliao',
        name: '学习资料评论',
        component: discussxuexiziliao
      }
      ,{
	path: '/menu',
        name: '菜单列表',
        component: menu
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/discussxianzhijiaoyi',
        name: '闲置交易评论',
        component: discussxianzhijiaoyi
      }
      ,{
	path: '/wupinfenlei',
        name: '物品分类',
        component: wupinfenlei
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/chat',
        name: '反馈信息',
        component: chat
      }
      ,{
	path: '/wenzhangfenlei',
        name: '文章分类',
        component: wenzhangfenlei
      }
      ,{
	path: '/xuexiziliao',
        name: '学习资料',
        component: xuexiziliao
      }
      ,{
	path: '/discusshubanghuzhu',
        name: '互帮互助评论',
        component: discusshubanghuzhu
      }
      ,{
	path: '/ziliaoleibie',
        name: '资料类别',
        component: ziliaoleibie
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/discussfaxian',
        name: '发现评论',
        component: discussfaxian
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
