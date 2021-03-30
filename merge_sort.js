console.log(merge_sort([55, 21, 31, 88, 9, 11, 66, 15, 78, 55, 31, 444, 22, 54]))

function merge_sort(arr) {
    if (arr.length <= 1)
        return arr
    let mid = Math.floor((arr.length - 1) / 2)
    let arr1 = merge_sort(arr.slice(0, mid + 1))
    let arr2 = merge_sort(arr.slice(mid + 1))
    return merge(arr1, arr2)
}

function merge(arr1, arr2) {
    let res = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        res.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        res.push(arr2[j])
        j++
    }
    return res
}