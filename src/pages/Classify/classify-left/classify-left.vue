<template>
  <div class="classify-left">
    <div class="classify-left-wrap">
      <ul class="classify-left-list">
        <li class="classify-left-li" :class="{lired:isCss === index}"
            v-for="(item,index) in navdata"
            :key="index"
            @click="isCssShow(index)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import PubSub from 'pubsub-js'
  export default {
    data(){
      return{
        isCss:0
      }
    },
    computed:{
      ...mapState(['navdata'])
    },
    methods:{
      isCssShow(index){
        this.isCss = index
        PubSub.publish('msg',index)
      }
    },
    watch:{
      navdata(){
        this.$nextTick(()=>{
          new BScroll ('.classify-left-wrap',{})
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.classify-left
  width 81px
  height 100%
  border-right 1px solid #ececec
  .classify-left-wrap
    height 575px
    .classify-left-list
      margin-top 10px
      display flex
      flex-direction column
      padding-bottom 20px
      .classify-left-li
        display flex
        justify-content center
        align-items center
        margin-top 10px
        text-align: center
        height 38px
        font-size 14px
      .lired
        border-left 3px solid #b4282d
        color #b4282d
        font-size 18px
        font-weight 700
</style>
