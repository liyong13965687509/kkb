// reducer：状态修改具体执行者
// 纯函数：传递一个什么东西，返回的一个东西一定是可预测的
// 默认导出
export default (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'minus':
            return state - 1;
        default:
            return state;
    }
};

function add() {
    return {type: 'add'}
}

function minus() {
    return {type: 'minus'}
}

function asyncAdd() {
    return (dispatch,state) => {
        console.log(state);
        // 模拟异步操作
        setTimeout(() => {
            dispatch({type: 'add'})
        }, 1000)
    }
}

// 具名导出
export {add,minus,asyncAdd}

