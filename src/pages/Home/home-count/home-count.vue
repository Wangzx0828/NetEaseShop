<template>
  <div class="mainCount">
    <div class="mainCount-activity">
      <MainCountLine />
      <div class="mainCount-activity-header">
        <span>品牌制造商直供</span>
        <img src="./images/jiantouyou.png" alt="">
      </div>
      <div class="mainCount-card" v-if="index<4" v-for="(item,index) in homedata.tagList" :key="index">
        <img class="cartImg" :src="item.picUrl" alt="">
        <span class="sp1">{{item.name}}</span>
        <span class="sp2">{{item.floorPrice}}元起</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['homedata'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mainCount-activity
    box-sizing border-box
    display flex
    flex-wrap wrap
    height 320px
    background-color: #fff
    .mainCount-activity-header
      font-size 16px
      width 375px
      height 55px
      display flex
      justify-content center
      align-items center
      img
        margin-left 8px
        width 15px
        height 15px
    .mainCount-card
      position relative
      margin-left 6px
      margin-bottom 3px
      width 178px
      height 118px
      background-color: #f4f4f4
      span
        font 400 14px/24px "微软雅黑"
        position absolute
        top 10px
        left 10px
      .sp2
        top 28px
      .cartImg
        width 178px
        height 118px
</style>
