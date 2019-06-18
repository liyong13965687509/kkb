<template>
    <div id="app">
        <!--element测试-->
        <form-test :title="titleVar"></form-test>
        <k-button @lalala="handleClick1"></k-button>
        <k-input v-model="inputV"></k-input>
        {{inputV}}

        <Win>
            <template slot="head">
                <h3>window</h3>
            </template>
            content...
            <template slot="foot">
                <button>确定</button>
            </template>
        </Win>

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
    import FormTest from './components/FormTest.vue';
    import KButton from './components/Button.vue';
    import KInput from './components/Input.vue';
    import Win from './components/Win.vue';

    export default {
        name: 'app',
        provide(){
            return {
                someValue:'来自祖上的遗产'
            }
        },
        components: {
            HelloWorld,
            Cart,
            FormTest,
            KButton,
            KInput,
            Win
        },
        data() {
            return {
                name: '购物车',
                showName: false,
                goods: [],
                text: '',
                titleVar: 'form表单',
                inputV: '3124'
            }
        },
        async created() {
            // 查询产品列表
            try {
                const res = await axios.get('/api/goods');
                this.goods = res.data.list;
            } catch (e) {
                //错误处理
            }
        },
        methods: {
            addGood(i) {
                // 获取goods中对应项
                const good = this.goods[i];

                // 派发事件
                this.$bus.$emit('addCart', good);
                // this.$root.$emit('addCart',good);
            },
            handleClick1(obj) {
                console.log(obj)
            },
            inputChange(str) {
                this.inputV = str;
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
