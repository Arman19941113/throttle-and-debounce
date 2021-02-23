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

const debounce: Debounce = function (callback, wait = 300, ...params) {
    let timer = 0
    const listener: Listener = function (this: void, eventParam) {
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
    Listener,
    Throttle,
    Debounce,
}
