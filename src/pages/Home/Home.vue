<template>
  <div id="Home" style="width: 100%; height:100%">
    <div class="headerNav">
      <div class="headerTop">
        <img class="logoImg" src="./images/nav/yanxuan.png" alt="">
        <div class="inputText">
          <img src="./images/nav/search2-2fb94833aa.png" alt="">
          <span>搜索商品，共11666款好物</span>
        </div>
        <div class="loginBtn">登录</div>
      </div>
      <div class="headerBottom">
        <div class="listDiv">
            <ul class="navList" v-show="!isRotate">
              <li class="navBtn" :class="{line:isShow === index}" v-for="(item,index) in homedata.cateList" :key="index" @click="lineShow(index)">{{item.name}}</li>
            </ul>
        </div>
        <div class="jiantou" @click="isRotate = !isRotate"><img :class="{rotateSty:isRotate}" src="./images/nav/jiantou.png" alt=""></div>
      </div>
    </div>
    <div class="count-wrapper">
      <div class="content">
        <homeCarousel />
        <div class="activity">
          <div>
            <img src="./images/icon/duihao.png" alt="">
            <span>网易自营品牌</span>
          </div>
          <div>
            <img src="./images/icon/duihao.png" alt="">
            <span>30天无忧退货</span>
          </div>
          <div>
            <img src="./images/icon/duihao.png" alt="">
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
      </div>
    </div>
    <div class="mask" v-show="isRotate">
      <div class="navChildren">
        <div class="channel">全部频道</div>
        <div class="channeldiv">
          <ul class="channellist">
            <li class="channelli" :class="{borderline:isShow === index}" v-for="(item,index) in homedata.cateList" :key="index" @click="lineShow(index)">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import homeCarousel from './home-carousel/home-carousel.vue'
  import homeCount from './home-count/home-count.vue'
  import homeNew from './home-new/home-new.vue'
  import homeLittlecarousel from './home-littlecarousel/home-littlecarousel.vue'
  export default {
    data(){
      return{
        isShow:0,
        isRotate:false
      }
    },
    mounted(){
      this.$store.dispatch('getDatahome',()=>{
        new BScroll('.listDiv',{
          click:true,
          scrollX:true
        })
      })
    },
    computed:{
      ...mapState(['homedata'])
    },
    methods:{
      lineShow(index){
        this.isShow = index;
      }
    },
    components:{
      homeCarousel,
      homeCount,
      homeNew,
      homeLittlecarousel
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.headerNav
  width 100%
  overflow hidden
  background-color: #fff
  position fixed
  top 0
  left 0
  z-index 10
  .headerTop
    padding 8px 15px
    display flex
    justify-content space-around
    align-items center
    .logoImg
      width 69px
      height 20px
      padding-right 10px
    .inputText
      height 28px
      width 221px
      background-color: #ededed;
      border-radius 5px
      display flex
      justify-content center
      align-items center
      color #666
      font-size 13px
      img
        width 14px
        height: 14px
        padding-right: 4px
    .loginBtn
      color #b4282d
      width 36px
      height 18px
      line-height 20px
      text-align: center
      font-size 12px
      border 1px solid #da9496
      border-radius 4px
      margin-left 8px
  .headerBottom
    position fixed
    height 30px
    width 100%
    .listDiv
      height 100%
      width 78%
      position absolute
      top 0
      left 0
      .navList
        background-color: #fff
        height 100%
        width 200%
        display flex
        justify-content space-around
        padding-left 10px
        .navBtn
          font-size 14px
          float left
          height 100%
          padding 0 8px
          line-height 30px
          box-sizing border-box
        .line
          color #b4282d
          border-bottom 2px solid #b4282d
    .jiantou
      position absolute
      top 0
      right 0
      z-index 10
      float right
      width 15%
      height 30px
      text-align: center
      background-color: #fff
      line-height 20px
      box-sizing border-box
      padding-left 20px
      img
        width 15px
        height 15px
        transition transform .5s
      .rotateSty
        transform rotate(180deg)
        transition transform  .5s
.content
  box-sizing border-box
  padding-top 74px
.mask
  position absolute
  top 44px
  left 0
  right 0
  bottom 0
  z-index 9
  width 100%
  height 100%
  background-color rgba(0,0,0,.4)
  .navChildren
    position fixed
    height 186px
    background-color: #fff
    .channel
      font-size: 14px
      height: 30px
      line-height: 30px
      padding-left: 15px
    .channeldiv
      padding-top 12px
      .channellist
        width 100%
        height 100%
        display flex
        flex-wrap: wrap;
        .channelli
          width 74px
          height 27px
          font-size 12px
          border 1px solid #e3e3e3
          border-radius 3px
          text-align: center
          line-height 27px
          margin-left 15px
          margin-bottom 20px
        .borderline
          border 1px solid #b4282d
          color #b4282d
.content
  width 100%
  height 100%
  overflow hidden

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
