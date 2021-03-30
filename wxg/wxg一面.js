/*
 * 1. 实现一个函数，接受数组作为参数，数组元素为整数或者数组（数组里面还可能有数组），函数返回扁平化后的数组。要求给出不使用递归、不使用字符串处理的解法
 * 如：输入 [1, [2, [ [3, 4], 5, []], 6]]，输出 [1, 2, 3, 4, 5, 6]
 */
function flatten(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(cur)
    }, [])
}
console.log(flatten([1, 2, 3, [4, 5, 6], 7, 8, [9]]))

/*
 * 2. 假设有一个升序数组，经过不确定长度的偏移，得到一个新的数组，我们称为循环升序数组。（例：[0,3,4,6,7] 可能变成 [6,7,0,3,4]）。给定一个数字和一个循环升序数组，
 * 判断这个数字是否在这个数组内，在的话返回 true，否则返回 false。要求时间复杂>度 O(logN)
 *
 * 示例 1：
 * 输入：nums = [6,7,0,3,4], target = 0
 * 输出：true
 *
 * 示例 2：
 * 输入：nums = [6,7,0,3,4], target = 2
 * 输出：false
 */
function search(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = left + (right - left) / 2
        if (arr[mid] === target)
            return true
        if (arr[mid] >= arr[0]) {
            if (target)
        } else {

        }
    }
    return false
}

/*
 * 3. 设计一个函数，用于测试请求一个 URL 的平均耗时。要求可以设置总的请求次数以及并发请求个数。假设环境是小程序，使用的接口是 wx.request ，不考虑请求失败的情况。
 *
 * @synopsis  测试网络请求平均耗时
 *
 * @param URL 请求的地址
 * @param count 请求的总次数，取值范围 >= 1
 * @param concurrentCount 并发请求限制个数（即最多只能同时发起多少个请求）。取值范围 >=1
 *
 * @returns 一个 Promise 对象，resolve 平均耗时
 */

// wx.request 调用示例
// wx.request({ 
//  url: 'https://qq.com',
//  success() {
//    // 请求完成  
//  }
// })
async function request_test(url, count, concurrentCount) {

}