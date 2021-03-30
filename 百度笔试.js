// function fn(arr, val) {
//     let dp = Array(val + 1).fill(val + 1)
//     dp[0] = 0
//     let res = []
//     for (let i = 0; i < dp.length; i++) {
//         let tmp = arr[0]
//         for (let co of arr) {
//             if (i - co < 0) {
//                 continue
//             }
//             dp[i] = Math.min(dp[i], 1 + dp[i - co])
//             tmp = co
//         }
//         res.push(tmp)
//     }
//     return {
//         val: dp[val] === val + 1 ? -1 : dp[val],
//         res
//     }
// }
function fn(coins, amount) {
    let res = Infinity
    coins.sort((a, b) => b - a)
    var d = (amount, index, count) => {
        if (amount === 0) return res = Math.min(res, count)
        if (index === coins.length) return
        for (let n = amount / coins[index] | 0; count + n < res && n >= 0; n--) {
            d(amount - n * coins[index], index + 1, count + n)
        }
    }
    return d(amount, 0, 0), res === Infinity ? -1 : res
}
console.log(fn([1, 2, 9, 5], 10))

function fn4(str) {
    return eval(str)
}
console.log(fn4('1+3+82*9-8'))


// let str = readline()
// print(fn5(str))
let map = { '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9 }

function fn5(str) {
    let res
    str.includes('万') ? res = getVal(str.split('万')[0]) * 10000 + getVal(str.split('万')[1]) :
        res = getVal(str)
    return res
}

function getVal(str) {
    let a = str.includes('千') ? map[str.split('千')[0]] * 1000 : 0
    str = str.includes('千') ? str.split('千')[1] : str
    let b = 0
    if (str.length == 1) {
        b = map[str] * 100
        str = ''
    } else if (str.includes('百')) {
        b = map[str.split('百')[0]] * 100
    }
    str = str.includes('百') ? str.split('百')[1] : str
    let c = 0
    if (str) {
        if (str.split('十').length == 1 && str[0] !== '十' && str[0] !== '零') {
            c = map[str] * 10
            str = ''
        } else if (str[0] == '十') {
            c = 10
        } else if (str[0] !== '零') {
            c = map[str.split('十')[0]] * 10
        }
    }
    str = str.includes('十') ? str.split('十')[1] : str
    let end = str[str.length - 1]
    let d = (end && end !== '千' && end !== '百' && end !== '十') ? map[end] : 0
    console.log(a, b, c, d)
    return a + b + c + d
}

console.log(getVal('一千六百五十'))