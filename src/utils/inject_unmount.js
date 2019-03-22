function inject_unmount (target) {
  let next = target.prototype.componentWillUnmount
    target.prototype.componentWillUnmount = function(){
        if(next) next.call(this,...arguments)
        this.unmount = true   // 表示已经卸载
    }
 
    let setState = target.prototype.setState
    // 每次在执行setState之前都查看该组件是否已经销毁
    target.prototype.setState = function () { 
        if(this.unmount) return  // 已经卸载的话就不执行
        setState.call(this,...arguments)   
    }
}
export default inject_unmount
 
// @inject_unmount  在需要使用的组件前 引入就行