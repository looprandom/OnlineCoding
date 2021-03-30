//1 手写JSONP
function JSONP(url, query, callback_name) {
    let head = document.getElementsByTagName('head')[0]
    let js = document.createElement('script')
    let qu = '?'
    for (let key in query) {
        qu += key + String(query[key]) + '&'
    }
    qu += `callback=${callback_name}`
    js.scr = url + qu
    head.appendChild(js)
}
//2 特征数据转成一个树

//3 基于链表实现push和shift
function linkList() {
    this.head = new Node(0)
    this.tail = head
    this.size = 0
}
linkList.prototype.push = function(val) {
    this.tail.next = new Node(val)
    this.tail = this.tail.next
    this.size++
}
linkList.prototype.shift = function(val) {
    let next = this.head.next
    this.head.next = new Node(val)
    this.head.next.next = next
    this.size++
}

function Node(val) {
    this.val = val
    this.next = null
}
let head = new Node(0)
    /*
    4 写timeFormat函数 包含占位符解析
    如timeFormat(new Date().getTime(),'YYYY-MM-DD hh:mm') 2021-02-26 14:02
    思路：一遍扫描。用词法分析的思想，YYYY MM DD 这些就是关键词。识别关键词替换成对应的值
    */

/*
5 实现一个随输随搜的搜索框
*/

//6 手写防抖节流
function debounce(fn, wait = 0) {
    let timeout = null
    let args

    function debounced(...arg) {
        args = arg
        if (timeout) {
            clearTimeout(timeout)
            timeout = null
        }
        timeout = setTimeout()
    }
}