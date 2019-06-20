<template>
    <div>
        <h3>page1</h3>
        <p><button @click="gotopage2">跳转至page2</button></p>
        <p>{{foo}}</p>
    </div>
</template>

<script>
    export default {
        name: "Page1",
        props: {
            foo: {
                type: String,
                default: ''
            },
        },
        // watch:{
        //     $route(){
        //
        //     }
        // },
        methods: {
            gotopage2() {
                // this.$router.push('/page2/jquery');
                this.$router.push({name:'page2',params:{id:1,msg:'2143'}});
            }
        },
        // beforeRouteEnter(to,from,next){
        //     if(window.isLogin){
        //         next();
        //     }else{
        //         // 未登录，先去登录页，并记录下登录后要去的页面
        //         next('/login?redirect='+to.path)
        //     }
        // }
        // beforeRouteUpdate(to,from,next){
        //     console.log(314)
        //     console.log(to)
        //     // 仅路由参数发生变化时触发，比如 /page/vue  /page/react
        //     next();
        // }
    }
</script>

<style scoped>

</style>
