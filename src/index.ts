interface Callback {
    (eventParam: Event, ...params: any[]): void
}

interface Listener {
    (eventParam: Event): void
    cancel: () => void
}

interface Throttle {
    (callback: Callback, wait: number, ...params: any[]): Listener
}

interface Debounce {
    (callback: Callback, wait: number, ...params: any[]): Listener
}

// 函数节流
// const callback = function (eventParam, ...params) { console.log(this, eventParam, params) }
// const throttledListener = throttle(callback, 300, 'Hello', 'World')
// window.addEventListener('scroll', throttledListener)
const throttle: Throttle = function (callback, wait = 300, ...params) {
    let timer = 0
    const listener: Listener = function (eventParam) {
        if (timer) return
        timer = setTimeout(() => {
            timer = 0
            callback.call(this, eventParam, ...params)
        }, wait)
    }
    listener.cancel = function () {
        timer && clearTimeout(timer)
        timer = 0
    }
    return listener
}

// 函数防抖
// const callback = function (eventParam, ...params) { console.log(this, eventParam, ...params) }
// const debouncedListener = debounce(callback, 300, 'Hello', 'World')
// window.addEventListener('scroll', debouncedListener)
const debounce: Debounce = function (callback, wait = 300, ...params) {
    let timer = 0
    const listener: Listener = function (eventParam) {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            timer = 0
            callback.call(this, eventParam, ...params)
        }, wait)
    }
    listener.cancel = function () {
        timer && clearTimeout(timer)
        timer = 0
    }
    return listener
}

export {
    throttle,
    debounce,
}
