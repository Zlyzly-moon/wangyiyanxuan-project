<template>
  <div class="buyContainer">
    <div class="buyTop">
      <i class="iconfont icon-home"></i>
      <span>值得买</span>
      <i class="iconfont icon-sousuo_huaban"></i>
      <i class="iconfont icon-cart--copy"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.buyContainer
 .buyTop
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

  span 
   font-size 36px



 
</style>
