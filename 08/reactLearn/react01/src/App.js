import React, {Component} from 'react';
import logo from './logo.png';
import './App.css'

class App extends Component {
    formatName(user) {
        return user.firstName + ' ' + user.lastName
    }

    render(){
        const name = 'jerry';
        // jsx本身也是表达式
        const jsx = <p>hello,你好！</p>
        return (
            < div>
                App组件
                {/*表达式*/}
                <h1>{name}</h1>
                <p>{this.formatName({firstName: 'tom', lastName: 'jerry'})}</p>
                {/*属性*/}
                <img src={logo} style={{width: '100px'}} className="img"/>
                {/*jsx也是表达式*/}
                {jsx}
            </div>
        );
    }

}

export default App;
