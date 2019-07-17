import React, {Component} from 'react';

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

const  withLog=Comp=>{
    console.log(Comp.name+'渲染了');
    return props=><Comp {...props} />
}

@withLog
@withName
@withLog
class Kaikeba extends Component{
   render(){
       return (
           <div>
               {this.props.stage} - {this.props.name}
           </div>
       )
   }
}


export default Kaikeba;

// 注解就是一个工厂函数
