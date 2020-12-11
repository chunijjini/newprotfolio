<template>
  <div id="app" >
      <Loading />
        <router-view  />
  </div> 
</template> 

<script> 
  import Loading from '@/components/Loading.vue';
  import myMixin from '@/components/mixin/myMixin'
  export default {

    name: 'App',   
    components: { 
      Loading
    },

  }
</script>

<style lang="scss">
  @import '@/assets/scss/reset'; 
  @import '@/assets/scss/fonts';  
  // @import '@/assets/scss/mixin';  
  #app{ 
    display: block;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    // height: 100%;
    // min-height:100%;
    background-color: #fff;
  }
</style>
