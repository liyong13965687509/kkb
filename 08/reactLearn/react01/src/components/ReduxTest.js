import React, {Component} from 'react';

// import store from '../store'

import {connect} from 'react-redux'
import {add, minus, asyncAdd} from "../store/counter.redux";

// const mapStateToProps = state => ({num: state});
// const mapDispatchToProps = dispatch => ({
//     add: () => dispatch({type: 'add'}),
//     minus: () => dispatch({type: 'minus'})
// });
// @connect(mapStateToProps,mapDispatchToProps)
@connect(
    state => ({num: state.counter}),// 状态映射
    {add, minus, asyncAdd}// 派发的动作/方法
)
class ReduxTest extends Component {
    render() {
        return (
            <div>
                <p>{this.props.num}</p>
                <div>
                    <button onClick={() => this.props.minus()}>-</button>
                    <button onClick={() => this.props.add()}>+</button>
                    <button onClick={() => this.props.asyncAdd()}>asyncAdd</button>
                </div>
            </div>
        );
    }
}

// export default ReduxTest;


// const mapStateToProps = state => ({num: state});
// const mapDispatchToProps = dispatch => ({
//     add: () => dispatch({type: 'add'}),
//     minus: () => dispatch({type: 'minus'})
// });

export default ReduxTest;
