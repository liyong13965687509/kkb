<template>
    <div>
        <h3>Dashborard</h3>
        <!--父组件必须有一个路由出口，负责显示子路由内容-->
        <router-view></router-view>
        <button @click="inc">increase</button>
        <button @click="incAsync">incAsync</button>
        <p>{{count}}</p>
        <p>约为：{{money}}</p>
    </div>
</template>

<script>
    // mapState,mapGetters,mapMutations,mapActions是一个函数会返回一个对象（帮助方法）
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name: "Dashborard",
        computed: {
            ...mapState(['count']),
            //生成 {count:this.$store.state.count}
            ...mapGetters(['money'])
            //生成 {money:$store.getters.money}
        },
        methods: {
            ...mapMutations(['increase']),
            //生成 {increase:this.$store.commit('increase')}
            ...mapActions(['increaseAsync']),
            //生成 {increaseAsync:this.$store.dispatch('increaseAsync')}
            inc() {
                // 静态
                // this.$store.commit('increase')
                this.increase();
            },
            incAsync() {
                // 异步动态
                // this.$store.dispatch('increaseAsync')
                this.increaseAsync();
            }
        },
    }
</script>

<style scoped>

</style>
