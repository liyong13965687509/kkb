const History = {
    _history: [],//历史记录堆栈
    install(Vue) {
        // 提供Vue插件所需安装方法
        Object.defineProperty(Vue.prototype, '$routerHistory', {
            get() {
                return History;
            }
        })
    },
    push(path) {// 入栈操作
        this._history.push(path);
    },
    pop() {// 出栈操作
        // 删除数组中一项
        this._history.pop();
    },
    canBack() {
        // 判断还能不能后退，以确定头部的后退还要不要出现
        return this._history.length > 1;
    }

}

export default History;

