<template>
      <div class="swiper-container1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(pic,index) in homedata.focusList" :key="index">
            <img class="swiperImg" v-lazy="pic.picUrl" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    mounted() {
      this.$store.dispatch('getDatahome', () => {
        this.$nextTick(()=>{
          new Swiper ('.swiper-container1', {
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      })
    },
    computed:{
      ...mapState(['homedata'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container1
    position relative
    .swiper-wrapper
      width 100%
      .swiperImg
        width 100%
        height 185px
    .swiper-pagination-bullet
      width 16px
      height 2px
      border-radius 2px
    .swiper-pagination-bullet-active
      background-color: #fff
</style>
