import {createStore} from 'redux';


// reducer：状态修改具体执行者
// 纯函数：传递一个什么东西，返回的一个东西一定是可预测的
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'minus':
            return state - 1;
        default:
            return state;
    }
}


export default createStore(counterReducer)
