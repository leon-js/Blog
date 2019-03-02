<template>
  <div class="app" :class="{apple: isApple}" :isApple="isApple">
    <Page_Head @changeTheam="changeIsApple"></Page_Head>
      <router-view/>
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
      console.log(1)
    }else if(localStorage.getItem("theam") == 'night'){
      this.isApple = true
      console.log(2)
    }else{
      console.log("welcome")
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
  margin: 0;
  padding: 0;
}

.app{
  color: black;
}

.apple{
  color: gainsboro;
}

</style>
