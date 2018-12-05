<template>
  <div class="goods-more">
    <div class="goods-more-header">
      <span class="goods-more-header-title">更多精彩</span>
    </div>
    <div class="goods-more-cart" v-for="(item,index) in goodsdata.yxWeek" :key="index">
      <img :src="item.itemPicUrl" alt="">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['goodsdata'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.goods-more
  background-color #f4f4f4
  padding 0 15px 15px
  .goods-more-header
    position relative
    height 70px
    text-align: center
    background-color #f4f4f4
    &::before
      position absolute
      top 50%
      content ''
      display block
      width 132px
      height 1px
      background-color: #e8e8e8
    &::after
      position absolute
      top 50%
      right 0
      content ''
      display block
      width 132px
      height 1px
      background-color: #e8e8e8
    .goods-more-header-title
      font-size 14px
      line-height 70px
  .goods-more-cart
    width 100%
    height 250px
    background-color: #fff
    padding 12px
    margin-bottom 12px
    box-sizing border-box
    img
      width 321px
      height 180px
    span
      font-size 14px
</style>
