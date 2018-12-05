<template>
  <div id="classify">
    <ClassifyHeader style="position: relative; z-index: 2"/>
    <div class="classify-conent">
      <ClassifyLeft />
      <ClassifyRight />
    </div>
  </div>
</template>

<script>
  import ClassifyHeader from './classify-header/classify-header.vue'
  import ClassifyLeft from './classify-left/classify-left.vue'
  import ClassifyRight from './classify-right/classify-right.vue'
  export default {
    components:{
      ClassifyHeader,
      ClassifyLeft,
      ClassifyRight
    },
    mounted(){
      this.$store.dispatch('getDataNav')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#classify
  width 100%
  height 100%
  .classify-conent
    display flex
</style>
