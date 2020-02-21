<template>
  <div>
    <div id="homeContainer">
        <img src="../../common/images/logo.webp" alt="">
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
           <span @click="toSearchList">搜索商品, 共20261款好物</span>
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
           <li v-for="(navItem,index) in categoryL1List" :key="index">{{navItem.name}}</li>
       </ul>

     </div>
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(focusItem,index) in indexList.focusList" :key="index">
            <img :src="focusItem.picUrl" alt="">
          </div>
        </div> 
        <div class="swiper-pagination">
          <span class=".swiper-pagination-bullet"></span>
        </div>
      </div>
      <!-- 列表 -->
      <div class="bottomList">
        <div v-for="(policyItem,index) in indexList.policyDescList" :key="index">
          <!-- <i>{{policyItem.icon}}</i> -->
          <img :src="policyItem.icon" alt="">
          <span>{{policyItem.desc}}</span>
        </div>
      </div>

      <!-- 商品列表 -->
      <div class="shopListContainer">
        <div class="shopList">
          <ul class="shoplis" v-if="indexList.kingKongModule">
            <li v-for="(Item,index) in indexList.kingKongModule.kingKongList" :key="index">
              <img :src="Item.picUrl" alt="">
              <span>{{Item.text}}</span>
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
          <div class="rightContainer" v-if="indexList.indexActivityModule">
            <div class="top1" v-for="(newcomersItem,index) in indexList.indexActivityModule.slice(0,1)" :key="index">
              <span>{{newcomersItem.title}}</span>
              <span class="today">{{newcomersItem.subTitle}}</span>
              <img :src="newcomersItem.picUrl" alt="">
            </div>
            <div class="bottom1">
              <span>新人拼团</span>
              <span class="one">一元起包邮</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 类目热销榜 -->
          <Demand/>
    
        

         <!-- 新品首发 -->
         <div class="newGoodsContainer">
           <div class="newGoodsTop">
             <span>新品首发</span>
             <div class="more">
               <span>更多</span>
               <i class="iconfont icon-right"></i>
             </div>
           </div>
           <div class="newGoodsBottom">
             <div class="newGoodsList">
               <li v-for="(newItem,index) in indexList.newItemList" :key="index">
                 <img :src="newItem.listPicUrl" alt="">
                 <div class="newGoodsText">{{newItem.name}}</div>
                 <span class="newGoodsPrice">￥{{newItem.retailPrice}}</span>
                 <span class="newGoodsT">{{newItem.itemTagList[0].name}}</span>
               </li>
             </div>
           </div>
         </div>

         <!-- 断货补单网 -->
         <div class="replenishment">
           <ul class="replenishmentList">
             <li v-for="(replenishItem,index) in indexList.sceneLightShoppingGuideModule" :key="index">
               <span>{{replenishItem.styleItem.title}}</span>
               <span class="title">{{replenishItem.styleItem.desc}}</span>
               <div>
                 <img :src="replenishItem.styleItem.picUrlList[0]" alt="">
                 <img :src="replenishItem.styleItem.picUrlList[1]" alt="">
               </div>
             </li>
           </ul>
         </div> 

         <!-- 尾部 -->
         <div class="fotter">
           <div>
             <div class="footerT">
             <div class="leftApp div">
             <span>下载APP</span>
             
           </div>
            <div class="div RApp">电脑版</div>
           
           </div>
             <div class="footerText">
               <span>
               网易公司版权所有 © 1997-2020
               </span>
               <br/>
               <span>
               食品经营许可证：JY13301080111719
               </span>
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
import Demand from '../../components/Demand/Demand'
  export default {
    components:{
      Demand
    },
    data() {
      return {
        isShowMask:false
      }
    },
    mounted() {
       // 分发
      this.$store.dispatch('getNavListAction')
      this.$store.dispatch('getIndexListAction')
      
          
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
       },
         toSearchList(){
          this.$router.push('/SearchList')
         }
     },
     computed: {
       ...mapState({
        //  获取数据
         categoryL1List:state =>state.categoryL1List,
         indexList:state =>state.indexList
       }),
     },
     watch:{
       indexList(){
         this.$nextTick(()=>{
          new Swiper('.swiper-container',{
                      loop: true,
                      autoplay:true,
                      pagination:{
                        el:".swiper-pagination"
                      }
                    })   
       })
       }
     }
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
 img  
  width 32px
  height 32px
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
    flex-wrap wrap 
    li
     width 110px
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

.newGoodsContainer
 width 100%
 height 942px
 background #eee
 .newGoodsTop
  width 100%
  height 100px
  background #ffffff
  padding 0 30px
  box-sizing border-box
  line-height 100px
  span 
   font-size 32px
   overflow hidden
  .more
   display inline-block
   float right
   font-size 28px
 .newGoodsBottom
  width 750px
  height 820px
  background #fff
  padding-left 10px
  box-sizing border-box
  overflow hidden
  .newGoodsList
   width 740px
   height 820px
   padding-bottom 13px
   box-sizing border-box
   display flex
   flex-wrap wrap
   overflow hidden
   li
    margin-left 20px
    margin-bottom 20px
   img
    width 216px
    height 216px
    background #f5f5f5
   .newGoodsText
    font-size 24px
    color #333
    display block
    width 216px
    height 68px
    line-height 35px
    margin-top 10px
    overflow hidden
   .newGoodsPrice
    font-size 32px
    color #dd1a21
    display block
    margin-left -5px
    margin-top 10px
    margin-bottom 12px
   .newGoodsT
    height 30px
    border 1px solid #dd1a21
    font-size 16px
    line-height 30px
    border-radius 30px
    line-height 30px
    margin-top 10px
    padding 3px 5px
    color #dd1a21


.replenishment
 width 750px
 height 596px
 background #eee
 .replenishmentList
  width 100%
  height 576px
  background #fff
  padding 10px 30px
  box-sizing border-box
  li
   width 340px
   height 260px
   background #f5f5f5
   margin 4px 0 0 4px
   padding 20px 0 0 20px
   box-sizing border-box
   float left
   span
    color #333
    font-size 32px
    display block
    margin-left 10px
    margin-bottom 10px
   .title
    font-size 24px
    color #7f7f7f
   div
    display flex
    img
     width 150px
     height 150px
     margin-right 4px

div
 position relative
 .footerT
  width 750px
  height 244px
  background #333
  padding 54px 20px 28px
  box-sizing border-box
  position relative
  .div
   width 172px
   height 62px
   color #fff
   font-size 24px
   border 1px solid #666
   text-align center
   line-height 62px
   margin-bottom 36px
   margin-left 50px
  .RApp,.leftApp
   float left
  .leftApp
   margin-left 150px
 .footerText
  color #999
  display block
  text-align center
  position absolute
  bottom 30px
  left 168px
  line-height 30px






   



</style>
