/*
给定一个数组代表股票每天的价格，请问只能买卖一次的情况下，
最大化利润是多少？日期不重叠的情况下，可以买卖多次呢？
 输入: 【100, 80, 120, 130, 70, 60, 100, 125】
只能买一次：65（60 买进，125 卖出）
可以买卖多次: 115（80买进，130卖出；60 买进，126卖出）
*/

function fn1(arr) {
    let res = 0
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > min) {
            res = Math.max(res, arr[i] - min)
        } else {
            min = arr[i]
        }
    }
    return res
}
console.log(fn1([100, 80, 120, 130, 70, 60, 100, 125]))

function fn2(arr) {
    let res = 0
    for (let i = 1; i < arr.length; i++) {
        res += Math.max(0, arr[i] - arr[i - 1])
    }
    return res
}

function fn2(arr) {
    let dp = Array(arr.length)
}
console.log(fn2([100, 80, 120, 130, 70, 60, 100, 125]))

// var a = function() {
//     console.log(this)
//     this.b = 3;
// }
// a.prototype.b = 9;
// var c = new a();
// var b = 7;
// a();0
// console.log(b)
// console.log(c.b)

console.log(this)

new File().slice(0)