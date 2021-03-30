/*
题目描述：
给定一组词组，每个词组包含id和字符串的映射，现输入另一组词组，要求找出新的词组与老的词组的diff关系，diff要求如下：
1、id相同且字符串相同的两个词组视为相同
2、id相同，且字符串不同的输出modify+id
3、新的词组id在老的词组id中不存在的，视为新增，输出add+id
4、老的词组id在新的词组id中不存在的，视为删除，输出delete+id


输入描述
第一行代表老的词组，第二行代表新的词组

每一行是id-字符串的组合，多个词组以逗号分隔

如：1-a,2-b,3-c
输出描述
一个字符串，多个结果按字符串排序后（直接使用string的compareTo方法比较大小即可）以逗号分隔，如：add-2,delete-22
*/
function p(arr1, arr2) {
    arr1 = arr1.split(',')
    arr2 = arr2.split(',')
    let res = []
    let map1 = new Map()
    let map2 = new Map()
    for (let i = 0; i < arr1.length; i++) {
        let tmp = arr1[i].split('-')
        map1.set(tmp[0], tmp[1])
    }
    for (let i = 0; i < arr2.length; i++) {
        let tmp = arr2[i].split('-')
        map2.set(tmp[0], tmp[1])
    }
    //找id相同的
    for (let id of map1.keys()) {
        if (map2.has(id)) {
            if (map1.get(id) !== map2.get(id)) {
                res.push('modify-' + id)
            }
            map1.delete(id)
            map2.delete(id)
        }
    }
    //map1中现存的都是需是delete
    for (let id of map1.keys()) {
        res.push('delete-' + id)
    }
    for (let id of map2.keys()) {
        res.push('add-' + id)
    }
    console.log(res.sort().toString())
}
p('1-a,2-b,3-c,5-p', '1-a,2-bb,3-c,4-h')

/* 
假设有一个矩阵，矩阵由 0 和 1 数字组成。其中1代表这个节点可达，0代表这个节点不可达，从左上角第一个节点出发到右下角最后一个节点，只能上下左右移动，初始节点数为 1，移动一步节点数加 1，问最少需要经过多少节点可以达到。

请实现计算最短路径的函数。如果不可达返回0。

举例1、

输入：1

输出：1

 

举例2、

输入：1,1

输出：2

 

举例3、

输入：1,0;1,0

输出： 0



输入描述
矩阵数组，每行之间用”;"分隔，同一行内用","分隔

输出描述
返回最短距离


样例输入
1,0,1,1;1,1,1,1;1,1,0,1;0,0,0,1
样例输出
7

*/
function u(arr) {
    arr = arr.split(';')
    arr = arr.map((item) => item.split(','))
    console.log(arr)
    let m = arr.length
    let n = arr[0].length
    let res = Infinity

    dfs(0, 0, 0)
    return res === Infinity ? 0 : res

    function dfs(i, j, step) {
        if (i >= m || j >= n || i < 0 || j < 0 || arr[i][j] == 0)
            return
        if (i === m - 1 && j === n - 1) {
            res = Math.min(res, step + 1)
        }
        arr[i][j] = 0
        dfs(i + 1, j, step + 1)
        dfs(i - 1, j, step + 1)
        dfs(i, j + 1, step + 1)
        dfs(i, j - 1, step + 1)
        arr[i][j] = 1
    }
}
console.log(u('1,0,1,1;1,1,1,1;1,1,0,1;0,0,0,1'))
    /*题目描述：
    在便利店中顾客的结账时间是很重要的指标。结账时间由排队等待时间，和顾客操作付款时间两部分组成。

    程序输入为顾客列表 customers，每一位顾客 customer[i] 包含两个数值 arriveTime, payDuration。

    arriveTime 表示顾客挑选完商品去结账的时刻；

    payDuration 表示顾客操作付款的时间。

    请计算所有顾客的总结账时间。



    输入描述
    第一行：总顾客数

    剩余行：每位顾客的 arriveTime, payDuration。

    如：

    3

    1,2

    2,5

    4,3

    第一位顾客在时刻 1 到达，付款耗时 2。结账时间为 2；

    第二位顾客在时刻 2 到达，等待顾客 1 结账完成，在时刻 3 开始付款，付款耗时 5。结账时间为 6；

    第三位顾客在时刻 4 到达，等待顾客 2 结账完成，结账时间为 7；

    共计 2 + 6 + 7 = 15。

     

    每一行的数据按照 arriveTime 递增顺序排列。如果两位顾客 arriveTime 相同，排在前面的顾客先结账。

    最终输出结果不超过 2^31 - 1；arriveTime 取值范围为 [1, 2^63 - 1] 间的正整数；payDuration 取值范围为 [1, 2^31 - 1] 间的正整数。
    */
console.log(fn3(3, [
    [1, 2],
    [2, 5],
    [4, 3]
]))

function fn3(len, arr) {
    arr.sort((a, b) => a[0] - b[0])
    let next_time = 0
    return arr.reduce((sum, cur) => {
        let wait_time = next_time < cur[0] ? 0 : next_time - cur[0]
        next_time = next_time + cur[1] + (next_time < cur[0] ? cur[0] - next_time : 0)
        return sum + wait_time + cur[1]
    }, 0)
}