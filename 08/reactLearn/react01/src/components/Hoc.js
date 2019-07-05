import React, {Component} from 'react';


function Kaikeba(props) {
    return (
        <div>
            {props.stage} - {props.name}
        </div>
    )
}

// 高阶组件---对参数组件获取数据的能力进行扩展
const withName = Comp => {
    // 甚至可以重写组件的生命周期
    class NewComponent extends Component {
        componentDidMount() {
            console.log('do something');
        }
        render(){
            return <Comp {...this.props} name="高阶组件使用介绍"/>
        }
    }

    // 假设通过某种特殊手段获取了本节课名字
    // return的不是JSX，而是一个组件(这里是一个函数形式的组件)
    return NewComponent;
}

// class Hoc extends Component {
//     render() {
//         return (
//             <div>
//
//             </div>
//         );
//     }
// }

export default withName(Kaikeba);
