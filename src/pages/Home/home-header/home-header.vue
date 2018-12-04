<template>
  <div class="headerNav">
    <div class="headerTop">
      <img class="logoImg" src="../images/nav/yanxuan.png" alt="">
      <div class="inputText">
        <img src="../images/nav/search2-2fb94833aa.png" alt="">
        <span>搜索商品，共11666款好物</span>
      </div>
      <div class="loginBtn">登录</div>
    </div>
    <div class="headerBottom">
      <div v-show="!isRotate" class="listDiv">
        <ul class="navList">
            <li class="navBtn"
                :class="{line:index === isShow}"
                v-for="(item,index) in homedata.cateList" :key="index"
                @click="lineShow(index)">
                {{item.name}}
            </li>
        </ul>
      </div>
      <div class="listTable" v-show="isRotate">
        <div class="listTable-all">全部频道</div>
        <ul class="listTable-list">
            <li class="listTable-li"
                :class="{listline:isShow === index}"
                @click="lineShow(index)"
                v-for="(item,index) in homedata.cateList" :key="index">
              {{item.name}}
            </li>
        </ul>
      </div>
      <div class="jiantou" @click="isRotate = !isRotate"><img :class="{rotateSty:isRotate}" src="../images/nav/jiantou.png" alt=""></div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        isRotate:false,
        isShow:0
      }
    },
    methods:{
      lineShow(index){
        this.$router.push(`/home/homechildren/${index}`)
        this.isShow = index;
      }
    },
    mounted(){
      this.isShow = this.$route.params.id
      this.$store.dispatch('getDatahome',()=>{
        new BScroll('.listDiv',{
          click:true,
          scrollX:true
        })
      })
    },
    computed:{
      ...mapState(['homedata'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headerNav
    width 100%
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
      position relative
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

      .listTable
        background-color: white
        .listTable-all
          box-sizing border-box
          padding-left 16px
          line-height 32px
          font-size 14px
        .listTable-list
          padding-top 12px
          height 144px
          display flex
          flex-wrap wrap
          .listTable-li
            width 74px
            height 27px
            border 1px solid #e3e3e3
            border-radius 4px
            font-size 12px
            text-align: center
            line-height 27px
            margin  0 0 20px 15px
          .listline
            color #b4282d
            border 1px solid #d79194
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
</style>
