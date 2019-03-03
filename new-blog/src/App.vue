<template>
  <div class="app" :class="{apple: isApple}" :isApple="isApple">
    <Page_Head @changeTheam="changeIsApple"></Page_Head>
      <div class="body_body">
        <router-view/>
      </div>
    <Page_Foot></Page_Foot>
  </div>
</template>

<script>
// @ is an alias to /src
import Page_Head from '@/components/head_foot/Page_Head'
import Page_Foot from '@/components/head_foot/Page_Foot'
export default {
  name: 'app',
  components: {
    Page_Head,
    Page_Foot
  },
  data(){
    return {
      isApple: false,
      props: {

      }
    }
  },
  created() {
    if(localStorage.getItem("theam") == 'moring'){
      this.isApple = false
    }else if(localStorage.getItem("theam") == 'night'){
      this.isApple = true
    }else{

    }
  },
  methods: {
    changeIsApple(isApple){
      this.isApple = isApple
    },
  },
  computed: {
    
  }
}
</script>

<style>
html,body{
  margin    : 0;
  padding   : 0;
}
.body_body{
  min-height: 85vh;
}
.app{
  color     : black;
}
.apple{
  color     : gainsboro;
}
</style>
