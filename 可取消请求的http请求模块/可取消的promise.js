//通用方法

//暴露取消 Promise 的接口
let cancelReq = null

//暴露 request 接口

function request(reqArgs) {
    return new Promise((resolve, reject) => {
        //通过延时代码来模拟异步 http 请求
        setTimeout(() => {
            resolve('result message')
        }, 2000)
        cancelReq = function() {
            resolve('请求被取消了')
            cancelReq = null
        }
    })
}