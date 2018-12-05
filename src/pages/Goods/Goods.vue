<template>
  <div class="goods-box">
    <GoodHeader class="goodheader"/>
    <div class="goodsCount">
      <div class="goods-box-bscroll">
        <GoodsCarousel />
        <GoodsLittlecarousel />
        <MainCountLine />
        <GoodsForyou :data="goodsdata.recommend"/>
        <MainCountLine />
        <GoodsTopic />
        <MainCountLine />
        <GoodsForyou :data="goodsdata.zhen"/>
        <MainCountLine />
        <GoodsLook />
        <MainCountLine />
        <GoodsMore />
      </div>
    </div>
  </div>
</template>

<script>
  import GoodsCarousel from './goods-carousel/goods-carousel.vue'
  import GoodsLittlecarousel from './goods-littlecarousel/goods-littlecarousel.vue'
  import GoodsForyou from './goods-foryou/goods-foryou.vue'
  import GoodsTopic from './goods-topic/goods-topic.vue'
  import GoodsLook from './goods-look/goods-look.vue'
  import GoodsMore from './goods-more/goods-more.vue'

  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$store.dispatch('getDataGoods')
      new BScroll ('.goodsCount',{
        click:true,
        bounce:false
      })
    },
    computed:{
      ...mapState(['goodsdata'])
    },
    components:{
      GoodsCarousel,
      GoodsLittlecarousel,
      GoodsForyou,
      GoodsTopic,
      GoodsLook,
      GoodsMore
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.goods-box
  width 100%
  height 100%
  .goodheader
    position fixed
    top 0
    left 0
    z-index 2
  .goodsCount
    width 100%
    height 100%
    .goods-box-bscroll
      padding-bottom 88px
</style>
