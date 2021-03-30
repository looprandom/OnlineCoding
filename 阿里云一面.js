/* 问题：/* --------- 数组去重 ----------- */
function fn(arr){
  let c = {}
  let res = []
  for(let i = 0;i < arr.length;i++){
    	if(!c[arr[i]]){
          	res.push(arr[i])
			c[arr[i]] = true
        }
  }
  return res
}

// 请实现一个 JavaScript 事件总线。

// 要求：
// 1. 支持事件分发、订阅、取消订阅等基本功能
// 2. 支持事件队列
// 3. 其他你认为必要的功能
// 4. 实现API及核心代码即可

class Event(){
  	constructor(){
      	this.event = {}
    }
  	add(event_name,fn){
      	this.event[event_name] ? this.event[event_name].push(fn) : this.event[event_name].push([fn])
    }
  	triger(event_name){
      if(this.event[event_name]){
        	for(let i = 0;i < this.event[event_name].length;i++)
              	this.event[event_name][i]()
      }
    }
  dele(event_name){
    delete this.event[event_name]
  }
}