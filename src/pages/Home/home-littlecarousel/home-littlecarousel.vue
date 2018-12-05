<template>
  <div class="newCarousel" :class='isBscroll'>
    <ul class="Carousellist">
      <li class="Carouselli" v-for="(item,index) in carousel" :key="index">
        <img class="carouselImg" v-lazy="item.listPicUrl" alt="">
        <span class="sp1">{{item.name}}</span>
        <span class="sp2">{{item.simpleDesc}}</span>
        <span class="sp3">￥{{item.retailPrice}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    props:{
      carousel:Array,
      isCss:Number
    },
    mounted(){
      new BScroll(`.${this.isBscroll}`,{
        click:true,
        scrollX:true,
        eventPassthrough:'vertical'
      })
    },
    computed:{
      ...mapState(['homedata']),
      isBscroll(){
        return this.isCss === 1 ? 'newCarousel1' : 'newCarousel2'
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .newCarousel
    width 375px
    height 220px
    background-color: #fff
    padding 15px 15px 0 25px
    .Carousellist
      display flex
      height 100%
      width 340%
      .Carouselli
        padding-right 15px
        width 140px
        height 220px
        .carouselImg
          background-color: #f4f4f4
          padding-left 8px
          width 140px
          height 140px
        span
          display block
          padding 8px 0 0 10px
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        .sp1
          font-size 14px
        .sp2
          font-size 12px
          color #7f7f7f
        .sp3
          font-size 16px
          color #bf494d
</style>
