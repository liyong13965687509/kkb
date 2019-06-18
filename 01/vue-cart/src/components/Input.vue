<template>
    <div>
        <input :type="type" :value="inputValue" @input="inputHandler">
    </div>

</template>

<script>
    export default {
        name: "Input",
        inject:['someValue'],
        props: {
            value: {
                type: String,
                default: ''
            },
            type:{
                type:String,
                default: 'text'
            }
        },
        data() {
            return {//单向数据流的原则：组件内不能修改props内的属性
                inputValue: this.value
            }
        },
        methods: {
            inputHandler(e) {
                this.inputValue = e.target.value;
                // 通知父组件值的更新
                this.$emit('input', this.inputValue);

                // 通知FormItem做校验 就是FormItem 将事件派发给自己去处理
                // 不能写成this.$emit，
                // 因为Form-item里面没法监听input组件，因为在Form-item里面现在是slot
                this.$parent.$emit('validate',this.inputValue)
            }
        },
    }
</script>

<style scoped>

</style>
