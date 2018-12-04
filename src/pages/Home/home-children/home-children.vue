<template>
  <div class="homeChildren">
    <div id="home-children">
      <img class="home-children-img" v-lazy="catelist[isPath].bannerUrl" alt="">
      <homeCart :items="catelist[isPath]"/>
    </div>
  </div>
</template>

<script>

  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  import homeCart from '../home-cart/home-cart.vue'
  export default {
    mounted(){
      this.$store.dispatch('getCateList',()=>{
        this.$nextTick(()=>{
          new BScroll('.homeChildren',{
            click:true
          })
        })
      })
    },
    computed:{
      ...mapState(['catelist']),
      isPath(){
        let path = this.$route.params.id;
        return path
      }
    },
    components:{
      homeCart
    },
    watch:{
      '$route'(to,from){

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.homeChildren
  width 100%
  height 600px
  #home-children
    width 100%
    padding-top 72px
    .home-children-img
      width 100%
      height 185px
</style>
