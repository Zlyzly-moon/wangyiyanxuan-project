<template>
  <div class="buyContainer">
    <div class="buyTop">
      <i class="iconfont icon-home"></i>
      <span>值得买</span>
      <i class="iconfont icon-sousuo_huaban"></i>
      <i class="iconfont icon-cart--copy"></i>
    </div>

    <div class="swiperTab">
            <div class="swiperTabContainer">
                <div class="title">
                    <img class="buy" src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
                    <div class="text">严选好物 用心生活</div>
                    <img class="bg" src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
                </div>
                <div class="content">
                    <div class="swiper-container5">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item, index) in newArray" :key="index">
                                <div class="group" >
                                    <div class="top" v-for="(item1, index1) in item" :key="index1">
                                        <div class="topImg">
                                            <img :src="item1.picUrl" alt="">
                                        </div>
                                        <div class="detail">
                                            <div class="line1">
                                                {{item1.mainTitle}}
                                            </div>
                                            <div class="line2">
                                                {{item1.viceTitle}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>


 <div class="box">
            <waterfall :col='col' :width="width" :gutterWidth="gutterWidth">
                <template>
                    <div class="cell-item" v-for="(item, index) in data" :key="index">
                        <img :src="item.topics[0].picUrl"  alt="" class="img">
                        <div class="line1" >
                           {{item.topics[0].title}}
                        </div>
                        <div class="line2">
                            <div class="userInfo">
                                <img :src="item.topics[0].avatar" alt="" class="avt">
                                <div class="name">{{item.topics[0].nickname}}</div>
                            </div>
                            <div class="see">
                                <img class="seeImg" src="data:image/png;base64,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" alt="">
                                <div class="seeText">{{item.topics[0].readCount}}</div>
                            </div>
                        </div>
                    </div>
                </template>
            </waterfall>
        </div>


  </div>

  
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper' 
import 'swiper/css/swiper.min.css';
import {mapState} from 'vuex'
  export default {
    data() {
      return {
        width:345,
        col:2,
        gutterWidth:20,
      }
    },
    mounted() {
      this.$store.dispatch('getBuyListAction')
      this.$store.dispatch('getPuBuListAction')

      new Swiper('.swiper-container5', {
                            autoplay:true,
                            slidesPerView:'4',
                            slidesPerGroup:1,
                            loop:false,
                            pagination: {
                                el: '.swiper-pagination',
                            },
                        })
    },
    computed: {
      ...mapState({
        buyList:state =>state.buyList,
        data:state =>state.data,
      }),
      newArray(){
        if (this.buyList) {
          return [this.buyList.slice(0,2),
           this.buyList.slice(2,4),
           this.buyList.slice(4,6),
           this.buyList.slice(6,8),
           this.buyList.slice(8,10),
           this.buyList.slice(10,12),
           this.buyList.slice(12,14),
           this.buyList.slice(14,16),
          ]
        }
      }

    },
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

 .swiperTab
        width 100%
        // height 785px
        .swiperTabContainer
            width 100%
            // height 685px
            position relative
            .title
                width 100%
                height 524px
                position relative
                .buy
                    width 130px
                    height 69px
                    position absolute
                    top 60px
                    left 12px
                .text
                    color #ffffff
                    font-size 30px
                    line-height 44px
                    position absolute
                    top 79px
                    left 146px
                .bg
                    height 518px
            .content
                    width 710px
                    height 540px
                    background-color #ffffff
                    margin 0 20px
                    position absolute
                    top 145px
                    border-radius 16px
                    overflow hidden
                    .swiper-container5
                        .swiper-pagination-bullet
                            background-color #d9d9d9
                            border-radius 0
                            width 40px
                            height 4px
                            border none
                        .swiper-pagination
                            bottom -50px
                        .swiper-pagination-bullet-active
                            background-color #dd1a21
                        .swiper-wrapper
                            width 100%
                            // height 700px
                            .swiper-slide
                                width 25%
                                // height 540px
                                .group
                                    width 180px
                                    height 470px
                                    box-sizing border-box
                                    padding 36px 6px 6px
                                    .top
                                        width 168px
                                        height 201px
                                        margin-bottom 28px
                                        .topImg
                                            width 120px
                                            height 120px
                                            margin 0 24px
                                            img 
                                                width 120px
                                                height 120px
                                        .detail
                                            text-align center
                                            .line1
                                                width 168px
                                                height 40px
                                                font-size 28px
                                                font-weight 700
                                                line-height 40px
                                                color #333333
                                            .line2
                                                font-size 24px
                                                line-height 15px
                                                color #999
 




 .box
        width 100%
        height 100%
        padding  30px 20px 0
        box-sizing border-box
        .cell-item
            background-color #fff
            border-radius 16px
            overflow hidden
            margin-bottom 20px
            .img
                width 345px
            .line1
                width 343px
                box-sizing border-box
                padding 18px 16px 0
                font-size 28px
                line-height 40px
                color #333
            .line2
                width 343px
                height 89px
                box-sizing border-box
                padding 17px 16px 12px
                display flex
                justify-content space-between
                .userInfo
                    // width 104px
                    height 48px
                    display flex
                    .avt
                        width 48px
                        height 48px
                        border 1px solid #d9d9d9
                        border-radius 24px
                    .name
                        // width 48px
                        height 48px
                        color #7f7f7f
                        font-size 24px
                        line-height 48px
                        margin-left 8px
                .see
                    // width 100px
                    height 48px
                    display flex
                    .seeImg
                        width 32px
                        height 32px
                    .seeText                          
                        height 32px
                        line-height 32px
                        font-size 24px     
                        color #7f7f7f



 
</style>
