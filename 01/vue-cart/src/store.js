import Vue from 'vue'
import Vuex from 'vuex'

// 挂载插件
Vue.use(Vuex)

export default new Vuex.Store({
    state: {// 类比data
        count: 999,
        isLogin: false,//登录状态
    },
        mutations: {// 修改数据
        // 操纵数据的方法
        increase(state) {
            state.count += 1;
        },
        login(state) {
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
        },
    },
    getters: {// 对state中的数据进行加工处理（类比计算属性）
        money: state => {
            return state.count + '元'
        }
    },
    actions: {// 有异步操作时使用
        increaseAsync({state, commit}, payload) {
            setTimeout(() => {
                commit('increase');
            }, 1000);
        },
        submitLogin({commit}, payload) {
            return new Promise(resolve=>{
                setTimeout(() => {
                    commit('login');
                    resolve(true);
                }, 2000);
            })

        },
    }
})
