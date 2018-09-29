<template>
  <div class="">
    <button type="primary" @click="getArticle">调用后台接口</button>
    <input v-model="inpContent">
  </div>
</template>

<script>
export default {
  name: 'blog',
  data() {
    return {
      inpContent: 'Blog'
    }
  },
  methods: {
    getArticle() {
      this.http.get('/api/getArticle')
        .then( (res) => {
          console.log('res', res);
          this.inpContent = res.data.data;
        })
    }
  }
}
</script>