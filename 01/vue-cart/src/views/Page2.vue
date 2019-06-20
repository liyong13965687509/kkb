<template>
    <div>
       <h3>
           page2
       </h3>
        <!--获取路由路径参数-->
        <p>id:{{$route.params.id}}</p>
        <p>msg:{{$route.params.msg}}</p>
        <p>foo:{{$route.query.foo}}</p>
        ------------------------------
        <!--通过属性传递过来-->
        <p>id:{{id}}</p>
        <p>msg:{{msg}}</p>
        <p>foo:{{foo}}</p>
    </div>
</template>

<script>
    export default {
        name: "Page2",
        props: ['id','msg','foo'],
        created() {
            // 查询参的获取
            console.log(this.$route.query.foo)
        }
    }
</script>

<style scoped>

</style>
