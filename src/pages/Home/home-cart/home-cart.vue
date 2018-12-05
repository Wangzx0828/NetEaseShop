<template>
  <div class="home-cart">
    <MainCountLine />
    <div class="home-cart-header">{{items.name}}好物</div>
    <div class="home-cart-conent">
      <div class="cart" v-for="(item,index) in items.itemList" :key="index">
        <img class="cartImg" v-lazy="item.primaryPicUrl" alt="">
        <div class="cartIntro">{{item.simpleDesc}}</div>
        <span class="sp1">{{item.name}}</span>
        <span class="sp2">￥{{item.retailPrice}}</span>
      </div>
      <div class="cart2">
        <div class="cart2-box">
          <span>更多居家好物</span>
          <img src="./images/gsmove.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props:{
      items:Object
    },
    computed:{
      ...mapState(['homedata'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home-cart-header
  width 100%
  height 60px
  font-size 16px
  text-align: center
  line-height 60px
.home-cart-conent
  width 100%
  display flex
  flex-wrap wrap
  padding-bottom 12px
  .cart
    width 178px
    height 252px
    margin 0 4px 16px 4px
    background-color: #f4f4f4
    img
      width 172px
      height 172px
    .cartIntro
      width 178px
      height 35px
      background-color: #f1ece2
      font-size 14px
      padding 10px 5px
      box-sizing border-box
      color #b6a584
    span
      padding-top 4px
      padding-left 5px
      float left
      overflow hidden
      width 172px
      text-overflow ellipsis
      white-space nowrap
    .sp1
      font-size 15px
    .sp2
      font-size 17px
      color #b9393d
  .cart2
    width 178px
    height 208px
    margin 0 4px 16px 4px
    font-size 20px
    background-color: #f4f4f4
    display flex
    align-items center
    .cart2-box
      width 100%
      height 80px
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      img
        width 33px
        height 33px
</style>
