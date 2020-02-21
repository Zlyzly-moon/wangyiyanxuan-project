<template>
  <div class="profileContainer1">
    <div class="profileTop">
      <i class="iconfont icon-home" @click="goHome"></i>
      <img src="../../common/images/logo.webp" alt="">
      <i class="iconfont icon-sousuo_huaban"></i>
      <i class="iconfont icon-cart--copy"></i>
    </div>
    <div class="logo1">
      <img src="../../common/images/logo2.png" alt="">
    </div>
    <div class="phone" @click="goPhone">
      <i></i>
      <span>手机号登录</span>
    </div>
    <div class="email" @click="goEmail">
      <i></i>
      <span>邮箱账号登录</span>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goHome(){
        this.$router.push('/home')
      },
      goPhone(){
        this.$router.push('/login')
      },
      goEmail(){
        this.$router.push('/email')
      }
    },
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.profileContainer1
 background #f2f5f4
 width 100%
 height 1355px
 .profileTop
  width 750px
  height 100px
  background #ffffff
  padding 0 26px 0 24px
  box-sizing border-box
  position fixed
  text-align center
  line-height 100px
  position relative
  i
   width 46px
   font-size 48px
  .icon-home
   float left  
  .icon-cart--copy
   float right
  .icon-sousuo_huaban
   position absolute
   right  90px
  img 
   width 172px
   height 54px
   margin-top 25px
 .logo1
  width 100%
  height 482px
  padding 160px 0 232px 0
  box-sizing border-box
  img 
   width 268px
   height 90px
   margin-left 241px
 .phone
  width 670px
  height 94px
  background #dd1a21
  text-align center
  line-height 94px
  margin-bottom 32px
  margin-left 40px
  font-size 28px
  color #ffffff
 .email
  width 670px
  height 94px
  border 1px solid #dd1a21
  text-align center
  line-height 94px
  margin-left 40px
  color #dd1a21
  font-size 28px



 
</style>

