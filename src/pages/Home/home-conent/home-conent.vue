<template>
  <div class="count-wrapper">
    <div class="content">
    <homeCarousel />
    <div class="activity">
      <div>
        <img src="../images/icon/duihao.png" alt="">
        <span>网易自营品牌</span>
      </div>
      <div>
        <img src="../images/icon/duihao.png" alt="">
        <span>30天无忧退货</span>
      </div>
      <div>
        <img src="../images/icon/duihao.png" alt="">
        <span>48小时快速退款</span>
      </div>
    </div>
    <homeCount />
    <MainCountLine />
    <homeNew :isNew="true"/>
    <homeLittlecarousel :isCss="1" :carousel="homedata.newItemNewUserList"/>
    <MainCountLine />
    <homeNew />
    <homeLittlecarousel :isCss="2" :carousel="homedata.popularItemList"/>
    <MainCountLine />
    <homeLimit />
    <MainCountLine />
    <img class="moveImg" src="../images/icon/move.jpg" alt="">
    <MainCountLine />
    <homeTopicList />
    <homeCart v-show="index !== 0" v-for="(item,index) in homedata.cateList" :key="index" :items="item"/>
    <MainCountLine />
    <div class="footer">
      <div class="footerBtn">
        <div class="btn">下载APP</div>
        <div class="btn">电脑版</div>
      </div>
      <div class="footerSpan">
        <span>网易公司版权所有 © 1997-2018</span>
        <br>
        <br>
        <span>食品经营许可证: JY13301080111719</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import homeCarousel from '../home-carousel/home-carousel.vue'
  import homeCount from '../home-count/home-count.vue'
  import homeNew from '../home-new/home-new.vue'
  import homeLittlecarousel from '../home-littlecarousel/home-littlecarousel.vue'
  import homeLimit from '../home-limit/home-limit.vue'
  import homeTopicList from '../home-topicList/home-topicList.vue'
  import homeCart from '../home-cart/home-cart.vue'

  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed:{
      ...mapState(['homedata'])
    },
    components:{
      homeCarousel,
      homeCount,
      homeNew,
      homeLittlecarousel,
      homeLimit,
      homeTopicList,
      homeCart,
    },
    watch:{
      homedata(){
        this.$nextTick(()=>{
          new BScroll('.count-wrapper',{
            click:true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.count-wrapper
  width 100%
  height 667px
  .content
    width 100%
    padding-bottom 50px
    padding-top 74px
    .moveImg
      width 100%
      height 150px
    .footer
      width 100%
      height 132px
      background-color #414141
      display flex
      flex-direction column
      align-items center
      justify-content space-around
      .footerBtn
        display flex
        justify-content space-between
        font-size 16px
        color #e2e2e2
        width 210px
        height 32px
        .btn
          text-align: center
          line-height 30px
          width 85px
          height 30px
          border 1px solid #545454
      .footerSpan
        text-align: center
        font-size 12px
        color #999999
    .activity
      height 36px
      font-size 12px
      display flex
      justify-content space-around
      align-items center
      padding 0 15px
      div
        width 114px
        height 18px
        display flex
        align-items center
        img
          width 16px
          height 16px
          margin-right 6px
</style>
