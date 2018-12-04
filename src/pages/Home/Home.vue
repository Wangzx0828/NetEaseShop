<template>
  <div id="Home">
    <HomeHeader />
    <router-view :key="key"/>
  </div>
</template>

<script>

  import HomeHeader from './home-header/home-header.vue'

  export default {
    components:{
      HomeHeader,
    },
    computed: {
      key() {
        return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#Home
  width 100%
  height 100%
</style>
