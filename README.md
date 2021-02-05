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
import { throttle, Callback } from 'throttle-and-debounce'

const app = document.getElementById('app') as HTMLElement

const throttledCallback: Callback = function (this: HTMLElement, eventParam, ...params) {
    console.log(this, eventParam, params)
}
const throttledListener = throttle(throttledCallback, 300, 'Hello', 'throttle')

app.addEventListener('scroll', throttledListener)
```

### debounce

```typescript
import { throttle, Callback } from 'throttle-and-debounce'

const app = document.getElementById('app') as HTMLElement

const debouncedCallback: Callback = function (this: HTMLElement, eventParam, ...params) {
    console.log(this, eventParam, params)
}
const debouncedListener = debounce(debouncedCallback, 300, 'Hello', 'debounce')

app.addEventListener('click', debouncedListener)
```

### with vue3.0:

```typescript jsx
import { defineComponent } from 'vue'
import { throttle, Callback } from 'throttle-and-debounce'

export default defineComponent({
    setup () {
        const throttledCallback: Callback = function (this: undefined ,eventParam, ...params) {
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
