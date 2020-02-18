<template>
  <div id="footerContainer">
     <div :class="{active:$route.path === '/home'}" class="footerItem" @click="goPath('/home')">
         <i class="iconfont icon-home"></i>
         <span>首页</span>
     </div>
     <div :class="{active:$route.path === '/class'}"
@click="goPath('/class')" class="footerItem">
       <i class="iconfont icon-classify"></i>
         <span>分类</span>
     </div>
     <div :class="{active:$route.path === '/buy'}"
@click="goPath('/buy')" class="footerItem">
       <i class="iconfont icon-zhidemai"></i>
         <span>值得买</span>
     </div>
     <div :class="{active:$route.path === '/shopcart'}"
@click="goPath('/shopcart')" class="footerItem">
       <i class="iconfont icon-cart--copy"></i>
         <span>购物车</span>
     </div>
     <div :class="{active:$route.path === '/profile'}"
@click="goPath('/profile')" class="footerItem">
       <i class="iconfont icon-tubiao-"></i>
         <span>个人</span>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goPath(path){
        this.$router.push(path)
      }
    },
  }
</script>

<style lang="stylus">
@import "../../common/stylus/mixins.styl"
#footerContainer
 display flex
 left 0
 bottom 0
 width 100%
 height 100px
 top-border-1px(#eee)
 position fixed
 box-sizing border-box
 background-color #fff
 z-index 120
 align-items center
 .footerItem 
   width 20%
   height 50px
   text-align center
   display flex
   flex-direction column
   span
    font-size 24px
    margin-top 4px
   &.active
     color #dd1a21
   .iconfont
     font-size 40px
     line-height 40px
   
 
</style>
