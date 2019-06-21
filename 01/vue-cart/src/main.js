import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//修改Vue原型
Vue.prototype.$bus=new Vue();
// 注册全局组件
// Vue.component('kaikeba-comp',{})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')



