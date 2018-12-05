<template>
  <div class="goods-look" v-if="goodsdata.yxLook">
    <div class="goods-look-header">严选LOOK</div>
    <div class="goods-look-center">
      <img class="goods-look-img" :src="goodsdata.yxLook.picUrl" alt="">
      <div class="goods-look-conent">
        <img :src="goodsdata.yxLook.avatar" alt="">
        <span>a*****0</span>
      </div>
      <div class="goods-look-text">{{goodsdata.yxLook.content}}</div>
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
.goods-look-header
  height 60px
  font-size 16px
  text-align: center
  line-height 60px
.goods-look-img
  width 372px
  height 375px
.goods-look-conent
  height 44px
  display flex
  align-items center
  padding 10px
  box-sizing border-box
  img
    height 23px
    width 23px
    border-radius 50%
  span
    padding-left 12px
    font-size 14px
.goods-look-text
  font-size 14px
  color #7f7f7f
  padding 5px 15px 10px
  box-sizing border-box
  line-height 20px
</style>
