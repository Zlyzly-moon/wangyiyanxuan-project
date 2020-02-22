<template>
  <div>
    <div class="profileContainer2">
      <img src="../../common/images/back.webp" alt="">
      <div class="left">
        <img class="yonghu" src="../../common/images/yonghu.png" alt="">
        <div class="use">
          <span class="phone">17732617284</span>
          <span class="user">普通用户</span>
        </div>
      </div>
      <div class="right">
        <i class="iconfont icon-ico1"></i>
        <div class="Rbottom">
          <i class="iconfont icon-kuaisufan"></i>
          <span class="super">超级会员</span>
          <span class="first">立即试用</span>
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </div>
    </div>

    <!-- 我的资产 -->
    <div class="money">
      <span>我的资产</span>
    </div>
    <!-- 回馈金 -->
    <ul class="moneyContainer">
      <li>

      </li>
    </ul>

    <!-- 我的订单 -->
    <div class="orderContainer">
      <ul>
        <li>
          <i class="iconfont icon-74wodedingdan"></i>
          <p>我的订单</p>
        </li>
        <li>
          <i class="iconfont icon-wuyoutuihuo"></i>
          <p>周六一起拼</p>
        </li>
        <li>
          <i class="iconfont icon-wuyoutuihuo"></i>
          <p>周六一起拼</p>
        </li>
        <li>
          <i class="iconfont icon-wuyoutuihuo"></i>
          <p>周六一起拼</p>
        </li>
        <li>
          <i class="iconfont icon-74wodedingdan"></i>
          <p>我的订单</p>
        </li>
        <li>
          <i class="iconfont icon-wuyoutuihuo"></i>
          <p>周六一起拼</p>
        </li>
        <li>
          <i class="iconfont icon-wuyoutuihuo"></i>
          <p>周六一起拼</p>
        </li>
        <li>
          <i class="iconfont icon-wuyoutuihuo"></i>
          <p>周六一起拼</p>
        </li>
        <li>
          <i class="iconfont icon-74wodedingdan"></i>
          <p>我的订单</p>
        </li>
        <li>
          <i class="iconfont icon-wuyoutuihuo"></i>
          <p>周六一起拼</p>
        </li>
        <li>
          <i class="iconfont icon-wuyoutuihuo"></i>
          <p>周六一起拼</p>
        </li>
        <li>
          <i class="iconfont icon-wuyoutuihuo"></i>
          <p>周六一起拼</p>
        </li>
      </ul>
    </div>

    <!-- 退出登录 -->

    <div class="logout">
      <div class="logoutBtn">退出登录</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.profileContainer2
 width 750px
 position relative
 img 
  width 750px
  height 270px
  position absolute
  top 0
 .left
  width 510px
  height 270px
  left 30px
  top 64px
  .yonghu 
   width 142px
   height 142px
   border-radius 50%
  .use
   position absolute
   top 30px
   span 
    margin-left 170px
    font-size 36px
    color #ffffff
   .user 
    margin-top 20px
    display block
    font-size 28px
   .phone
    display block

 .right
  width 210px
  height 188px
  position absolute
  top 42px
  right 0
  .icon-ico1
   font-size 48px
   position absolute
   top 25px
   right 20px
  .Rbottom
   width 190px
   height 84px
   background #444
   margin-top 100px
   float right 
   border-radius 60px 0 0 60px
   line-height 86px
   .icon-kuaisufan
    font-size 60px
    margin-left 10px
    margin-top 2px
   .super
    font-size 26px
    color #ede7db
    position absolute
    top -18px
    margin-left 8px
   .first
    font-size 20px
    color #ede7db
    margin-left 8px
   .icon-youjiantou
    font-size 18px
    color #ede7db
    margin-left 4px

.money
 width 720px
 height 105px
 margin-left 30px
 border-bottom  1px solid #eeeeee
 font-size 28px
 color #333
 line-height 105px

.moneyContainer
 width 750px
 height 160px
 background red
.orderContainer
 width 750px
 height 763px
 padding 20px 0 40px 0
 box-sizing border-box
 background #eeeeee
 ul 
  li 
   width 249px
   height 180px
   border-right 1px solid #eeeeee
   border-bottom 1px solid #eeeeee
   float left
   text-align center 
   padding-top 45px
   box-sizing border-box
   background #ffffff
   i 
    width 50px
    height 50px
    font-size 50px
    color #333
   p
    font-size 24px
    margin-top 20px
    color #333
.logout
 width 100%
 height 120px
 background #eeeeee
 padding-top 20px
 .logoutBtn
  width 750px
  height 96px
  background #ffffff
  color #333
  font-size 28px
  text-align center
  line-height 96px

 





  

 
</style>
