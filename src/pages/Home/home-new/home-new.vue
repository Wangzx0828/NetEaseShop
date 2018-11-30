<template>
  <div>
    <div class="newImg" :class="{isShow:!isNew}">
      <span class="newSpan" :class="{isColor:!isNew}">{{isNew?'新品首发':'人气推荐，好物精选'}}</span>
      <div class="lookAll" :class="{isBox:!isNew}">
        <span :class="{isAll:!isNew}">查看全部</span>
        <img v-if="isNew" :class="{isYou:!isNew}" src="./images/jiantou.png" alt="">
        <img v-else :class="{isYou:!isNew}" src="./images/jiantou2.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      isNew:Boolean
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.newImg
  width 375px
  height 130px
  background-image url("./images/new.png")
  background-repeat no-repeat
  background-size: 375px 130px
  display flex
  flex-direction column
  align-items center
  justify-content center
  .newSpan
    font 400 20px/40px '微软雅黑'
    color #94a8bd
  .isColor
    color #c5b491
  .lookAll
    width 120px
    height 28px
    background-color: #d8e5f1
    display flex
    align-items center
    justify-content center
    span
      font-size 16px
      color #94a8bd
    .isAll
      color #c5b491
    img
      width 4px
      height 11px
      margin-left 4px
  .isBox
    background-color #f4e9cb
.isShow
  background-image url("./images/new2.png")
</style>
