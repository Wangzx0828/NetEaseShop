<template>
  <div class="goods-carousel">
    <div class="swiper-container3">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in goodsdata.banner" :key="index">
          <div class="swiper-cart">
            <img v-lazy="item.picUrl" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['goodsdata'])
    },
    watch:{
      goodsdata(){
        this.$nextTick(()=>{
          new Swiper('.swiper-container3', {
            slidesPerView: 1.15,
            centeredSlides: true,
            loop: true,
            spaceBetween: 20,
            autoplay: true
          });
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.goods-carousel
  height 192px
  margin 56px 0 12px
  .swiper-container3
    width: 100%;
    height: 100%;
    .swiper-slide
      text-align: center;
      font-size: 18px;
      background: #fff;
      .swiper-cart
        width 324px
        height 100%
        img
          width 100%
          height 100%
</style>
