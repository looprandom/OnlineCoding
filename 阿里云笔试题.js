//阿里云
// 请尽量在半小时内完成作答

// ====================
// 题目：为字符串原型增加 reverse() 方法，调用后将自己倒序返回
// 代码写在这里↓↓↓↓↓

String.prototype.reverse = function() {
    return this.split("").reverse().join("");
}

// 代码写在这里↑↑↑↑↑
console.log("123".reverse()); // "321"

// ====================
// 题目：有一个数组，里面只存在 * 和 字母，如 ['*', 'd', 'c', '*', 'e']。
// 实现一个函数把这个数组中的所有星号移动到左边，所有的字母移动到右边，所有字母的顺序不能改变。
function move(array) {
    // 代码写在这里↓↓↓↓↓
    let len = array.length;
    for (let i = len; i >= 0; i--) {
        if (arr[i] === '*') {
            arr.splice(i, 1);
            arr.push('*');
        }
    }
    return array;
    // 代码写在这里↑↑↑↑↑
}
const arr = ['*', 'd', 'c', '*', 'e'];
move(arr);
console.log(arr); // ['*', '*', 'd', 'c', 'e']

// ====================
// 题目：将字符串转为驼峰格式
function change(string) {
    // 代码写在这里↓↓↓↓↓
    let arr = string.split('-');
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toLocaleUpperCase() + arr[i].slice(1);
    }
    // 代码写在这里↑↑↑↑↑
    return arr.join("");
}
console.log(change("border-bottom-color")); // 输出 borderBottomColor
console.log(new Date().toLocaleString())
    // ====================
    // 题目：实现一个函数，比较两个版本号的大小。返回 1（大于）/0（等于）/-1（小于）
function compareVer(ver1, ver2) {
    // 代码写在这里↓↓↓↓↓
    let arr1 = ver1.split('.');
    let arr2 = ver2.split('.');
    while (arr1.length && arr2.length) {
        let num1 = parseInt(arr1.shift());
        let num2 = parseInt(arr2.shift());
        if (num1 > num2) return 1
        else if (num1 < num2) return -1;
    }
    // if(!arr1.length && !arr2.length) return 0;
    // if(!arr1.length) return -1;
    return 0;
    // 代码写在这里↑↑↑↑↑
}
console.log(compareVer("1.0.20", "1.1.0")); // 1.0.20 < 1.1.0 返回 -1
console.log(compareVer("1.0.20", "1.0.3")); // 1.0.20 > 1.0.3 返回 1

// ====================
// 题目：实现一个函数，效果同 document.getElementById（通过遍历 node.childNodes 和 node.id 属性实现）
function getElementById(findId) {
    // 代码写在这里↓↓↓↓↓

    let body = document.body;
    return findNode(body);

    function findNode(node) {
        if (!node) return false;
        //node.childNodes 是动态的，频繁查询性能低
        for (const child of Array.from(node.childNodes)) {
            if (child.id == findId) return child;
            let dom = findId(node);
            if (dom) return dom;
        }
        return null;
    }
    // 代码写在这里↑↑↑↑↑
}

//实现一个斐波那契数列
function fn(n) {
    let dp = Array(n)
    dp[0] = 0
    dp[1] = 1
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp
}

//实现一个数组扁平化的函数
function flatten(list) {
    return list.reduce((a, b) => a.concat(b), [])
}

//非递归后序遍历
var postorderTraversal = function(root) {
    if (root === null)
        return []
    let stack = [];
    let res = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop()
        res.unshift(node.val)
        if (node.left)
            stack.push(node.left)
        if (node.right)
            stack.push(node.right)
    }
    return res
};

//非递归前序遍历
var preorderTraversal = function(root) {
    if (root === null) return []
    let res = []
    let stack = []
    stack.push(root)
    while (stack.length) {
        let node = stack.pop()
        res.push(node.val)
        if (node.right)
            stack.push(node.right)
        if (node.left)
            stack.push(node.left)
    }
    return res
};