<template>
    <div>
        <cube-form :model="model"
                   :schema="schema"
                   @submit="handleLogin"
                   @validate="handleValidate"></cube-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                model: {// 数据模型
                    username: '',
                    password: '',
                },
                schema: {// 表单结构模型
                    fields: [
                        {// 用户名框
                            type: 'input',
                            modelKey: 'username',
                            label: '用户名',
                            props: {
                                placeholder: '请输入用户名'
                            },
                            rules: {// 校验规则
                                required: true
                            },
                            //触发器
                            trigger: 'blur',
                            messages: {
                                required: '用户名为必填项'
                            }
                        },
                        {// 密码框
                            type: 'input',
                            modelKey: 'password',
                            label: '密码',
                            props: {
                                placeholder: '请输入密码',
                                type: 'password',
                                eye: {open: false}
                            },
                            rules: {// 校验规则
                                required: true
                            },
                            //触发器
                            trigger: 'blur',
                            messages: {
                                required: '密码为必填项'
                            }
                        },
                        {// 登录按钮
                            type:'submit',
                            label:'登录'
                        }
                    ]
                }
            }
        },
        methods: {
            handleLogin(e) {
                // 避免默认提交行为
                e.preventDefault();
                console.log('登录');
            },
            handleValidate() {

                console.log('校验');
            },

        },
    }
</script>

<style scoped>

</style>