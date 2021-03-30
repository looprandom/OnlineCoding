/**
 * 主题：React 相关
 * 高亮字符串中的指定字符片段
 * returns{ReactElement}
 **/
// 例如：highlight('中国杭州西湖', '杭州')

/** 
 * 主题：原生 JS
 * 请使用 setTimeout 和 clearTimeout 实现 setInterval 和 clearInterval（myInterval, myClearInterval）
 */
let timeouts = {}
let count = 0
myInterval = function(fn, delay = 0) {
    let id = count++
        let f = () => {
            timeouts[id] = setTimeout(() => {
                fn()
                f()
            }, delay)
        }
    f()
    return id
}

clearInterval = function(timeoutId) {
    clearTimeout(timeouts[timeoutId])
    delete timeMap[id]
}


/**
 * 请您设计一个为字符串脱敏的函数，要求将字符串的中间「5个字符」使用用 * 号代替
 * 输入1：'13912345678'，输出为：'139*****678' 
 * 输入2：'阿里巴巴'，输出为：'****' // 4个 * 号
 */
function help(str) {
    let mid = Math.floor((str.length - 1) / 2)
    return str.length < 5 ? '*'.repeat(str.length) : str.splice(mid - 2, 5, '*', '*', '*', '*', '*')
}

/**
 * 请自己动手实现一个模板字符串的功能
 * 输入为：const arg1 = '我在${a.b}';  const arg2 = {a: { b:'中国杭州'}};  
 */
function fn(str) {
    let pattern = /^\$({*})$/
    return str.replace(pattern, JSON.parse('$1'))
}

/**
 * 输入 YYYY-MM-DD 输出 2020-01-01（当前日期）
 * 输入 YYYY/MM/DD 输出 2020/01/01（当前日期）
 * 【可选】输入： YYYY-MM-DD QQ， 输出： 2020-01-01 第一季度（当前日期）
 */
function fn(str) {
    let arr = str.indexof('-') !== -1 ? str.split('-') : str.split('/')
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMouth()
    let day = date.getDate()
    return [year, month, day].join(str.indexof('-') !== -1 ? '-' : '/')
}

function fn(str) {
    let p = str.indexof('-') !== -1 ? '-' : '/'
    return new Date().toLocaleString().split('')[0].replace('-', p)
}
/**
 * 反序列化数组到对象
 * 具体描述：给定一个数组，将其按特定规则反序列化为对象
 * 示例：
 * deserialization([0, 'a', 1, 'b', 2, 'c', 3, 'e', 2, 'd', 1, 'x', 0, 'ff']) => 
 * {
 *   a: {
 *     b: {
 *       c: {
 *         e: null
 *       },
 *       d: null
 *     },
 * 	   x: null
 *   },
 *   ff: null
 * }
 */
function fn(arr) {
    let res = {}
    for (let i = 0; i < arr.length; i += 2) {

    }
}