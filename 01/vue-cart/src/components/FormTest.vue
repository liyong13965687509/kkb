<template>
    <div>
        <h3>{{title}}</h3>
        <!--model是数据模型-->
        <!--rules是校验规则-->
        <!--ruleForm表单名字-->
        <el-form :model="ruleForm" :rules="rules" ref="loginForm">
            <!--prop用于校验-->
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
                <el-input v-model="ruleForm.pwd"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">登录</el-button>
            </el-form-item>
        </el-form>

        <div>-------------------------------------------------------</div>

        <k-form :model="ruleForm" :rules="rules" ref="loginForm2">
            <k-form-item label="用户名" prop="name">
                <k-input v-model="ruleForm.name"></k-input>
            </k-form-item>
            <k-form-item label="密码" prop="pwd">
                <k-input v-model="ruleForm.pwd" type="password"></k-input>
            </k-form-item>
            <k-form-item>
                <el-button type="primary" @click="submitForm2()">登录</el-button>
            </k-form-item>
            {{ruleForm}}
        </k-form>



    </div>
</template>

<script>
    import KFormItem from './FormItem.vue';
    import KInput from './Input.vue';
    import KForm from './Form.vue';

    export default {
        name: "FormTest",
        components:{
            KFormItem,
            KInput,
            KForm
        },
        props: {
            title: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                ruleForm: {name: '', pwd: ''},
                rules: {
                    name: [{required: true, message: '请输入名称'},
                        {min: 6, max: 10, message: '请输入6-10个字符'}],
                    pwd: [{required: true, message: '请输入密码'}]
                },
            }
        },
        methods: {
            submitForm() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        alert('提交登录！')
                    } else {
                        alert('校验不通过！')
                        return false;
                    }
                })
            },
            submitForm2(){
                this.$refs.loginForm2.validate(valid => {
                    if (valid) {
                        alert('提交登录！')
                    } else {
                        alert('校验不通过！')
                        return false;
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>
