function recoverTree(preOrder) {
    // some code
    if (!preOrder.length) return null
    let res = {}
    res.value = preOrder[0]
    let arr = preOrder.slice(1)
    let mid = Math.floor(arr.length / 2)
    res.left = recoverTree(arr.slice(0, mid))
    res.right = recoverTree(arr.slice(mid))
    return res
}