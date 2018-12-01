<template>
  <div class="goods-carousel">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="swiper-cart">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    mounted(){
      new Swiper ('.swiper-container',{})
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.goods-carousel
  height 192px
  background-color: royalblue
  .swiper-container
    height 100%
    .swiper-cart
      margin 0 auto
      width 325px
      height 192px
      background-color: yellowgreen
</style>
