<template>
    <div>
        login
        <button @click="login">login</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            async login() {
                //登录成功
                await this.$store.dispatch('submitLogin');
                if(this.$store.state.isLogin){//登录成功
                    // 路由
                    // ES6解构赋值写法 等价于下面的写法
                    const {redirect}=this.$route.query;
                    // const redirect=this.$route.query.redirect;
                    if(redirect){//有下一步跳转的路由
                        // 路由器
                        this.$router.push(redirect);
                    }else{//没有就去默认值首页
                        this.$router.push('/');
                    }
                }else{//登录失败
                    alert('登录失败，请重试！');
                }

            }
        },
    }
</script>

<style scoped>

</style>
