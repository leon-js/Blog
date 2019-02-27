<template>
<div>
  <div class="container">
    <h1 :style="{color: url}">我的第一个 Bootstrap 页面</h1>
    <p>这是一些文本。</p> 
  </div>
  <div class="container-fluid">
    <h1>我的第一个 Bootstrap 页面</h1>
    <p>{{url}}</p> 
  </div>
  <h2>{{url}}</h2>
  <button @click="changecolor">dianj</button>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  },
  data() {
    return {
      url: process.env.VUE_APP_HeadBgColorBlue,
    }
  },
  methods:{
    changecolor(){
      this.url = process.env.VUE_APP_HeadBgColorBlack
    }
  }
}
</script>

<style>

</style>
