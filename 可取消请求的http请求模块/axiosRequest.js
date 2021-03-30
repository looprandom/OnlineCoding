/*基于 Axios 封装的 request 接口，
可以根据自己的业务需要去扩展，
一般是在两个拦截的地方去做一些扩展*/
const baseURL = 'http://localhost:3000'
const ins = axios.create({
    baseURL,
    timeout: 10000
})
ins.interceptors.request.use(config => {
    //拦截请求，可以在这里自定义一些配置，比如token
    return config
})
ins.interceptors.response.use(config => {
    //拦截响应，可以根据服务端返回的状态码做一些自定义的响应和信息提示
    return response
})

function request(reqArgs) {
    return ins.request(reqArgs)
}