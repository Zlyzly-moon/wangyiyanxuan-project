<template>
  <div class="classContainer">
    <div class="classTop">
      <div class="classSearch">
        <i></i>
        <span @click="toSearchList">搜索商品, 共22036款好物</span>
      </div>
    </div>
    <div class="classBottom">
      <div class="navListContainer">
        <ul class="navList">
          <li 
          class="active" 
          v-for="(item,index) in categoryL1List" :key="index"
          @click="handlePage"
          
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="navRight">
        <div class="navTop">
          <img src="../../common/images/fenlei.webp" alt="">
        </div>
        <div class="navBottom">
          <ul>
            <li>
              <img src="../../common/images/tup.webp" alt="">
              <span>{{}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    mounted() {
      this.$store.dispatch('getNavListAction')
      this.$store.dispatch('getCateListAction')
    },
    computed: {
      ...mapState({
        categoryL1List:state =>state.categoryL1List,
        cateLists:state =>state.cateLists,
      })
    },
    methods: {
      handlePage(){

      },
      toSearchList(){
          this.$router.push('/SearchList')
         }
    },
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.classContainer
 width 100%
 .classTop
  width 750px
  height 88px
  padding 0 30px
  box-sizing border-box
  position relative
  border-bottom 1px solid #eeeeee
  .classSearch
   width 690px
   height 56px
   background #ededed
   position absolute
   top 16px
   text-align center
   line-height 56px
   border-radius 10px
   span  
    font-size 28px
    color #666
 .navListContainer
  width 162px
  height 1120px
  padding 40px 0
  box-sizing border-box
  border-right 2px solid #eeeeee
  text-align center
  float left 
  .navList
   li
    width 162px
    height 50px
    color #333
    font-size 28px
    margin-bottom 40px
    position relative
    &.active:after
     content ''
     width 6px
     height 50px
     background #ab2b2b
     position absolute
     left 0
     top -10px
 .navRight
  width 588px
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
