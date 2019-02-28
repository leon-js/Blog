<template>
  <div id="app">
    <Page_Head></Page_Head>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Page_Head from '@/components/Page_Head'
export default {
  name: 'app',
  components: {
    Page_Head
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
}

#app{
  min-height: 100%;
}
</style>
