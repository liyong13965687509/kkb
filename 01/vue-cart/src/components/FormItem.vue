<template>
    <div>
        <label v-if="label">{{label}}</label>
        <div>
            <slot></slot>
            <!--校验错误信息-->
            <p v-if="validateStatus=='error'" class="error">{{errorMessage}}</p>
        </div>
    </div>
</template>

<script>
    import schema from 'async-validator'

    export default {
        name: "FormItem",
        inject: ['form'],//注入form,获取model和rules
        props: ['label', 'prop'],
        data() {
            return {
                // 校验状态
                validateStatus: '',
                // 错误提示信息
                errorMessage: ''
            }
        },
        created() {
            this.$on('validate', this.validate)
        },
        mounted() {//挂载到form上时，派发一个添加事件
            if (this.prop) {//判断当前item是否需要通知父级
                // 告诉父级，formItem已就绪，可以使用
                this.$parent.$emit('formItemAdd', this);
            }
        },
        methods: {
            validate() {
                // 返回一个promise对象
                return new Promise(resolve => {
                    // 校验当前项 依赖async-validate
                    const descriptor = {//校验规则
                        [this.prop]: this.form.rules[this.prop]
                    };
                    const validator = new schema(descriptor);
                    //                   校验对象
                    validator.validate({[this.prop]: this.form.model[this.prop]}, errors => {
                        if (errors) {
                            // 校验失败
                            this.validateStatus = 'error';
                            this.errorMessage = errors[0].message;
                            resolve(false);//校验失败
                        } else {
                            this.validateStatus = '';
                            this.errorMessage = '';
                            resolve(true);//校验成功
                        }
                    })
                })

            },

        },
    }
</script>

<style scoped>
    .error {
        color: #f00;
    }

</style>
