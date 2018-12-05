<template>
  <div id="ShopCart">
    <div class="ShopCart-header">购物车</div>
    <div class="ShopCart-conent">
      <div class="ShopCart-top">
        <span><i class="iconfont icon-yuanquan"></i>30天无忧退货</span>
        <span><i class="iconfont icon-yuanquan"></i>48小时快速退款</span>
        <span><i class="iconfont icon-yuanquan"></i>满88元免邮费</span>
      </div>
      <div class="ShopCartImg">
        <img src="./images/cart.png" alt="">
        <span>去添加点什么吧</span>
      </div>
      <div class="ShopCartBtn">登录</div>
    </div>
  </div>
</template>

<script>

  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#ShopCart
  height 100%
  background-color #f4f4f4
  .ShopCart-header
    background-color #fff
    height 44px
    width 100%
    font-size 18px
    text-align: center
    line-height 44px
  .ShopCart-conent
    width 100%
    height 100%
    display flex
    flex-direction column
    align-items center
    .ShopCart-top
      width 100%
      box-sizing border-box
      height 35px
      padding 0 15px
      font-size 12px
      color #666666
      display flex
      align-items center
      justify-content space-between
      .icon-yuanquan
        font-size 12px
        margin-right 4px
    .ShopCartImg
      width 100%
      height 100%
      display flex
      justify-content center
      img
        position absolute
        top 37%
        width 124px
        height 124px
      span
        position absolute
        top 55%
        font-size 14px
        color #999999
    .ShopCartBtn
      position absolute
      top 61%
      width 240px
      height 46px
      border-radius 3px
      background-color #b4282d
      text-align: center
      font-size 14px
      color #fff
      line-height 46px
</style>
