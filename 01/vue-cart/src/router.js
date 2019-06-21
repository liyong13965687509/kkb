import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Page1 from '@/views/Page1.vue'
import Page2 from '@/views/Page2.vue'
import Dashborard from '@/views/Dashborard.vue'
// import Login from '@/views/Login.vue'
import store from './store.js'

// 插件的挂载
Vue.use(Router)

function func({params, query}) {
    return {
        id: params.id,
        msg: params.msg,
        foo: query.foo
    }
}

const router= new Router({
    // 历史记录模式
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/dashborard/page1',//重定向
        },
        {
            path: '/dashborard',
            component: Dashborard,
            beforeEnter(to,from,next){
                if(store.state.isLogin){
                    next();
                }else{
                    // 未登录，先去登录页，并记录下登录后要去的页面
                    next('/login?redirect='+to.path)
                }
            },
            children:[
                {
                    path: 'static',
                    component: Page1,
                    props: {foo: 'bar1'}//给组件传静态值
                },
                {
                    path: 'page1/:foo',
                    component: Page1,
                    props: true//将route.params 作为参数传进去
                },
                {
                    path: 'page2/:id/:msg',
                    name: 'page2',
                    component: Page2,
                    props: func//向组件传参
                },
            ]
        },

        {
            path: '/login',
            name: 'login',
            // component: Login,
            component: ()=>import('./views/Login.vue')
        },
    ]
});

// 总阀门
// 全局路由守卫
router.beforeEach((to,from,next)=>{
    console.log(to);
    // if(to.path!=='/login'){//判断是否已登录
    //     if(window.isLogin){
    //         next();
    //     }else{
    //         // 未登录，先去登录页，并记录下登录后要去的页面
    //         next('/login?redirect='+to.path)
    //     }
    //
    // }else{
    //     next();
    // }
    next();
})

// router.afterEach((to,from)=>{})
export default router;
