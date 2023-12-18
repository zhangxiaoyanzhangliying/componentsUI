/*
 * @Author: v-zhang.xiaoyan@v-zhang.xiaoyan v-zhang.xiaoyan@hellogroup.com
 * @Date: 2023-11-26 08:58:48
 * @LastEditors: v-zhang.xiaoyan@v-zhang.xiaoyan v-zhang.xiaoyan@hellogroup.com
 * @LastEditTime: 2023-12-17 17:23:12
 * @FilePath: \components\examples\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'

// import '../components/css/demo.scss'
// import '../components/css/card.scss'
// import Demo from "../components/lib/demo/index"
// import Card from "../components/lib/card/index"

// // Vue.component('name',Demo)
// Vue.use(Demo) // Demo.install => Vue.component()
// Vue.use(Card)

import 'zly_components/dist/css/index.css'
import CUI from 'zly_components'
Vue.use(CUI)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
