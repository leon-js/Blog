<template>
<!-- <div>
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
</div> -->
  <div class="home">
    <div id="demo" class="carousel slide" data-ride="carousel">
 
  <!-- 指示符 -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
 
  <!-- 轮播图片 -->
  <div class="carousel-inner">
    <router-link>
      <div class="carousel-item active">
        <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg">
      </div>
    </router-link>
    
    <router-link>
      <div class="carousel-item">
        <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg">
      </div>
    </router-link>
    
    <router-link>
      <div class="carousel-item">
        <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg">
      </div>
    </router-link>
  </div>
 
  <!-- 左右切换按钮 -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
 
</div>
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
      
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
.carousel-inner img {
  width: 100%;
  height: 100%;
}
</style>


