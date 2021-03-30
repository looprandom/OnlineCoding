// 模拟请求
let count = 1
async function fetch(url){
    return await new Promise((resolve,reject) => {
        setTimeout(resolve('data' + count++),1000)
    })
}

async function wrapper(fetch){
    let task = []
    return  function(){

    }
}