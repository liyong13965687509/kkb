import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Cart from './views/Cart.vue'
import store from './store.js'
import History from './utils/history.js';

// 将Router挂载到Vue
Vue.use(Router);
// 将History挂载到Vue
Vue.use(History);

// 实例化之前，扩展Router  goBack方法
Router.prototype.goBack = function () {
    // isBack是Router实例化之前扩展的属性
    this.isBack = true;
    // back()方法是router的自带方法
    this.back();
}

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/about',
            name: 'about',
            // 这里判断路由是否要受保护
            meta: {auth: true},
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})

// 守卫
router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
        // 需要认证,则检查令牌
        if (store.state.token) {//已登陆
            next();
        } else {//未登录
            //重定向到登录页
            next({
                path: '/login',
                query: {redirect: to.path}
            })
        }
    } else {
        next();
    }
})

// afterEach记录历史记录
router.afterEach((to, from) => {
    // this.$routerHistory.
    if(router.isBack){
        // 后退
        History.pop();
        router.isBack=false;
        router.transitionName='route-back';
    }else{
        History.push(to.path);
        router.transitionName='route-forward';
    }
})

export default router;
