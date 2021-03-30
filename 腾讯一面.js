function debounce(fn, wait) {
    let timeout = null
    return function() {
        if (timeout)
            clearTimeout(timeout)
        timeout = setTimeout(fn, wait)
    }
}

function fn(fn, wait) {
    let timer = null
    return function() {
        if (!timer) {
            setTimeout(fn, wait)
            timer = null
        }
    }
}

function Fa(name) {
    this.name = name
}

function Son(name, age) {
    Fa.apply(this, [name])
    this.age = age
}
Son.prototype = Object.creat(Fa.prototype)
Son.prototype.constructor = Son