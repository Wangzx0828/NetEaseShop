<template>
  <div id="Home">
    <homeHeader/>
    <router-view />
  </div>
</template>

<script>

  import homeHeader from './home-header/home-header.vue'

  export default {
    components:{
      homeHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#Home
  width 100
  height 100
</style>
