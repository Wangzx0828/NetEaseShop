<template>
<div id="footerNav">
  <ul class="footList">
    <li :class="{on:$route.path==='/home'}" @click="goto('home')">
      <i class="iconfont icon-shouye2"></i>
      <span>首页</span>
    </li>
    <li :class="{on:$route.path==='/classify'}">
      <i class="iconfont icon-fenlei" @click="goto('classify')"></i>
      <span>分类</span>
    </li>
    <li :class="{on:$route.path==='/goods'}">
      <i class="iconfont icon-fangkuai" @click="goto('goods')"></i>
      <span>识物</span>
    </li>
    <li :class="{on:$route.path==='/shopcart'}">
      <i class="iconfont icon-gouwuchekong" @click="goto('shopcart')"></i>
      <span>购物车</span>
    </li>
    <li :class="{on:$route.path==='/person'}">
      <i class="iconfont icon-icon-" @click="goto('person')"></i>
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
        justify-content: center;
        text-align: center
        &.on
          color #b4282d
        i
          font-size 20px
        span
          font-size 12px
</style>
