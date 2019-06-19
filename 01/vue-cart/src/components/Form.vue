<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: "Form",
        provide() {
            return {
                // 将表单项的实例传递给后代
                form: this
            }
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: {
                type: Object
            }
        },
        created() {
            // 缓存要校验的表单项
            this.fields = [];
            this.$on('formItemAdd', item => this.fields.push(item));
        },
        methods: {
            async validate(callback) {
                // 将FormItem数组转换为validate()返回的promise数组
                const tasks = this.fields.map(item => item.validate());
                // 获取所有结果，统一处理 返回的是全是布尔值的数组
                const results = await Promise.all(tasks);
                let ret = true;
                results.forEach(valid => {
                    if (!valid) {
                        ret = false;//只要有一个失败就失败了
                    }
                });
                callback(ret);
            }
        },
    }
</script>

<style scoped>

</style>
