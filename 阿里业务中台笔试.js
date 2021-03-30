//评测题目: 实现一个发布订阅者模块，包含三个方法，subscribe订阅事件，unsubscribe取消订阅，publish发布事件

// 准备好了就开始哈

class Fa{
  construcor(){
    this._event = {}
  }
  subscribe(event_name,listener){
    let events = this._event
    //这里检查到没有才初始化ko
    let listeners = events[event_name] = events[event_name] || []
    if(listeners.indexOf(listener) !== -1){
      	listeners.push(listener)
    }
    return listener //这样？继续写全来
  }
  publish(event_name,args){
    	let listeners = this._events[event_name]
        if(!listeners) return // 这里的判断是不是有点问题
        // listeners 应该是数组  ![] 是 true还是 false?  不是吧
        //这里可能是undefined 或 [] 才对
        // ok 是这样的
        for(let i = 0;i < listeners.length;i++){
          	listeners[i].apply(this,args || [])
        }
  }
  // 如何取消订阅一个匿名回调
  unsubscribe(event_name,listener){
    let listeners = this._events[event_name]
    if(!listeners) return
    let index
    for(let i = 0;i < listeners.length;i++){
      	if(listeners[i] === listener){
          index = i
          break
        }
    }
    if(typeof index !== 'undefined'){
      listeners.splice(index,1)
    }
  }
}
// 比如
const events = new Fa(); // Fa是什么。。。
let callback = events.subscribe('eventA', () => {
	// do sth
});
events.unsubscribe('eventA',callback) //行吗？
// 如何取消订阅上述的事件
//你写下代码，如何取消？
//外部拿不到函数的引用...如何从api层面设计
// ok 可以的，今天笔试就到这里 好的感谢