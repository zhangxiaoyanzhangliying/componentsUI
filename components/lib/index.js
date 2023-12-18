/*
 * @Author: v-zhang.xiaoyan@v-zhang.xiaoyan v-zhang.xiaoyan@hellogroup.com
 * @Date: 2023-12-09 22:20:10
 * @LastEditors: v-zhang.xiaoyan@v-zhang.xiaoyan v-zhang.xiaoyan@hellogroup.com
 * @LastEditTime: 2023-12-17 17:50:21
 * @FilePath: \components\components\lib\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Demo from './demo';
import Card from "./card";

const components ={
  Demo,
  Card
}

const install =function(vue){
    if(install.installed) return
    Object.keys(components).forEach(key=>{
      vue.component(components[key].name,components[key])
    })
}
const API={
  install
}
export default API