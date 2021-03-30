// 3 3
// 1 2 3
// 4 5 6
// 7 8 9

// 1 4 7
// 2 5 8
// 3 6 9

// He15l154lo87wor7l87d -> [15,154,87,7,87]
//提取字符串中的数字
console.log(fn2('H.e.15-015l15.4lo87wor7l+87d15.'))
    /*[
        15,  -15,
      15.4,   87,
         7,   87,
        15
    ]*/

function fn2(str) {
    let num = ''
    let res = []
    for (let i = 0; i < str.length; i++) {
        if (isNum(str[i])) {
            num += str[i]
        } else if (str[i] === '+' && num) {
            res.push(parseFloat(num))
            num = ''
        } else if (str[i] === '-') {
            if (num) {
                res.push(parseFloat(num))
            }
            num = '-'
        } else if (str[i] === '.' && num) {
            num += str[i]
        } else if (num) {
            res.push(parseFloat(num))
            num = ''
        }
    }
    if (num) res.push(parseFloat(num))
    return res
}

function isNum(str) {
    for (let i = 0; i < 10; i++) {
        if (parseInt(str) === i)
            return true
    }
    return false
}

// 7
// 15
// 87
// 87
// 154
// 固定区间滑动找众数，多个众数取最小值
//输入
// 5 3
// 1 2 2 1 3
//输出
// 2
// 2
// 1
function fn3(arr, k) {
    let res = []
    let map = []
    for (let i = 0; i < k; i++) {

    }
}

function min(map) {
    for ()
}

function getMax(map) {

}