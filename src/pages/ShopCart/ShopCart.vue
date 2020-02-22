<template>
  <div class="shopCart">
    <div class="shopTop">
      <span>购物车</span>
      <span class="lingquan">领券</span>
    </div>
    <div class="shopBottom">
      <div class="shopItem">
        <i></i>
        <span>30天无忧退货</span>
      </div>
      <div class="shopItem">
        <i></i>
        <span>30天无忧退货</span>
      </div>
      <div class="shopItem">
        <i></i>
        <span>30天无忧退货</span>
      </div>
    </div>
    <div class="shopcart">
      <img src="../../common/images/gouwuche.webp" alt="">
      <span class="text">去添加点什么吧</span>
      <div class="btn" @click="goLogin">
        <span>登录</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goLogin(){
        this.$router.push('/login')
      }
    },
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.shopCart
 .shopTop
  width 100%
  height 88px
  padding 0 30px
  box-sizing border-box
  text-align center
  line-height 88px
  display flex
  justify-content space-between
  span 
   font-size 36px
  .lingquan
   font-size 30px
   color #dd1a21
   margin-right 30px
 .shopBottom
  width 100%
  height 70px
  background #eeeeee
  padding 0 30px
  box-sizing border-box
  line-height 70px
  display flex
  justify-content space-between
  span 
   font-size 24px
 .shopcart
  width 100%
  height 1200px
  background #f4f4f4
  img 
   width 248px
   height 248px
   position absolute
   left 50%
   margin-left -124px
   top 380px
  .text 
   color #999
   font-size 30px
   position absolute
   left 50%
   margin-left -110px
   top 629px
  .btn 
   width 480px
   height 92px
   background #dd1a21
   color #ffffff
   text-align center
   line-height 92px
   font-size 30px
   position absolute
   top 700px
   left 50%
   margin-left -240px

 
</style>
