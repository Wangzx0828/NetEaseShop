<template>
  <div class="classify-header">
    <div class="classify-header-search">
      <img src="./images/search2-2fb94833aa.png" alt="">
      <span>搜索商品，共9723款好物</span>
    </div>
  </div>
</template>

<script>

  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
.classify-header
  bottom-border-1px(#ededed)
  display flex
  align-items center
  justify-content space-around
  height 44px
  background-color: #fff
  .classify-header-search
    width 345px
    height 28px
    border-radius 5px
    background-color #ededed
    display flex
    align-items center
    justify-content center
    img
      width 14px
      height 14px
      margin-right 5px
    span
      font-size 14px
      color #666666
</style>
