interface Listener {
    (eventParam: any): void
    cancel: () => void
}

interface Throttle {
    <T extends (...args: any) => any>(callback: T, wait?: number, ...params: any[]): Listener
}

interface Debounce {
    <T extends (...args: any) => any>(callback: T, wait?: number, ...params: any[]): Listener
}

const throttle: Throttle = function (callback, wait = 300, ...params) {
    let timer = 0
    const listener: Listener = function (this: void, eventParam) {
        if (timer) return
        timer = window.setTimeout(() => {
            timer = 0
            callback.call(this, eventParam, ...params)
        }, wait)
    }
    listener.cancel = function () {
        timer && window.clearTimeout(timer)
        timer = 0
    }
    return listener
}

const throttleImmediately: Throttle = function (callback, wait = 300, ...params) {
    let timer = 0
    const listener: Listener = function (this: void, eventParam) {
        if (timer) return
        callback.call(this, eventParam, ...params)
        timer = window.setTimeout(() => {
            timer = 0
        }, wait)
    }
    listener.cancel = function () {
        timer && window.clearTimeout(timer)
        timer = 0
    }
    return listener
}

const debounce: Debounce = function (callback, wait = 300, ...params) {
    let timer = 0
    const listener: Listener = function (this: void, eventParam) {
        timer && window.clearTimeout(timer)
        timer = window.setTimeout(() => {
            timer = 0
            callback.call(this, eventParam, ...params)
        }, wait)
    }
    listener.cancel = function () {
        timer && window.clearTimeout(timer)
        timer = 0
    }
    return listener
}

export {
    throttle,
    throttleImmediately,
    debounce,
    Listener,
    Throttle,
    Debounce,
}
