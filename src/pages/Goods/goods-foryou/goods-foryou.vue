<template>
  <div class="goods-foryou" v-if="data">
    <div class="foryou-top">
      <div class="foryou-top-header">{{data.name}}</div>
      <div class="foryou-top-conent">
        <img v-lazy="data.Item[0].picUrl" alt="">
        <div class="foryou-top-conent-txt">
          <span class="sp1">{{data.Item[0].title}}<span class="sp2">{{data.Item[0].priceInfo}}元起</span></span>
          <span class="sp3">{{data.Item[0].subTitle}}</span>
        </div>
      </div>
    </div>
    <div class="foryou-center">
      <div class="foryou-center-conent">
        <span class="csp1">{{data.Item[1].title}}</span>
        <span class="csp2">{{data.Item[1].subTitle}}</span>
      </div>
      <div class="foryou-center-img">
        <img v-lazy="data.Item[1].picUrl" alt="">
        <div class="foryou-center-conent-span">
          {{data.Item[1].typeName}}
        </div>
      </div>
    </div>
    <div class="foryou-center">
      <div class="foryou-center-conent">
        <span class="csp1">{{data.Item[2].title}}</span>
        <span class="csp2">{{data.Item[2].subTitle}}</span>
      </div>
      <div class="foryou-center-img">
        <img v-lazy="data.Item[2].picUrl" alt="">
        <div class="foryou-center-conent-span">
          {{data.Item[2].typeName}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    props:{
      data:Object
    },
    computed:{
      ...mapState(['goodsdata'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.goods-foryou
  height 678px
  width 345px
  padding 0 15px
  .foryou-top
    margin-bottom 15px
  .foryou-top-header
    height 60px
    font-size 14px
    text-align: center
    line-height 60px
  .foryou-top-conent
    border 1px solid #eee
    border-radius 5px 5px 0 0
    height 293px
    img
      width 100%
      height 193px
      border-radius 5px
    .foryou-top-conent-txt
      display flex
      flex-direction column
      justify-content space-between
      width 324px
      height 53px
      padding 12px 10px 33px
      .sp1
        font-size 18px
        display flex
        justify-content space-between
      .sp2
        font-size 16px
      .sp3
        font-size 14px
        color #7f7f7f
  .foryou-center
    height 136px
    border 1px solid #eee
    margin-bottom 15px
    display flex
    justify-content space-between
    .foryou-center-conent
      padding-left 12px
      display flex
      flex-direction column
      justify-content center
      .csp1
        font-size 16px
      .csp2
        width 190px
        margin-top 12px
        font-size 14px
        color #7f7f7f
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    .foryou-center-img
      position relative
      .foryou-center-conent-span
        position absolute
        top  5px
        left 5px
        height 18px
        padding 0 10px
        text-align: center
        line-height 18px
        border-radius 15px
        background-color: #fff
        font-size 12px
    img
      width 135px
      height 135px
</style>
