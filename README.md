## INSTALL

```
# with npm
npm install throttle-and-debounce

# with yarn
yarn add throttle-and-debounce
```

## QUICK START

### throttle

```javascript
import { throttle } from 'throttle-and-debounce'

const callback = function (eventParam, ...params) { console.log(this, eventParam, params) }
const throttledListener = throttle(callback, 300, 'Hello', 'World')
window.addEventListener('scroll', throttledListener)
window.addEventListener('popstate', throttledListener.cancel)
```

### debounce

```javascript
import { debounce } from 'throttle-and-debounce'

const callback = function (eventParam, ...params) { console.log(this, eventParam, ...params) }
const debouncedListener = debounce(callback, 300, 'Hello', 'World')
window.addEventListener('scroll', debouncedListener)
window.addEventListener('popstate', debouncedListener.cancel)
```

### with vue3.0:

```typescript jsx
import { defineComponent } from 'vue'
import { throttle } from 'throttle-and-debounce'

export default defineComponent({
    setup () {
        const callback = function (eventParam, ...params) { console.log(eventParam, ...params) }
        const throttledListener = throttle(callback, 300, 'Hello', 'World') 
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
