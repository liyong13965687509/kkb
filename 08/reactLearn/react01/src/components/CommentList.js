import React, {Component, PureComponent} from 'react';


// 展示组件
// shouldComponentUpdate---在组件接收到新的props或者state时被调用
// class Comment extends PureComponent {
//     // 在组件接收到新的props或者state时被调用
//     // shouldComponentUpdate(nextProps) {
//     //     if(nextProps.data.body===this.props.data.body&&
//     //         nextProps.data.author===this.props.data.author){
//     //         return false;
//     //     }
//     //     return true;
//     // }
//
//     render() {
//           console.log('render')
//           return (
//               <div>
//                   <p>{this.props.body}</p>
//                   <p>------{this.props.author}</p>
//               </div>
//           )
//       }
// }
const Comment = React.memo(
    ({body, author}) => {
        console.log('render');
        return (
            <div>
                <p>{body}</p>
                <p>------{author}</p>
            </div>
        );
    }
);


// 容器组件
class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };
    }

    // 在第一次渲染后调用，只在客户端
    componentDidMount() {
        setInterval(() => {
            this.setState({
                comments: [
                    {body: 'react is very good', author: 'facebook'},
                    {body: 'vue is very good', author: 'youyuxi'},
                ]
            })
        }, 1000)

    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map((c, i) =>
                        (
                            <Comment key={i} {...c}></Comment>
                        )
                    )
                }
            </div>
        );
    }
}

export default CommentList;
