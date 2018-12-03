<template>
  <div class="goods-littlecarousel">
    <div class="swiper-container4">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in goodsdata.column" :key="index">
          <div class="swiper-cart">
            <img v-lazy="item.picUrl" alt="">
            <span>{{item.title}}</span>
            <span class="article">{{item.articleCount}}</span>
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
          new Swiper('.swiper-container4', {
            slidesPerView: 4,
            slidesOffsetBefore:10,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goods-littlecarousel
    height 110px
    margin 28px 0 18px
    .swiper-container4
      width 100%
      height 100%
      .swiper-cart
        text-align: center
        font-size 12px
        .article
          position absolute
          top 0
          right 6px
          line-height 14px
          color white
          background-image url("./images/bg.png")
        img
          width 82px
          height 82px
          margin-bottom 12px
          border-radius 8px
</style>
