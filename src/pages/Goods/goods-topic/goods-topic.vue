<template>
  <div class="goods-topic">
    <div class="goods-topic-header">十点一刻</div>
    <div class="swiper-container5">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in goodsdata.tenfifteen ">
            <a class="swiper-cartbox">
              <img class="goodscartImg" src="./images/qipao.png" alt="">
              <div class="goodscartText">
                <span class="goodscartText-sp1">— 今日话题 —</span>
                <div class="goodscartDay">
                  <span class="goodscartDaysp1">{{item.title}}</span>
                  <span class="goodscartDaysp2">{{item.desc}}</span>
                </div>
                <span class="goodscartText-sp2">{{item.participantNum}}人参与话题</span>
              </div>
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {
    computed:{
      ...mapState(['goodsdata'])
    },
    watch:{
      goodsdata(){
        this.$nextTick(()=>{
          new Swiper ('.swiper-container5',{
            slidesPerView: 1.15,
            slidesOffsetAfter:14,
            spaceBetween: 10
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.goods-topic
  height 276px
  .goods-topic-header
    height 60px
    text-align: center
    line-height 60px
    font-size 14px
  .swiper-container5
    padding-left 10px
    height 206px
    .swiper-cartbox
      position absolute
      top 0
      left 0
      width 290px
      height 206px
      display flex
      .goodscartImg
        height 206px
      .goodscartText
        color #000
        height 206px
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        margin auto
        display flex
        flex-direction column
        justify-content space-between
        text-align: center
        .goodscartDay
          display flex
          flex-direction column
        .goodscartText-sp1
          padding-top 12px
          font-size 12px
          color #7f7f7f
        .goodscartText-sp2
          font-size 12px
          padding-bottom 52px
        .goodscartDaysp1
          font-size 20px
          font-weight 700
        .goodscartDaysp2
          font-size 14px
          margin-top 12px
</style>
