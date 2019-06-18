<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: "Form",
        provide(){
          return {
              // 将表单项的实例传递给后代
              form:this
          }
        },
        props:{
           model:{
               type:Object,
               required:true
           },
            rules:{
               type:Object
            }
        }
    }
</script>

<style scoped>

</style>
