// 扫描模板中的所有依赖创建更新函数和watcher

class Compile {
    // el是宿主元素或选择器
    // vm是当前vue的实例
    constructor(el, vm) {
        this.$vm = vm;
        this.$el = document.querySelector(el);// 默认el是选择器

        if (this.$el) {
            // 将dom节点转换成代码块fragment提高执行效率
            this.$fragment = this.node2Fragment(this.$el);
            // 执行编译
            this.compile(this.$fragment);
            //将生成的结果追加至宿主元素
            this.$el.appendChild(this.$fragment);
        }
    }

    node2Fragment(el) {
        // 创建一个新的Fragment
        const fragment = document.createDocumentFragment();//创建一个空片段
        let child;
        // 将原生节点拷贝至fragment
        while ((child = el.firstChild)) {
            // appendChild是移动操作，移动一个少一个
            fragment.appendChild(child);
        }
        return fragment;

    }

    // 编译指定片段
    compile(el) {
        let childNodes = el.childNodes;
        Array.from(childNodes).forEach(node => {
            // 判断node类型，做响应处理
            if (this.isElementNode(node)) {
                //元素节点要识别k-xx或@xx
                this.compileElement(node);
            } else if (this.isTextNode(node) && /\{\{(.*)\}\}/.test(node.textContent)) {
                //文本节点，只关心{{xx}}格式
                this.compileText(node, RegExp.$1);//RegExp.$1匹配内容
            }

            // 遍历可能存在的子节点
            if (node.childNodes && node.childNodes.length) {
                this.compile(node);
            }
        })
    }

    // 编译元素节点
    compileElement(node) {
        console.log('编译元素节点');
        //<div k-test='test' @click='onClick'></div>
        const attrs = node.attributes;
        // Array.from()将类数组元素转换成数组进行遍历：最基本的要求就是具有length属性的对象。
        Array.from(attrs).forEach(attr => {
            //规定指令k-text='test' @click='onClick'
            const attrName = attr.name;// 属性名k-text
            const exp = attr.value;// 属性值test
            if (this.isDirective(attrName)) {// 指令text
                const dir = attrName.substr(2);//text
                this[dir] && this[dir](node,this.$vm,exp);
            } else if(this.isEventDirective(attrName)){// 事件
                const dir = attrName.substr(1);//click
                this.eventHandler(node,this.$vm,exp,dir);
            }

        })

    }

    // 指令判断
    isDirective(attr){
        return attr.indexOf('k-')==0;
    }

    // 事件判断
    isEventDirective(attr){
        return attr.indexOf('@')==0;
    }

    // 文本更新
    text(node,vm,exp){

    }
    //事件处理
    eventHandler(){

    }

    // 编译文本节点
    compileText(node,exp) {
        // console.log('编译文本节点');
        this.text(node,this.$vm,exp);

    }

    isElementNode(node) {
        return node.nodeType == 1;//元素节点
    }

    isTextNode(node) {
        return node.nodeType == 3;//文本节点
    }

}


// 非html而是vue提供的功能都叫依赖
