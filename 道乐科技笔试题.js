// 前端优化的方案有哪些
//实现深拷贝，考虑函数，循环引用的问题(禁止使用json序列化)
const isComplexType = obj => (typeof obj === 'obj' || typeof obj === 'function') && (obj !== null)

function deepClone(obj, hash = new WeakMap()) {
    if (obj.constructor === Date)
        return new Date(obj)
    if (obj.constructor === RegExp)
        return new RegExp(obj)

}

/*
现在按照一定顺序发起去进行第三方渠道授权的多个异步网络
请求(未知数量,需设置数组)，但是每个网络请求，如果报错了
或者失败了有多次重新请求本网络请求的机会(次数可设置)，
直到当前网络请求节点的次数用完了，才算整个授权调用链失败，
需要封装成一个函数，返回Promise可知道整体的调用链的完成情况以及
每个节点的数据
*/
//把获取数据封装成promise的形式
let count = 0

function getData() {
    return new Promise((resolve, reject) => {
        let random = Math.random()
        setTimeout(() => {
            if (random < 0.5)
                resolve(count++)
            else
                reject('error')
        })
    })
}

//async方式 假设请求的数量
async function getAllData(num) {
    let res = []
    for (let i = 0; i < num; i++) {
        try {
            res.push(await getData())
            break
        } catch (e) {
            if (i === num - 1)
                throw 'error'
        }
    }
    for (let i = 0; i < num; i++) {
        try {
            res.push(await getData())
            break
        } catch (e) {
            if (i === num - 1)
                throw 'error'
        }

    }
    for (let i = 0; i < num; i++) {
        try {
            res.push(await getData())
            break
        } catch (e) {
            if (i === num - 1)
                throw 'error'
        }
    }
    return res
}

getAllData(2).then(res => console.log(res), err => console.log(err))