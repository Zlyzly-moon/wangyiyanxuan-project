<template>
  <div>
    <div id="homeContainer">
        <img src="../../common/images/logo.webp" alt="">
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
           <span>搜索商品, 共20261款好物</span>
        </div>
        <div class="login">登录</div>
    </div>
     <!-- 导航 -->
     <div class="listContainer">
       <ul class="navList">
           <li>推荐</li>
           <li>居家生活</li>
           <li>服饰鞋包</li>
           <li>美食酒水</li>
           <li>个护清洁</li>
           <li>母婴亲子</li>
           <li>运动旅行</li>
           <li>数码家电</li>
           <li>全球特色</li>
      </ul>
     </div>
     <i class="iconfont icon-arrow-down"></i>
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../common/images/swiper/01.webp" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/swiper/2.webp" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/swiper/3.webp" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/swiper/4.webp" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/swiper/5.webp" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/swiper/6.webp" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../common/images/swiper/7.webp" alt="">
          </div>
        </div> 
      </div>
      <!-- 列表 -->
      <div class="bottomList">
        <div>
          <i class="iconfont icon-wangyi"></i>
          <span>网易自营品牌</span>
        </div>
        <div>
          <i class="iconfont icon-img_wuyoutuikuanx"></i>
          <span>30天无忧退货</span>
        </div>
        <div>
          <i class="iconfont icon-tuikuan"></i>
          <span>48小时极速退款</span>
        </div>
      </div>


  </div>
</template>

<script type="text/ecmascript-6">
import BScorll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
  export default {
     mounted() {
       new Swiper('.swiper-container',{
            loop: true
          })   
          new Swiper('.swiper-container')
          var mySwiper = document.querySelector('.swiper-container').swiper
          mySwiper.slideNext();

          new BScorll('.listContainer',{
            scrollX:true
          })
     },
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
#homeContainer
 width 100%
 height 88px
 padding 16px 30px
 box-sizing border-box
 display flex
 align-items center
 width 100%
 height 88px
 img 
  width 138px
  height 40px
  margin-right 20px
 .search
  width 442px
  height 56px
  background #ededed
  border-radius 10px
  text-align center
  line-height 54px
  font-size 28px
  color #666666
  .icon-sousuo 
   font-size 36px
   margin-right 10px
 .login
  width 74px
  height 40px
  border 1px solid #dd1a21
  border-radius 10px
  color #dd1a21
  text-align center
  line-height 40px
  margin-left 16px
.icon-arrow-down
  width 100px
  height 60px
  background #ffffff
  padding 0 
  margin 0
  position absolute
  right 0
  z-index 10
  text-align center
  line-height 60px
  top 86px
.listContainer
 height 60px
 width 750px
 position relative
 .navList
  padding 0 30px
  width 1460px
  height 60px
  display flex
  white-space nowrap
  text-align center
  line-height 60px
  overflow hidden
  li
    padding 0 16px
    margin-right 20px
    color #333
    font-size 28px
    position relative
    right 0
    &:first-child:after
      content ''
      position absolute
      left 0
      bottom 0
      width 100%
      height 4px
      background #dd1a21
.swiper-container
 width 100%
 height 370px
 .swiper-wrapper
  width 100%
  height 370px
  .swiper-slide
   width 100%
   height 370px
   img 
    width 100%
    height 370px
.bottomList
 width 750px
 height 72px
 display flex
 padding 0 30px
 align-items center
 box-sizing border-box
 div
  width 228px
  height 36px
 i 
  font-size 32px
 span  
  font-size 24px
  padding-left 8px
</style>
