<template>
    <div>
        <p>{{name}}</p>
        <!--购物车列表-->
        <table border="1">
            <tr>
                <th>#</th>
                <th>课程名</th>
                <th>单价</th>
                <th>数量</th>
                <th>总价</th>
            </tr>
            <tr v-for="(c,i) in cart" :key="c.id" :class="{active:c.active}">
                <td>
                    <input type="checkbox" v-model="c.active">
                </td>
                <td>{{c.text}}</td>
                <td>${{c.price}}</td>
                <td>
                    <button @click="minus(i)">-</button>
                    {{c.count}}
                    <button @click="add(i)">+</button>
                </td>
                <td>${{c.price*c.count}}</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2">{{activeCount}}/{{count}}</td>
                <td colspan="2">${{total}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
    export default {
        name: "Cart",
        props: ['name'],
        data() {
            return {
                cart: []
            }
        },
        created(){
            //监听父组件添加商品事件
            // this.$root.$on('addCart',good=>{
            this.$bus.$on('addCart',good=>{
                const ret = this.cart.find(v => v.id === good.id);

                if (ret) {//购物车里已有该商品
                    ret.count += 1;
                } else {
                    this.cart.push({
                        ...good,
                        count: 1,
                        active: true
                    })
                }
            })
        },
        methods: {
            minus(i) {
                const count = this.cart[i].count;
                if (count > 1) {
                    this.cart[i].count -= 1;
                } else {
                    this.remove(i);
                }
            },
            add(i) {
                this.cart[i].count += 1;
            },
            remove(i) {
                if (window.confirm('确定删除吗？')) {
                    this.cart.splice(i, 1);
                }
            }
        },
        computed: {
            activeCount() {//过滤出激活项
                return this.cart.filter(v => v.active).length;
            },
            count() {//购物车总数
                return this.cart.length;
            },
            total() {//计算激活项的总价
                let num = 0;
                this.cart.forEach(c => {
                        if (c.active) {
                            num += c.price * c.count;
                        }
                    }
                )
                return num;
            }
        },
    }
</script>

<style scoped>
    .active {
        color: green;
    }
</style>
