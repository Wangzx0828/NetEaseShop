<template>
  <div class="GoodHeader">
    <i class="iconfont icon-shouye2" @click="$router.push('/home')"></i>
    <img class="yanxuanImg" src="./images/yanxuan.png" alt="">
    <div class="header-right">
      <img class="searchImg" src="./images/search2-2fb94833aa.png" alt="" @click="$router.push('/classify')">
      <div class="shopImg" @click="$router.push('/shopcart')"></div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .GoodHeader
    bottom-border-1px(#eeeeee)
    width 100%
    height 44px
    background-color: #fff
    padding 0 12px
    box-sizing border-box
    display flex
    align-items center
    justify-content space-between
    .icon-shouye2
      font-size 24px
    .yanxuanImg
      padding-left 40px
      width 86px
      height 27px
    .header-right
      display flex
      align-items center
      .searchImg
        padding-right 10px
        width 24px
        height 24px
      .shopImg
        width 32px
        height 32px
        background-image url("../../../static/image/icons.png")
        background-size 100px 200px
        background-repeat no-repeat
</style>
