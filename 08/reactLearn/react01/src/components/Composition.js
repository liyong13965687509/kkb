import React, {Component} from 'react';

// Dialog--对话框---展示组件
function Dialog(props) {
return (
    <div style={{border:`4px solid ${props.color||'blue'}`}}>
        {/*等效vue中的匿名插槽*/}
        {props.children}
        {/*等效vue中的具名插槽*/}
        <div className="footer">{props.footer}</div>
    </div>
)
}


// 对Dialog进行扩展
function WelcomeDialog() {
    const confirmBtn=<button onClick={()=>alert('react真好用！')}>确定</button>
    return (
        <Dialog color='green' footer={confirmBtn}>
            <h1>欢迎使用</h1>
            <p>感谢光临react！！！</p>
        </Dialog>
    )
}

class Composition extends Component {
    render() {
        return (
            <div>
                <WelcomeDialog></WelcomeDialog>
            </div>
        );
    }
}

export default Composition;
