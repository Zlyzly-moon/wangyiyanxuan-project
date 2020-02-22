<template>
  <div>
<div class="navRight">
        <div class="navTop">
          <img src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
        </div>
        <div class="navBottom">
          <ul v-if="result">
             <li v-for="(item, index) in  result.categoryList||result.subCateList" :key="index">
              <img :src="item.wapBannerUrl" alt="">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
  export default {
      props:['pageData','Listid'],
      data() {
          return {
              sortId:0,
              result:''
          }
      },
      mounted() {
           new BScroll('.navRight',{
                click:true,//使用better-scroll 会把我们的click禁用 
                scrollY:true,
            })
      },
      watch:{
       pageData(){//对shuData进行监视  数据回来了  调用 this.$nextTick
       this.$nextTick(()=>{//在修改数据之后立即使用这个方法，获取更新后的 DOM。
                
            this.result = this.pageData[0]
        })
       },
      Listid(value){//对左侧导航id 进行监视
        this.$nextTick(()=>{//在修改数据之后立即使用这个方法，获取更新后的 DOM。
               
        })
          this.sortId = value;
          console.log(value);
          this.result = this.pageData.find((item)=>{
                return  item.id === this.Listid
        })
           
      }
      }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.navRight
  width 588px
  height 500px
  padding 40px 20px 0 30px
  box-sizing border-box
  float right
  .navTop
   img 
    width 528px
    height 192px
  .navBottom
   ul
    width 100%
    display flex
    flex-wrap wrap
    li 
     height 216px
     width 144px
     text-align center
     margin-right 35px
     img 
      width 144px
      height 144px
     span 
      width 144px
      height 72px
      color #333


    

 
</style>
