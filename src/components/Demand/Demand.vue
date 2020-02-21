<template>
 <div>
    <div class="demand">
    <div class="text">类目热销榜</div>
      <div class="demandTop">
        <div class="demL" v-for="(item,index) in categoryfirst" :key="index">
          <span class="rexiao">{{item.categoryName}}</span>
          <i class="iconfont icon-xiahuaxian"></i>
          <img :src="item.picUrl" alt="">
        </div>
        <div class="demandList">
            <ul>
              <li v-for="(item2,index) in categorylast" :key="index">
                <span>{{item2.categoryName}}</span>
                <img :src="item2.picUrl" alt="">
              </li>
           </ul>
        </div>
      </div>
    </div>

<div style="clear:both;"></div>
     <!-- 限时购 -->
         <div class="purchaseContainer">
           <div class="purchase">
             <span>限时购</span>
             <div class="timeContainer">
               <div></div>
               <span> : </span>
               <div></div>
               <span class="t2"> : </span>
               <div></div>
             </div>
             <div class="more">
               <span>更多</span>
               <i class="iconfont icon-right"></i>
             </div>
           </div>

           <div class="newListContainer">
             <ul class="newList" v-if="indexList.flashSaleModule">
               <li v-for="(falshItem,index) in indexList.flashSaleModule.itemList" :key="index">
                 <img :src="falshItem.picUrl" alt="">
                 <div class="price">
                   <span class="y1">￥</span>
                   <span class="y1">{{falshItem.activityPrice}}</span>
                   <span class="y2">￥</span>
                   <span class="y2">{{falshItem.originPrice}}</span>
                 </div>
               </li>
           
             
              
             </ul>
           </div>

         </div>
 </div>


    
        


          
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    mounted() {
      this.$store.dispatch('getIndexListAction')
    },
    computed: {
        ...mapState({
          indexList:state =>state.indexList
        }),
      categoryfirst(){
         if(this.indexList.categoryHotSellModule){
           return this.indexList.categoryHotSellModule.categoryList.slice(0,2)
         }
       },
       categorylast(){
         if(this.indexList.categoryHotSellModule){
           return this.indexList.categoryHotSellModule.categoryList.filter((item,index)=>{
             return index >1
           })
         }
       }
    },
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
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
   position relative
   float left
   margin-right 10px
   .rexiao
    font-size 28px
    color #333
    position absolute
    top 30px
    left 30px
   .iconfont  
    font-size 70px
    position absolute
    top 30px
    left 28px
   img
    width 200px
    height 200px
    margin-left 140px
  .demandList
   float left 
   margin-top 10px
   text-align center
   
   ul
    li
     width 165px
     height 180px
     background #f5f5f5
     float left
     margin-right  10px
     margin-bottom 10px
     position relative
     span 
      font-size 24px
      color #333
      position absolute
      top -20px
     img
      width 120px
      height 120px
      margin-top 50px
.purchaseContainer
  width 750px
  height 740px
  background #eee
  padding 20px 0
  box-sizing border-box
  .purchase
   width 750px
   height 100px
   background #fff
   padding 0 30px
   box-sizing border-box
   font-size 32px
   color #333
   line-height 100px
   position relative
  .timeContainer
   display flex
   position absolute
   top 35px
   left 135px
   div
    width 36px
    height 36px
    background #333
    border-radius 5px
    margin 0 10px
   span 
    position absolute
    top -35px
    left 52px
   .t2
    left 108px
  .more
   display inline-block
   float right
   font-size 28px
 .newListContainer
  width 750px
  height 600px
  background #fff
  .newList
   width 750px
   height 600px
   padding 0 10px 0 30px
   box-sizing border-box
   li
    float left
    margin-right 20px
    margin-bottom 20px
    img 
     width 216px
     height 216px
     background #eee
    .price
     width 216px
     height 40px
     padding 0 0 0 20px
     box-sizing border-box
     margin-top 20px
     .y1
      font-size px
      color #dd1a21
      font-weight 600
     .y2
      font-size 24px
      color #7f7f7f 



</style>
