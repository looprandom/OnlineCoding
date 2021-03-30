//1.0.3   1.2.4
//1.2.3.1  1.2.3
//1.2.α  1.2.β      α>β
//1.2.α  1.2.β      1.2.@
//1.α.1  1.2.β      α>数字>β
function fn(root) {
    if (root === null)
        return 0
    let maxDeep = 0
    let stack = [
        [root, 0]
    ]
    while (stack.length) {
        const [node, p] = stack.pop()
        maxDeep = Math.max(maxDeep, p + 1)
        node.left && stack.push([node.left, p + 1])
        node.right && stack.push([node.right, p + 1])
    }
    return maxDeep

}
console.log(fn('1.1.3', '1.0.4'))
    // 1*2+3/4-3*2
function fn(str) {

}