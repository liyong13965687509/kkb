<template>
    <div>
        <input :type="type" :value="inputValue" @input="inputHandler">
    </div>

</template>

<script>
    export default {
        name: "Input",
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
            }
        },
    }
</script>

<style scoped>

</style>
