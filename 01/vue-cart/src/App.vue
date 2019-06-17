<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>

        <!--循环-->
        <ul>
            <li v-for="(good,index) in goods" :key="good.id">
                <span>{{good.text}}</span>
                <span>￥{{good.price}}</span>
                <button @click="addGood(index)">加入购物车</button>
            </li>
        </ul>
        <!--购物车-->
        <cart :name="name"></cart>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Cart from './components/Cart.vue'
    import axios from 'axios'

    export default {
        name: 'app',
        data() {
            return {
                name: '购物车',
                showName: false,
                goods: [

                ],
                text: '',
            }
        },
        components: {
            HelloWorld,
            Cart
        },
        async created(){
            // 查询产品列表
            try {
                const res=await axios.get('/api/goods');
                console.log(res)
                this.goods=res.data.list;
            }catch (e) {
                //错误处理
            }
        },
        methods: {
            addGood(i) {
                // 获取goods中对应项
                const good = this.goods[i];

                // 派发事件
                this.$bus.$emit('addCart',good);
                // this.$root.$emit('addCart',good);
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
        margin-top: 60px;
    }
</style>
