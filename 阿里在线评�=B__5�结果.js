/**
 * 已知有如下 DOM 结构：
 * <ul id="J_CityList">
 * </ul>
 * 请使用原生 JS 在 <ul> 下新建 5 个 li 标签；并在点击 li 后，触发 alert(index)，其中 index 是 li 的编号
 */
let ul = document.getElementById('J_CityList')
for (let i = 1; i <= 5; i++) {
    let li = document.createElement('li')
    li.addEventListener('click', () => alert(i))
    ul.appendChild(l1)
}

/**
 * 给 Array 对象增加一个【原型】方法，用于删除数组条目中重复的条目(可能有多个，只需考虑字符串类型)，
 * 返回值是一个包含被删除的重复条目的新数组。
 */
Array.prototype.toSet = function() {
    let self = this
    let set = new Set()
    for (let i = 0; i < self.length; i++)
        set.add(self[i])
    return Array.from(set)
}

/**
 * 实现一个深拷贝函数 deepClone
 */
function deepClone(obj) {
    let cloneObj = {}
    for (let key in obj) {
        if (typeof obj === 'object') {
            cloneObj[key] = deepClone(obj[key])
        } else {
            cloneObj[key] = obj[key]
        }
    }
    return cloneObj
}

/**
 * 输入 YYYY-MM-DD 输出 2020-01-01（当前日期）
 * 输入 YYYY/MM/DD 输出 2020/01/01（当前日期）
 * 【可选】输入： YYYY-MM-DD QQ， 输出： 2020-01-01 第一季度（当前日期）
 */
function date(param) {}

/*
  实现一个函数，能将输入的特定的字符串转化为特定的结构化数据。
  字符串仅由小写字母、|、[ 和 ] 组成，且字符串不会包含多余的空格。
  示例一: 'abc' --> {value: 'abc'}
  示例二：'[abc[bcd[def|xxx]]]' -> {value: 'abc', children: [{value: 'bcd', children: [{value: 'def'}, {value: 'xxx'}]}]}
*/
function helper(str) {
    let res = {}
    str = str.splice(0, 1).splice(str.length - 1, 1)

}