<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <DemoComponent/>
    <CardComponent
      imgSrc="01.png"
      summary="xxxxxxx  xxxxxx"
    />

    <br/>
    <CardComponent
      imgSrc="02.jpg"
      :width="350"
      :imgHeight="190">
      我是武大郎啊  我是武大郎啊啊啊
      <template v-slot:footer>
      <div class="footer-spring">
          <div class="level">6步骤 · 可以做烧饼</div>
          <div class="price">1234收藏</div>
      </div>
    </template>
    </CardComponent>

    <br/>
    <CardComponent
      imgSrc="03.png"
      summary="我在卖烧饼啊 啊啊啊啊啊 啊"
    >
    <template v-slot:footer>
      <div class="footer">
          <div class="level">老头 430人想买</div>
          <div class="price">￥10.00</div>
      </div>
    </template>
  </CardComponent>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer{
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level{
  color:#9199A1;
  margin-bottom: 8px;
}

.price{
  color:#F01414
}

.footer-spring{
  display:flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
