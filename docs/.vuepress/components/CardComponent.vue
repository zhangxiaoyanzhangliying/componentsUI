<!--
 * @Author: v-zhang.xiaoyan@v-zhang.xiaoyan v-zhang.xiaoyan@hellogroup.com
 * @Date: 2023-12-18 12:31:09
 * @LastEditors: v-zhang.xiaoyan@v-zhang.xiaoyan v-zhang.xiaoyan@hellogroup.com
 * @LastEditTime: 2023-12-18 12:56:17
 * @FilePath: \components\docs\.vuepress\components\CardComponent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class='m-card' :style="width ? {width: width + 'px'} : {}">

    <div class='m-card-img' :style="imgHeight ? {height: imgHeight + 'px'} : {}">
      <img :src="imgSrc" alt="img">
    </div>

    <div v-if="summary" class="m-card-summary">
      {{summary}}
    </div>

    <div v-else class="m-card-summary">
       <slot></slot>
    </div>

    <!-- <div class="footer">
      footer
    </div> -->
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: 'CardComponent',
  props:{
    width:{ // 卡片宽度
      type: Number,
      default: 0,
    },
    imgSrc:{ //卡片图片资源地址
      type:String,
      default:''
    },
    imgHeight:{ //卡片图片的高度
      type:Number,
      default:0,
    },
    summary:{
      type:String,
      default:''
    }
  }
};
</script>
<style lang='scss' scoped>
@import "./card.scss";

</style>