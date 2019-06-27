import Notice from '@/components/Notice.vue';
import Vue from 'vue';

// 给Notice添加一个创建组件实例的方法，可以动态编译自身模板并挂载
Notice.getInstance = props => {
    // 创建一个vue实例，来托管这个Notice
    const instance = new Vue({
        // render就是用来渲染虚拟节点的方法
        // h===createElement
        render(h) {// 渲染函数:用于渲染指定模板为虚拟DOM
            // <Notice foo="bar"> props用于处理属性 foo="bar"
            return h(Notice, {props});
        }
    }).$mount();// 执行挂载，若不指定选择器，则模板将被渲染为文档之外的元素

    // 必须使用原生dom api把它插入文档中
    // $el指的是渲染的真实dom元素 ----#alert
    document.body.appendChild(instance.$el);

    // 获取notice实例，$children指的是当前Vue实例中包含的所有组件实例的数组
    // instance这个是vue实例，$children[0]这个是notice组件（被instance管理的组件）
    const notice = instance.$children[0];
    return notice;
}

// 设计单例模式，全局范围唯一创建一个Notice实例
let msgInstance = null;

function getInstance() {
    msgInstance = msgInstance || Notice.getInstance();
    return msgInstance;
}

// 暴露接口
export default {
    info({duration = 2, content = ''}) {
        getInstance().add({
            content,duration
        })
    }
}

// 挂载：就是让虚拟Dom和真实Dom之间产生对应关系

// 这个新的vue 是管理员
// Notice是Vue管理的根组件，Notice类比App组件
// instance是vue 的实例所以是 管理员
// instance.$children这是组件实例们
// 虚拟dom:就是和真实dom一一对应的js对象

// 单例模式：在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例，避免对资源的多重占用
