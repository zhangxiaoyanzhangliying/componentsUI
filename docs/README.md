
## 快速开始

### 1.安装组件库
```bash
npm i zly_components
```

### 2.引t用组件库
>  在main.js中引入组件库
```javascript
// 全局引入
import 'zly_components/dist/css/index.css'
import CUI from 'zly_components'
Vue.use(CUI)


//按需引入
import 'zly_components/dist/css/demo.css'
import { Demo } from 'zly_components'

Vue.use(Demo)
```
