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
           <li v-for="(navItem,index) in categoryL1List" :key="index">{{navItem.name}}</li>
      </ul>
     </div>
     <i class="iconfont icon-arrow-down" @click="handleButton"></i>
     <!-- 遮罩层 -->
     <div class="mask" v-show="isShowMask=isShowMask">
       <div class="maskTop">
         <span>全部频道</span>
         <div class="icon">
           <i class="iconfont icon-up" @click="handleBack"></i>
         </div>
       </div>
       <ul class="maskList">
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
        <div class="swiper-pagination">
          <span class=".swiper-pagination-bullet"></span>
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

      <!-- 商品列表 -->
      <div class="shopListContainer">
        <div class="shopList">
          <ul class="shoplis">
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
          </ul>
           <ul class="shoplis">
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
            <li>
              <img src="../../common/images/swiper/8.png" alt="">
              <span>新品首发</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 宅家 -->
      <div class="zaijiaContainer">
        <div class="zaijiaTop">
           <img src="../../common/images/zaijia.webp" alt="">  
        </div>
        <div class="zaijiaBottom">
          <div class="fangyi">
            <img src="../../common/images/fangyi.gif" alt="">
          </div>
          <div class="zaijiaList">
            <ul>
            <li>
              <img src="../../common/images/gaoxiao.webp" alt="">
            </li>
            <li>
              <img src="../../common/images/gaoxiao.webp" alt="">
            </li>
            <li>
              <img src="../../common/images/gaoxiao.webp" alt="">
            </li>
            <li>
              <img src="../../common/images/gaoxiao.webp" alt="">
            </li>
          </ul>
          </div>
        </div>
      </div>

      <!-- 新人专享 -->
      <div class="newcomersContainer">
        <div class="comersTop">
          <span class="line1 line"></span>
          <span> 新人专享礼 </span>
          <span class="line2 line"></span>
        </div>
        <div class="comersBottom">
          <div class="leftContainer">
            <span>新人专享礼包</span>
            <img src="../../common/images/zhijian.png" alt="">
          </div>
          <div class="rightContainer">
            <div class="top1">
              <span>福利社</span>
              <span class="today">今日特价</span>
              <img src="../../common/images/saoba.webp" alt="">
            </div>
            <div class="bottom1">
              <span>新人拼团</span>
              <span class="one">一元起包邮</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 类目热销榜 -->
          <div class="demand">
             <div class="text">类目热销榜</div>
             <div class="demandTop">
                <div class="demL">
                  <span class="rexiao">热销榜</span>
                  <span class="bLine"></span>
                  <img src="../../common/images/rexiao.webp" alt="">
                </div>
                <div class="demR">
                  <span>好评榜</span>
                  <span></span>
                  <img src="../../common/images/rexiao.webp" alt="">
                </div>
                <div class="demandList">
                  <ul>
                    <li>
                      <span>美食酒水榜</span>
                      <img src="../../common/images/rexiao.webp" alt="">
                    </li>
                    <li>
                      <span>美食酒水榜</span>
                      <img src="../../common/images/rexiao.webp" alt="">
                    </li>
                    <li>
                      <span>美食酒水榜</span>
                      <img src="../../common/images/rexiao.webp" alt="">
                    </li>
                    <li>
                      <span>美食酒水榜</span>
                      <img src="../../common/images/rexiao.webp" alt="">
                    </li>
                    <li>
                      <span>美食酒水榜</span>
                      <img src="../../common/images/rexiao.webp" alt="">
                    </li>
                  </ul>
                </div>
             </div>
          </div>


  </div>
</template>

<script type="text/ecmascript-6">
import BScorll from 'better-scroll'
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
  export default {
    data() {
      return {
        isShowMask:false
      }
    },
    mounted() {
       // 分发
      this.$store.dispatch('getNavListAction')
       new Swiper('.swiper-container',{
            loop: true,
            autoplay:true,
            pagination:{
              el:".swiper-pagination"
            }
          })   
          
          new BScorll('.listContainer',{
            scrollX:true
          })

          
     },
     methods: {
       handleButton(){
         this.isShowMask = !this.isShowMask
       },
       handleBack(){
         this.isShowMask = !this.isShowMask
       }
     },
     computed: {
       ...mapState({
        //  获取数据
         categoryL1List:state =>state.categoryL1List
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
 position relative
 height 60px
 line-height 60px
 display flex
 overflow hidden
 .navList
  display flex
  font-size 28px
  white-space nowrap
  li
    padding 0 16px
    margin-right 20px
    color #333
    font-size 28px
    position relative
    right 0
    font-weight 500 
    &:first-child
     margin-left 30px
     color #dd1a21
    &:last-child
     margin-right 120px
    &:first-child:after
      content ''
      position absolute
      left 0
      bottom 0
      width 100%
      height 4px
      background #dd1a21
.mask
 position absolute
 top 88px
 z-index 20
 .maskTop
  width 100%
  height 60px
  background #fff
  font-size 28px
  padding 0 0 0 30px
  color #333
  line-height 60px
  box-sizing border-box
  display flex
  justify-content space-between
  .icon
   width 100px
   height 60px
   background #ffffff
   text-align center
   line-height 60px
   i
   &.active 
    transform rotateX(180deg)
   

 .maskList
  width 100%
  height 312px
  padding-top 24px
  background #fff
  display flex
  flex-wrap wrap
  box-sizing border-box
  li
   width 150px
   height 56px
   background #FaFaFa
   font-size 24px
   text-align center
   line-height 56px
   margin 0 0 40px 30px
   border-radius 5px
   &:first-child
    border 1px solid #dd1a21
    color #dd1a21


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
 /deep/.swiper-pagination
  .swiper-pagination-bullet
   width 40px
   height 4px
   background #ffffff
   border-radius 0
   margin-bottom 20px
.bottomList
 width 750px
 height 72px
 display flex
 padding 0 30px
 box-sizing border-box
 align-items center
 div
  width 228px
  height 36px
  display flex
  align-items center
 i 
  font-size 32px
  color #dd1a21
 span  
  font-size 24px
  padding-left 8px
  font-weight 400
.shopListContainer
 width 750px
 height 373px

 .shopList
  width 750px
  height 341px  
  .shoplis
    display flex 
    li
     width 20%
     margin 10px 20px
    img  
      width 110px
      height 110px
      margin-bottom 10px 
    span 
      display block
      width 110px
      height 36px
      line-height 30px
      font-size 24px 
      text-align center 
      color #333
.zaijiaContainer
 width 100%
 height 828px
 .zaijiaTop
  width 100%
  height 240px
  img 
    width 100%
    height 100%
 .zaijiaBottom
  width 100%
  background #1674e3
  padding 20px
  box-sizing border-box
  .fangyi
   width 710px
   height 160px
   margin-bottom 5px
   img 
    width 100%
    height 100%
  .zaijiaList
   ul
    display flex
    flex-wrap wrap
    li
     margin-top 5px
     &:nth-child(2n+1)
      margin-right 10px
     img 
      width 349px
      height 186px

.newcomersContainer
 width 750px
 height 588px
 padding-bottom 30px
 padding-top 20px 
 box-sizing border-box
 background #ededed
 .comersTop
  width 750px
  height 90px
  background #ffffff
  color #333
  font-size 32px
  text-align center
  line-height 90px
  position relative
  .line 
   display block
   width 24px
   height 3px
   background #333
   position absolute
   top 0
   right 0
   left -220px
   bottom  0
   margin auto
  .line2
   left 220px
 .comersBottom
  width 750px
  height 458px
  background #fff
  padding 0 30px
  box-sizing border-box
  .leftContainer
   width 343px
   height 434px
   background #f9e9cf
   float left
   span
    width 100%
    height 78px
    display block
    color #333
    font-size 32px
    padding 30px 0 0 30px
   img  
    width 258px
    height 257px
    display block
    margin 0 auto
  .rightContainer
   width 343px
   height 215px
   background #FBE2D3
   float right
   padding 20px 0 0 30px
   box-sizing border-box
   .top1
    position relative
    span
     font-size 32px
     display block
     margin-bottom 10px
    .today
     font-size 24px
     color #7f7f7f
    img 
     width 200px
     height 200px
     display block
     position absolute
     left 120px
     top -10px
   .bottom1
    width 343px
    height 215px
    background #F9E9CF
    float right
    margin-top 123px
    padding 20px 0 0 30px
    box-sizing border-box
    span
     font-size 32px
     color #333
     display block
    .one
     width 120px
     height 32px
     background #cbb693
     color #ffffff
     font-size 22px
     text-align center
     line-height 32px
     border-radius 6px
     margin-top 5px

.demand
 width 750px
 height 100px
 line-height 100px
 .text
  font-size 32px
  color #333
  margin-left 30px
 .demandTop
  width 750px
  height 610px
  padding 0 20px 20px 30px
  box-sizing border-box
  .demL
   width 340px
   height 200px
   background #f9f3e4
   span 
    font-size 28px
    color #333
   .bLine
    width 48px
    height 4px
    color #333
    display block
    z-index 100



</style>
