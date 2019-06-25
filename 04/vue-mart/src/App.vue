<template>
    <div id="app">
        <transition name="route-move">
            <router-view class="child-view"/>
        </transition>
        <cube-tab-bar show-slider v-model="selectLabel" :data="tabs" @change="changeHandler">

        </cube-tab-bar>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                selectLabel: '/',//默认页签
                tabs: [
                    {label: 'Home', value: '/', icon: 'cubeic-home'},
                    {label: 'Cart', value: '/cart', icon: 'cubeic-mall'},
                    {label: 'Me', value: '/login', icon: 'cubeic-person'},
                ]
            }
        },
        computed: {
            ...mapGetters(['isLogin'])
        },
        watch: {// 路由发生变化时，tabs选中同步
            $route(route) {
                this.selectLabel = route.path;
            }
        },
        created() {
            // 初始化页签设置
            this.selectLabel = this.$route.path;
        },
        methods: {
            logout() {
                this.$http.get('/api/logout')
            },
            changeHandler(val) {
                this.$router.push(val);
            }
        },

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    .cube-tab-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #edf0f4;
    }

    .cube-tab-bar-slider {
        top: 0;
    }

    /*页面的滑动动画*/
    /*入场前*/
    .route-move-enter {
        transform: translate3d(-100%, 0, 0);
    }

    /*离开后*/
    .route-move-leave-to {
        transform: translate3d(100%, 0, 0);
    }
    .route-move-enter-active ,
    .route-move-leave-active {
       transition: transform .3s;
    }

    /*让当前元素不占位置，动画就不会出现抖动*/
    .child-view{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        padding-bottom: 36px;
    }

</style>
