<template>
    <div>
        <h3>Dashborard</h3>
        <!--父组件必须有一个路由出口，负责显示子路由内容-->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Dashborard"
    }
</script>

<style scoped>

</style>
