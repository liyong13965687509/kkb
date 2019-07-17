import React, {Component} from 'react';


// 高阶组件实战
function kFormCreate(Comp) {
    constructor(props) {
        super(props);
        this.options={};// 字段选项设置
        this.state={};// 各字段的值
    }
    getFieldDec=(field,option,InputComp)=>{
        this.options[field]=option;

        return (
            <div>
                {React.cloneElement(InputComp,{
                    name:field,//控件name
                    value:this.state[field]||'',//控件值
                })}
            </div>
        )
    }
}


class KFormSample extends Component {
    render() {
        const {getFieldDec}=this.props;
        return (
            <div>
                {
                    getFieldDec('uname',{
                        rules:[{required:true,message:'请填写用户名'}]
                    },<input type="text"/>)
                }
                {
                    getFieldDec('pwd',{
                        rules:[{required:true,message:'请填写密码'}]
                    },<input type="password"/>)
                }
                <button>登录</button>
            </div>
        );
    }
}

export default KFormSample;
