<template>
<div id="footerNav">
  <ul class="footList">
    <li :class="{on:$route.path==='/home'}" @click="goto('/home')">
      <div :class="{icondiv11:$route.path==='/home'}" class="icondiv1"></div>
      <span>首页</span>
    </li>
    <li :class="{on:$route.path==='/goods'}"
        @click="goto('/goods')">
      <div :class="{icondiv22:$route.path==='/goods'}" class="icondiv2"></div>
      <span>识物</span>
    </li>
    <li :class="{on:$route.path==='/classify'}" @click="goto('/classify')">
      <div :class="{icondiv33:$route.path==='/classify'}" class="icondiv3"></div>
      <span>分类</span>
    </li>
    <li :class="{on:$route.path==='/shopcart'}" @click="goto('/shopcart')">
      <div :class="{icondiv44:$route.path==='/shopcart'}" class="icondiv4"></div>
      <span>购物车</span>
    </li>
    <li :class="{on:$route.path==='/person'}" @click="goto('/person')">
      <div :class="{icondiv55:$route.path==='/person'}" class="icondiv5"></div>
      <span>个人</span>
    </li>
  </ul>
</div>
</template>

<script>
  export default {
    methods:{
      goto(path){
        this.$router.push(path);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #footerNav
    top-border-1px(#F5F5F5)
    position fixed
    z-index 1
    background-color: #fff
    bottom 0
    left:0
    height 49px
    width 100%
    .footList
      display flex
      flex-direction row
      justify-content space-around
      height 100%
      width 100%
      color grey
      li
        height 100%
        width 20%
        display flex
        flex-direction column
        justify-content center
        align-items center
        .icondiv1,.icondiv2,.icondiv3,.icondiv4,.icondiv5
          width 21px
          height 21px
          background-image: url('./images/nav.png')
          background-size 20px
          background-repeat no-repeat
          &.icondiv11
            background-position 0 -100px
          &.icondiv22
            background-position 0 -150px
          &.icondiv33
            background-position 0 -50px
          &.icondiv44
            background-position 0 0
          &.icondiv55
            background-position 0 -200px
        .icondiv1
          background-position 0 -125px
        .icondiv2
          background-position 0 -175px
        .icondiv3
          background-position 0 -75px
        .icondiv4
          background-position 0 -25px
        .icondiv5
          background-position 0 -225px
        &.on
          color #b5262d
        span
          font-size 12px
</style>
