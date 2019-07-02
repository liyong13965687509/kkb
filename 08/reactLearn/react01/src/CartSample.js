import React, {Component} from 'react';
import {isSuper} from "@babel/types";


// 购物车组件，只展示 可以使用 函数组件
function Cart(props) {
    return (
        <table>
            <tbody>
            {props.data.map(d => (
                <tr key={d.text}>
                    <td>{d.text}</td>
                    <td>{d.price}</td>
                    <td>
                        <button>-</button>
                        {d.count}
                        <button>+</button>
                    </td>
                    <td>￥{d.price * d.count}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )

}

class CartSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: [
                {id: 1, text: 'web全栈架构师1', price: 666},
                {id: 2, text: 'web全栈架构师2', price: 666},
            ],
            text: '',//商品名
            cart: [],
        };
        // 回调写法1 bind---改变this指向
        // this.addGood=this.addGood.bind(this);
    }

    // 写法2
    // 新增产品
    addGood = () => {
        this.setState(prevState => ({
            goods: [...prevState.goods, {id: 3, text: prevState.text, price: 777}]
        }))
    }
    // 输入框change
    textChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    addToCart(good) {
        const newCart = [...this.state.cart];
        const idx = newCart.findIndex(c => c.text === good.text);
        const item = newCart[idx];
        if (item) {
            newCart.splice(idx, 1, {...item, count: item.count + 1})
        } else {
            newCart.push({...good, count: 1})
        }

        this.setState({
            // 这里的cart是个全新的cart，react的dom也就一定会更新了
            cart: newCart
        })


    }

    render() {
        const title = this.props.title ? <h1>{this.props.title}</h1> : null;
        // 循环：将js对象数组转换为jsx数组(类似html数组)
        const goods = this.state.goods.map(good => <li key={good.id}>
            {good.text}
            <button onClick={() => this.addToCart(good)}>加入购物车</button>
        </li>)

        return (
            <div>
                {/*条件语句*/}
                {title}
                {/*添加商品*/}
                <div>
                    <input type="text" value={this.state.text} onChange={(e) => this.textChange(e)}/>
                    <button onClick={this.addGood}>添加商品</button>
                </div>
                {/*列表渲染*/}
                <ul>
                    {goods}
                </ul>
                {/*购物车*/}
                <Cart data={this.state.cart}></Cart>
            </div>
        );
    }
}

export default CartSample;
