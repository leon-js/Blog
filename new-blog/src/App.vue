<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from '@/views/Home'
export default {
  name: 'app',
  components: {
    Home
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
