var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var throttle = function (callback, wait) {
    if (wait === void 0) { wait = 300; }
    var params = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        params[_i - 2] = arguments[_i];
    }
    var timer = 0;
    var listener = function (eventParam) {
        var _this = this;
        if (timer)
            return;
        timer = setTimeout(function () {
            timer = 0;
            callback.call.apply(callback, __spreadArrays([_this, eventParam], params));
        }, wait);
    };
    listener.cancel = function () {
        timer && clearTimeout(timer);
        timer = 0;
    };
    return listener;
};
var debounce = function (callback, wait) {
    if (wait === void 0) { wait = 300; }
    var params = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        params[_i - 2] = arguments[_i];
    }
    var timer = 0;
    var listener = function (eventParam) {
        var _this = this;
        timer && clearTimeout(timer);
        timer = setTimeout(function () {
            timer = 0;
            callback.call.apply(callback, __spreadArrays([_this, eventParam], params));
        }, wait);
    };
    listener.cancel = function () {
        timer && clearTimeout(timer);
        timer = 0;
    };
    return listener;
};
export { throttle, debounce, };
