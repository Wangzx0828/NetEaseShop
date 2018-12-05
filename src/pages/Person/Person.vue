<template>
  <div id="Person">
    <GoodHeader v-show="isloginShow === 0"/>
    <div class="Person-wrap">
        <img class="Person-conent-logo" src="./images/logo.png" alt="">
      <div class="Person-conent"  v-show="isloginShow === 0">
        <div class="Person-conent-btn1"  @click="isloginShow=2"><i class="iconfont icon-shouji" ></i>手机号码登录</div>
        <div class="Person-conent-btn2" @click="isloginShow=1"><i class="iconfont icon-youxiang" ></i>邮箱账号登录</div>
        <div class="Person-conent-sp1">手机号快速注册<i class="iconfont icon-jiantouyou"></i></div>
      </div>
      <div class="Person-pwdlogin"  v-show="isloginShow === 1">
        <span class="logintext">账号登录</span>
        <input type="text" placeholder="请输入用户名">
        <input type="text" placeholder="请输入密码">
        <div class="logincaptach">
          <input type="text" placeholder="请输入验证码">
          <img src="./images/captcha.svg" alt="">
        </div>
        <button class="pwdloginBtn">登 录</button>
        <span class="forwe">关于我们</span>
      </div>
      <div class="Person-pwdlogin"  v-show="isloginShow === 2">
        <span class="logintext">短信登录</span>
        <input type="text" placeholder="请输入手机号">
        <input type="text" placeholder="请输入验证码">
        <span class="hint">温馨提示：未注册网易严选账号的手机号，登录时将自动注册，且代表已同意<span class="redhint">《用户服务协议》</span></span>
        <button class="pwdloginBtn">登 录</button>
        <span class="forwe">关于我们</span>
      </div>
      <div class="Person-footer"  v-show="isloginShow === 0">
        <span><i class="iconfont icon-weixin"></i>微信</span>|
        <span><i class="iconfont icon-QQ"></i>QQ</span>|
        <span><i class="iconfont icon-weibo"></i>微博</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isloginShow:0
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #Person
    width 100%
    height 100%
    background-color: #f2f5f4
    .Person-wrap
      width 100%
      height 590px
      display flex
      flex-direction column
      justify-content space-between
      align-items center
      .Person-conent-logo
        width 150px
        height 52px
        margin 60px 0
      .Person-conent
        width 100%
        height 320px
        display flex
        flex-direction column
        align-items center
        .Person-conent-btn1
          width 333px
          height 43px
          font-size 14px
          text-align: center
          line-height 43px
          display flex
          justify-content center
          background-color: #b4282d
          color #fff
          border-radius 4px
          margin-bottom 15px
          .icon-shouji
            font-size 18px
            padding-right 4px
        .Person-conent-btn2
          width 333px
          height 43px
          font-size 14px
          text-align: center
          line-height 43px
          display flex
          justify-content center
          border 1px solid #b4282d
          border-radius 4px
          color #b4282d
          margin-bottom 15px
          box-sizing border-box
          .icon-youxiang
            font-size 20px
            padding-right 10px
        .Person-conent-sp1
          font-size 14px
          .icon-jiantouyou
            margin-left 6px
      .Person-pwdlogin
        height 500px
        display flex
        flex-direction column
        align-items center
        justify-content space-around
        .logintext
          font 600 24px/24px  '楷体'
        .logincaptach
          display flex
          flex-direction column
        .hint
          font-size 12px
          width 314px
          .redhint
            color #b4282d
            line-height 24px
        img
          position absolute
          right 18px
          width 150px
          height 50px
        input
          color white
          background-color #000
          border 2px solid #fff
          padding-left 10px
          font-size 14px
          width 300px
          height 47px
          border-radius 6px
        .pwdloginBtn
          width 300px
          height 46px
          background-color #b4282d
          border 0
          border-radius 4px
          font-size 16px
          color white
        .forwe
          font-size 16px
          color #999999
      .Person-footer
        font-size 12px
        color #979797
        height 30px
        width 260px
        display flex
        align-items center
        justify-content space-between
        .iconfont
          font-size 12px
          margin-right 4px
</style>
