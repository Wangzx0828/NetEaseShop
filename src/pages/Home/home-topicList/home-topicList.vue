<template>
  <div class="home-topicList">
    <div class="home-topicList-header">
      <span>专题精选</span>
      <img src="./images/jiantouyou.png" alt="">
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in homedata.topicList" :key="index">
          <div class="swiper-box">
            <img class="swiperImg" :src="item.itemPicUrl" alt="">
            <span class="sp1">{{item.title}}<span class="sp2">{{item.priceInfo}}元</span></span>
            <span class="sp3">{{item.subtitle}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['homedata'])
    },
    watch:{
      homedata(){
        this.$nextTick(()=>{
          new Swiper ('.swiper-container',{
            loop: false
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home-topicList
  width 100%
  height 284px
  background-color: #fff
  .home-topicList-header
    font-size 16px
    width 375px
    height 55px
    display flex
    justify-content center
    align-items center
    img
      margin-left 8px
      width 15px
      height 15px
  .swiper-container
    width: 100%
    height: 210px
    .swiper-slide
      padding-left 14px
      padding-right 20px
      display flex
      .swiper-box
        width 290px
        height 210px
        font-size 14px
        padding-right 20px
        .swiperImg
          width 290px
          height 161px
          border-radius 5px
        .sp1
          padding-top 12px
          display flex
          justify-content space-between
          width 290px
          .sp2
            font-size 16px
            color #c04a4e
        .sp3
          line-height 20px
          color #7f7f7f
</style>
