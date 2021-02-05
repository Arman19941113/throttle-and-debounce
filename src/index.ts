interface Callback {
    (eventParam: Event | MouseEvent | InputEvent, ...params: any[]): void
}

interface Listener {
    (eventParam: Event | MouseEvent | InputEvent): void
    cancel: () => void
}

interface Throttle {
    (callback: Callback, wait: number, ...params: any[]): Listener
}

interface Debounce {
    (callback: Callback, wait: number, ...params: any[]): Listener
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
    Callback,
    Listener,
    Throttle,
    Debounce,
}
