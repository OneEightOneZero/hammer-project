// 路由配置
import Vue from 'vue'
// 引入路由模块
import VueRouter from 'vue-router'
// 显式安装该模块
Vue.use(VueRouter)
// 一层
// 首页路由
import App from '../App.vue'
// 详情页路由
import Detail from '../pages/Detail.vue'
// 注册页路由
import Zuce from '../pages/Zuce.vue'

// 二层路由
// 微信路由 微信页面
import Wechat from '../pages/Wechat.vue'
// 联系路由 联系页面
import Contact from '../pages/Contact.vue'
//搜索路由 搜索页面
import Search from '../pages/Search.vue'
//分类路由 搜索页面
import Sorter from '../pages/Sorter.vue'
//个人中心路由 个人中心页面
import Mine from '../pages/Mine.vue'
//购物车
import Car from '../pages/Car.vue'



// 配置路由
const routes = [
    // 如果url的路由为 /foo，进入Foo组件
    {
        path: '/app',
        // 路由命名，方便跳转
        name: 'app',
        component: App,
        children: [{
                // 嵌套路由里面的path要删掉/
                path: 'wechat',
                name: 'wechat',
                component: Wechat,
                // 路由传参
                meta: {
                    skill: 'ps'
                }
            },
            {
                path: 'contact',
                name: 'contact',
                component: Contact,
                // 路由传参
                meta: {
                    skill: 'js'
                }
            },
            {
                path: 'search',
                name: 'search',
                component: Search,
                // 路由传参
                meta: {
                    skill: 'jss'
                }
            },
            {
                path: 'sorter',
                name: 'sorter',
                component: Sorter,
                // 路由传参
                meta: {
                    skill: 'pss'
                }
            },
            {
                path: 'mine',
                name: 'mine',
                component: Mine,
                // 路由传参
                meta: {
                    skill: 'ls'
                }
            },
            {
                path: 'car',
                name: 'car',
                component: Car,
                // 路由传参
                meta: {
                    skill: 'ls'
                }
            }
        ]
    },
    {
        // 就是可以在:id里面接受一个不固定的值
        // 动态路由匹配
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
    {
        // 就是可以在:id里面接受一个不固定的值
        // 动态路由匹配
        path: '/zuce',
        name: 'zuce',
        component: Zuce
    },
    // 重定向路由，比如刚进页面的时候，默认跳转的路由位置
    {
        path: '/',
        redirect: {
            name: 'wechat'
        }
    }
]

// 实例该路由配置
const router = new VueRouter({
    // h5history路由模式
    // 有兼容性的问题
    // mode: 'history',
    // 建议用默认的哈希模式
    mode: 'hash',
    routes // (缩写) 相当于 routes: routes
})
export default router 