import React, {Component} from 'react';
import logo from './logo.png';
import './App.css'

// 函数型组件传递props
function Welcomel(props) {
    return (
        <div>
            Hello,{props.name}
        </div>
    )
}

class App extends Component {
    // 1.当需要状态时，需要构造函数
    constructor(props) {
        // 调用超类（Component）的构造函数
        super(props);

        // 2.初始化状态 this---App实例
        // react的state类比vue的data
        this.state = {
            count: 0,
            date: new Date()
        }
    }

    // 生命周期----组件挂载
    componentDidMount() {
        this.timer = setInterval(() => {
            // 3.更新状态
            this.setState({
                date: new Date(),
            })
            // 注意事项：1.不能直接改状态
            // 如：this.state.date=new Date();
            // 2.setState()是异步的
        }, 1000)
        this.setState((prevState, prevProps) => ({count: prevState.count + 1}), () => {
            console.log(this.state.count)
        })
    }
    // 组件卸载
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    formatName(user) {
        return user.firstName + ' ' + user.lastName
    }

    render() {
        const name = 'jerry';
        // jsx本身也是表达式
        const jsx = <p>hello,你好！</p>
        return (
            <div>
                App组件
                {/*表达式*/}
                <h1>{name}</h1>
                <p>{this.formatName({firstName: 'tom', lastName: 'jerry'})}</p>
                {/*属性*/}
                <img src={logo} style={{width: '100px'}} alt="" className="img"/>
                {/*jsx也是表达式*/}
                {jsx}
                {/*组件属性传值：传入属性是只读的(单向数据流)*/}
                <Welcomel name="React"></Welcomel>
                {/*使用状态*/}
                <p>
                    {this.state.date.toLocaleTimeString()}
                </p>

            </div>
        );
    }

}

export default App;
