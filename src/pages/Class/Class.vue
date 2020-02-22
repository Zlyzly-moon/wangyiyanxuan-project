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
          v-for="(item,index) in categoryL1List" :key="index"
          @click="handlePage(index,item.id)"
          :class="{active:current === index}"
          
          >{{item.name}}</li>
        </ul>
      </div>
      
      <!-- 右侧页面 -->
       <ClassRight :pageData='cateLists' :Listid='Listid'/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import ClassRight from '../Class/ClassRight.vue'
  import BScroll from 'better-scroll'
  export default {
    components:{
         ClassRight
    },
    data() {
      return {
        current:0,
        Listid:11
      }
    },
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
      handlePage(index,id){
           this.current = index
           this.Listid = id
      },
      toSearchList(){
          this.$router.push('/SearchList')
         }
    },
    watch: {
       list(){
        this.$nextTick(()=>{
          new BScroll('.navListContainer',{
          click:true,
          scrollY:true,
        })
        })
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
  z-index 200
  background #fff
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
  height 900px
  padding 40px 0
  box-sizing border-box
  border-right 2px solid #eeeeee
  text-align center
  float left 
  margin-top 40px
  .navList
   li
    width 162px
    height 50px
    color #333
    font-size 28px
    margin-bottom 40px
    position relative
    &.active
     color #dd1a21
    &.active:after
     content ''
     width 6px
     height 50px
     background #ab2b2b
     position absolute
     left 0
     top -10px
 </style>
