import React from 'react';
import ReactDOM from 'react-dom';
// import CartSample from "./CartSample";
// import App from './App';
// import CommentList from "./components/CommentList";
// import Composition from "./components/Composition";
import Hoc from "./components/Hoc";
// import Lifecycle from "./Lifecycle";


// ReactDOM.render(<h1>React真好用</h1>,document.querySelector('#root'));
// ReactDOM.render(<App/>,document.querySelector('#root'));
// ReactDOM.render(<Lifecycle/>,document.querySelector('#root'));
// ReactDOM.render(<CartSample title="react购物车"/>,document.querySelector('#root'));

// ReactDOM.render(<CommentList/>, document.querySelector('#root'));
// ReactDOM.render(<Composition/>, document.querySelector('#root'));
ReactDOM.render(<Hoc stage="React"/>, document.querySelector('#root'));

// let someProp='some value';
// // 动态渲染
// function tick() {
//     ReactDOM.render(<Lifecycle prop={someProp}/>,document.querySelector('#root'));
//
//     // ReactDOM.render(<h2>{new Date().toLocaleTimeString()}</h2>,document.querySelector('#root'));
// }
//
// setInterval(tick,1000);


