interface Listener {
    (eventParam: any): void;
    cancel: () => void;
}
interface Throttle {
    <T extends (...args: any) => any>(callback: T, wait?: number, ...params: any[]): Listener;
}
interface Debounce {
    <T extends (...args: any) => any>(callback: T, wait?: number, ...params: any[]): Listener;
}
declare const throttle: Throttle;
declare const debounce: Debounce;
export { throttle, debounce, Listener, Throttle, Debounce, };
