/*
基于 fetch API 封装的 request 接口，封装简单，只为说明问题；
返回的数据格式兼容基于 axiosRequest 的示例代码
*/
const baseURL = 'http://localhost:3000'

function request(reqArgs) {
    //接口返回的数据格式是为了兼容axios的示例代码
    return fetch(baseURL + reqArgs.url).then(async response => ({ data: await response.json() }))
}