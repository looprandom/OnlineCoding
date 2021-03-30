function debounce(fn, delay) {
    let timeout = null
    return function() {
        if (timeout !== null)
            clearTimeout(timeout)
        timeout = setTimeout(fn, delay)
    }
}

function throttle(fn, delay) {
    let timer = null
    return function() {
        let context = this
        let args = arguments
        if (!timer) {
            timer = setTimeout(function() {
                fn.apply(context, args)
                timer = null
            }, delay)
        }

    }
}

function throttle(fn, wait) {
    let timer = null
    return function() {
        let context = this
        let args = arguments
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args)
                timer = null
            }, null)
        }
    }
}

function debounce(fn, wait) {
    let timeout = null
    return function() {
        if (timeout !== null)
            clearTimeout(timeout)
        timeout = setTimeout(fn, wait)
    }
}