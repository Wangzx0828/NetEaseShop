<template>
  <div class="home-limit">
    <div class="home-limit-left">
      <span class="limit-name">严 选 限 时 购</span>
      <div class="limit-time">
        <div class="limit-black">0{{hour}}</div>:
        <div class="limit-black">{{minute<10 ? '0'+minute : minute}}</div>:
        <div class="limit-black">{{second<10 ? '0'+second : second}}</div>
      </div>
      <span class="limit-next">下一场 22:00 开始</span>
    </div>
    <div class="home-limit-right">
      <img src="./iamges/test2.png" alt="">
      <div class="orangeRound">
        <span>￥42</span>
        <span>￥49</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        hour:2,
        minute:0,
        second:0
      }
    },
    mounted(){
      const countDown = setInterval(()=>{
        if(this.hour === 2){
          this.hour = 1
          this.minute = 59
          this.second = 60
        }
        this.second --
        if(this.second<0){
          this.second = 59
          this.minute -= 1
        }else if(this.minute<0){
          this.minute = 59
          this.hour -= 1
        }else if(this.hour<0){
          this.hour = 0
          this.minute = 0
          this.second = 0
          clearInterval(countDown)
        }
      },1000)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home-limit
  background-color: #fff
  width 375px
  height 160px
  padding 15px 24px
  box-sizing border-box
  display flex
  align-items center
  justify-content space-between
  .home-limit-left
    height 90px
    width 120px
    display flex
    flex-direction column
    justify-content space-around
    .limit-name
      font-size 18px
      margin-left 4px
    .limit-time
      display flex
      justify-content space-around
      align-items center
      font-size 18px
      width 120px
      height 28px
    .limit-black
      margin-top 8px
      text-align center
      line-height 28px
      width 31px
      height 28px
      background-color #444444
      border-radius 4px
      font-size 20px
      color white
    .limit-next
      margin-top 12px
      font-size 12px

  .home-limit-right
    position relative
    width 160px
    height 160px
    img
      width 100%
      height 100%
    .orangeRound
      position absolute
      bottom  16px
      right 12px
      width 48px
      height 48px
      border-radius 50%
      background-color: #f59524
      display flex
      flex-direction column
      align-items center
      justify-content center
      span
        font-size 12px
        color white
</style>
