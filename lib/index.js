const throttle = function (callback, wait = 300, ...params) {
    let timer = 0;
    const listener = function (eventParam) {
        if (timer)
            return;
        timer = window.setTimeout(() => {
            timer = 0;
            callback.call(this, eventParam, ...params);
        }, wait);
    };
    listener.cancel = function () {
        timer && window.clearTimeout(timer);
        timer = 0;
    };
    return listener;
};
const throttleImmediately = function (callback, wait = 300, ...params) {
    let timer = 0;
    const listener = function (eventParam) {
        if (timer)
            return;
        callback.call(this, eventParam, ...params);
        timer = window.setTimeout(() => {
            timer = 0;
        }, wait);
    };
    listener.cancel = function () {
        timer && window.clearTimeout(timer);
        timer = 0;
    };
    return listener;
};
const debounce = function (callback, wait = 300, ...params) {
    let timer = 0;
    const listener = function (eventParam) {
        timer && window.clearTimeout(timer);
        timer = window.setTimeout(() => {
            timer = 0;
            callback.call(this, eventParam, ...params);
        }, wait);
    };
    listener.cancel = function () {
        timer && window.clearTimeout(timer);
        timer = 0;
    };
    return listener;
};
export { throttle, throttleImmediately, debounce, };
