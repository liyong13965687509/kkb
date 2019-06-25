import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        cart: JSON.parse(localStorage.getItem('cart')) || [],
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        addCart(state, item) {
            const good = state.cart.find(v => v.id === item.id);
            if (good) {
                good.cartCount += 1;
            } else {
                state.cart.push({
                    ...item,
                    cartCount: 1
                })
            }
        },
        countMinus(state, index) {
            const item = state.cart[index];
            if (item.cartCount > 1) {
                item.cartCount -= 1;
            } else {
                state.cart.splice(index, 1);
            }
        },
        countAdd(state, index) {
            state.cart[index].cartCount += 1;
        },
    },
    getters: {// 只读
        isLogin: state => {
            return !!state.token;//转换为布尔值
        },
        total: state => state.cart.reduce((num, v) => num += v.cartCount * v.price, 0),

        // cartTotal: state => {//计算购物车中产品的总数
        //     let num = 0;
        //     state.cart.forEach(v => {
        //         num += v.cartCount;
        //     })
        // }
    },
    actions: {}
})

// 订阅store变化 给state中的数据进行持久化的更改
store.subscribe((mutation, state) => {
    switch (mutation.type) {
        case 'setToken':
            localStorage.setItem('token', JSON.stringify(state.token))
            break;
        case 'addCart':
            localStorage.setItem('cart', JSON.stringify(state.cart))
            break;
    }
})
export default store
