<template>
  <div id="app">
    <FooterGuide v-show="$route.meta.isShowFooter"
    />
    <router-view></router-view>
    
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components:{
    FooterGuide
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
</style>
