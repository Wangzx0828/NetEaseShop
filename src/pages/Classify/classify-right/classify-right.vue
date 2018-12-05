<template>
  <div class="bscrollwrap">
    <div class="classify-right" v-if="navdata[isNum]">
      <img class="classify-right-img" :src="navdata[isNum].bannerUrl" alt="">
      <div class="classify-right-conent">
        <div class="classify-right-header">{{navdata[isNum].name}}分类</div>
        <ul class="classify-right-list">
          <li class="classify-right-li" v-for="(item,index) in navdata[isNum].subCateList" :key="index">
            <img class="classify-right-li-img" :src="item.wapBannerUrl" alt="">
            <span class="classify-right-li-sp">{{item.name}}</span>
          </li>
        </ul>
      </div>
  </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import PubSub from 'pubsub-js'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        isNum : 0
      }
    },
    mounted(){
      PubSub.subscribe('msg', (msg,data)=>{
        this.isNum= data
      })
    },
    computed:{
      ...mapState(['navdata'])
    },
    watch:{
      navdata(){
        this.$nextTick(()=>{
          new BScroll ('.bscrollwrap',{
            click:true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.bscrollwrap
  width 264px
  height 700px
  padding 15px
  .classify-right
    width 100%
    .classify-right-img
      width 100%
      height 98px
    .classify-right-conent
      display flex
      flex-direction column
      .classify-right-header
        position relative
        height 54px
        font-size 12px
        text-align: center
        line-height 52px
        &::before
          position absolute
          top 50%
          left 25%
          content " "
          display block
          width 20px
          height 1px
          background-color: #eeeeee
        &::after
          position absolute
          top 50%
          right 25%
          content " "
          display block
          width 20px
          height 1px
          background-color: #eeeeee
      .classify-right-list
        display flex
        flex-wrap wrap
        .classify-right-li
          width 72px
          height 108px
          margin-right 15px
          .classify-right-li-img
            width 72px
            height 72px
            border-radius 50%
          .classify-right-li-sp
            width 72px
            height 36px
            display block
            text-align: center
            font-size 12px
</style>
