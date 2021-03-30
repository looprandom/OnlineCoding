/*
基于 XMLHttpRequest API 封装的 request 接口，封装简单，只为说明问题；
返回的数据格式兼容基于 axiosRequest 的示例代码
*/

const baseURL = 'http://localhost:3000'
const xhr = new XMLHttpRequest()

function request(reqArgs) {
    return new Promise((resolve, reject) => {
        xhr.onload = function() {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                //接口返回的数据格式是为了兼容axios的示例代码
                resolve({ data: xhr.responseText })
            } else {
                reject(xhr.status)
            }
        }
        xhr.open(reqArgs.method || 'get', baseURL + reqArgs.url, true)
        xhr.send(reqArgs.data || null)
    })
}