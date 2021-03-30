let count = 1

function fetch(data) {
    return new Promise((resolve, reject) => {
        let random = Math.random()
        let fn = random < 0.5 ? resolve : reject
        setTimeout(fn(data + count++), 1000)
    })
}

async function get() {
    let sum = 0
    try {
        sum += await fetch(1)
        sum += await fetch(2)
        sum += await fetch(3)
        sum += await fetch(4)
        sum += await fetch(5)
    } catch {
        sum = 'error'
    }

    return sum
}

get().then((res) => console.log(res))

let arr = [
    [1, 5],
    [2, 6],
    [3, 7],
    [4, 8]
]
console.log(fn2(arr))

function fn2(arr) {
    let res = []
    let count = arr.length * arr[0].length
    let r = 1,
        c = 1,
        i = 0,
        j = 0
    while (count > 0) {
        while (arr[i] && arr[i][j] !== undefined) {
            res.push(arr[i][j])
            arr[i][j] = undefined
            count--
            j += c
        }
        j -= c
        i += r

        while (arr[i] && arr[i][j] !== undefined) {
            res.push(arr[i][j])
            arr[i][j] = undefined
            count--
            i += r
        }
        i -= r
        j -= c
        r = -r
        c = -c
    }
    return res
}
 