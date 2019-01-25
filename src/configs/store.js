// 状态管理
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 表
const moduleA = {
    state: {
        skill: 'ps'
    }
}

const moduleB = {
    state: {
        skill: 'js'
    }
}


// 实例化Vuex，创建一个仓库
// 库
const store = new Vuex.Store({
    // 状态
    // 该库存数据的地方
    state: {
        // 状态值
        count: 0,
        author: 'lemon',
        modules: {
            moduleA,
            moduleB
        },
        // loading
        loadingStatus: false,
        // 预览图状态
        // 图片的地址
        galleryImgUrl: "",
        // 预览图组件的状态值
        galleryStatus: false,
        // 新闻的ID
        newsId: 0,
        //登录的状态
        successy:false,
    },
    // 修改数据的方法 真正改数据的操作
    mutations: {
        // 修改数据的第一个方法
        editCount(state) {
            state.count++
        },
        // 修改仓库中state中的author
        editAuthor(state, data) {
            state.author = data
        },
        editGallery(state, obj) {
            state.galleryImgUrl = obj.galleryImgUrl
            state.galleryStatus = obj.galleryStatus
        },
        editLoding(state, bool) {
            state.loadingStatus = bool
        },
        editSuccess(state, bool) {
            state.successy = bool
        },
        editNewsId(state, id) {
            state.newsId = id
        }
    },
    // 获取数据的方法
    getters: {
        // 获取author的方法
        getAuthor(state) {
            return state.author + ' Yeah'
        },
        getCount(state) {
            return state.count
        },
        getGallery(state) {
            return {
                galleryImgUrl: state.galleryImgUrl,
                galleryStatus: state.galleryStatus
            }
        },
        getLoding(state) {
            return state.loadingStatus
        },
        getSuccess(state) {
            return state.successy
        },
    },
    // 异步的方法放这里
    // 触发多个数据的改变才使用
    // 触发mutations，其实就是把刚才commit从组件放出来，换个地方放到actions
    actions: {
        setAuthor(context, data) {
            context.commit('editAuthor', data)
            // context.commit('editCount')
        },
        setGallery(context, obj) {
            setTimeout(() => {
                context.commit('editGallery', obj)
            }, 1000)
        }
    }
})
// 暴露store仓库到`main.js`的根容器里面
// console.log(Vuex,store)
export default store// 状态管理