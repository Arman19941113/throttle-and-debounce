interface Callback {
    (eventParam: Event | MouseEvent | InputEvent, ...params: any[]): void;
}
interface Listener {
    (eventParam: Event | MouseEvent | InputEvent): void;
    cancel: () => void;
}
interface Throttle {
    (callback: Callback, wait: number, ...params: any[]): Listener;
}
interface Debounce {
    (callback: Callback, wait: number, ...params: any[]): Listener;
}
declare const throttle: Throttle;
declare const debounce: Debounce;
export { throttle, debounce, Callback, Listener, Throttle, Debounce, };
