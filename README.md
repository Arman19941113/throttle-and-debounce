## INSTALL

```
# with npm
npm install throttle-and-debounce

# with yarn
yarn add throttle-and-debounce
```

## QUICK START

### throttle

```typescript
import { throttle } from 'throttle-and-debounce'

const app = document.getElementById('app') as HTMLElement

const throttledCallback = function (this: HTMLElement, eventParam: WheelEvent, ...params: any[]) {
    console.log(this, eventParam, params)
}
const throttledListener = throttle(throttledCallback, 300, 'Hello', 'throttle')

app.addEventListener('scroll', throttledListener)
```

### debounce

```typescript
import { debounce } from 'throttle-and-debounce'

const app = document.getElementById('app') as HTMLElement

const debouncedCallback = function (this: HTMLElement, eventParam: MouseEvent, ...params: any[]) {
    console.log(this, eventParam, params)
}
const debouncedListener = debounce(debouncedCallback, 300, 'Hello', 'debounce')

app.addEventListener('click', debouncedListener)
```

### with vue3.0:

```typescript jsx
import { defineComponent } from 'vue'
import { throttle } from 'throttle-and-debounce'

export default defineComponent({
    setup () {
        const throttledCallback = function (this: undefined ,eventParam: WheelEvent, ...params: any[]) {
            console.log(this, eventParam, ...params)
        }
        const throttledListener = throttle(throttledCallback, 300, 'Hello', 'throttle') 
        return () => (
            <div style="height:500px;overflow:auto;" onScroll={throttledListener}>
                <div style="height:1000px;">
                    Hello World
                </div>
            </div>
        )
    }
})
```
