import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        }
    },
    getters:{// 只读
        isLogin:state=>{
            return !!state.token;//转换为布尔值
        }
    },
    actions: {}
})
