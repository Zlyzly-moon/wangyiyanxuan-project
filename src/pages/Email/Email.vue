<template>
  <div>
    <div class="profileContainer">
    <div class="profileTop">
      <i class="iconfont icon-home" @click="goHome"></i>
      <img src="../../common/images/logo.webp" alt="">
      <i class="iconfont icon-sousuo_huaban"></i>
      <i class="iconfont icon-cart--copy"></i>
    </div>
    <div class="logo">
      <img src="../../common/images/logo2.png" alt="">
    </div>

    <div class="loginContainer">
        <input class="input" type="text" placeholder="邮箱账号">
        <input class="inputEamil" type="text" placeholder="密码">
        <div class="textContainer">
            <span>注册账号</span>
            <span>忘记密码</span>
        </div>
        <div class="btn">登录</div>
        <div class="agree">
            <div class="box">
                <img src="../../common/images/box.png" alt="">
            </div>
            <span>我同意</span>
            <span class="t">《服务条款》</span>
            <span>和</span>
            <span class="t">《网易隐私政策》</span>
        </div>
        <div class="other">
            其它方式登录
            <i>></i>
        </div>
    </div>

  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods: {
          goHome(){
              this.$router.push('/home')
          }
      },
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.profileContainer
 background #ffffff
 width 100%
 height 1355px
 .profileTop
  width 750px
  height 88px
  background #f2f5f4
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
 .logo
  width 100%
  padding 0
  margin-top 56px
  height 160px
  img 
   width 268px
   height 90px
   margin-left 241px
 .loginContainer
  padding 0 40px
  box-sizing border-box
  .input
   outline none
   width 670px
   height 90px
   font-size 32px
   color #eeeeee
   border-bottom 2px solid #eeeeee
   margin-bottom 20px
  .inputEamil
   outline none
   width 670px
   height 90px
   font-size 32px
   color #eeeeee
   border-bottom 2px solid #eeeeee
   margin-bottom 20px
  .textContainer
   width 670px
   height 90px
   line-height 90px
   display flex
   justify-content space-between
   span 
    font-size 28px
    color #7f7f7f
  .btn 
   width 670px
   height 90px
   background #dd1a21
   border-radius 10px
   font-size 28px
   text-align center
   color #ffffff
   line-height 90px
   margin-top 10px
  .agree
   width 670px
   height 90px
   line-height 90px
   position relative
   padding-left 45px
   box-sizing border-box
   .box
    display inline-block
    margin 6px 10px 0 0 
    position absolute
    top 0
    left 0
    img
     width 28px
     height 28px
   span 
    font-size 24px
    color #7f7f7f
   .t
    color #007aff
  .other
   text-align center
   font-size 28px
   color #333
   margin-top 26px


    



 

 
</style>
