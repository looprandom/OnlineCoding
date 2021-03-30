//1 最大子串
function getMax(arr) {
    let dp = Array(arr.length)
    dp[0] = arr[0]
    for (let i = 1; i < arr.length; i++) {
        dp[i] = Math.max(arr[i], dp[i - 1] + arr[i])
    }
    return dp[arr.length - 1]
}
console.log(getMax([1, -2, 3, -4, -1, 2, 9])) //11

/*
    const arr = [[1,2,2],[3,4,5,5],[6,7,8,9],[11,12,[12,13,[14]]]],10]
    输出[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
*/
function flattenS(arr) {
    return [...new Set(arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flattenS(cur) : cur)
    }, []))].sort((a, b) => a - b)
}

function below(arr) {
    return [...new Set(arr.flat(Infinity))].sort((a, b) => a - b)
}
console.log(flattenS([
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
]))
console.log(below([
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
]))

Array.prototype.map = function(cb) {
    // return this.reduce(function(pre, cur, index, arr) {
    //     pre.push(cb(cur, index, arr))
    //     return pre
    // }, [])

    let res = []
    this.forEach(function(...args) {
        res.push(cb(...args))
    })
    return res
}
console.log([1, 2, 3].map(a => a * 2))