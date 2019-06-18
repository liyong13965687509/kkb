<template>
    <div>
        <button @click="handleClick">开课吧button</button>
    </div>
</template>

<script>
    export default {
        name: "Button",
        methods: {
            handleClick() {
                //          事件名     参数（子传父的那个值）
                this.$emit('lalala',{msg:'hello'})
            }
        },
    }
</script>

<style scoped>

</style>
