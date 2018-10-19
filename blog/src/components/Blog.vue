<template>
  <div class="">
    <!-- <input v-model="inpContent"> -->
    <!-- <button type="primary" @click="getContentAll">获取数据</button>
    <button type="primary" @click="setValue">添加数据</button> -->
    <h1>Number guessing game</h1>

    <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>

    <div class="form">
      <label for="guessField">Enter a guess: </label>
      <input type="text" id="guessField" class="guessField">
      <input type="submit" value="Submit guess" class="guessSubmit">
    </div>

    <div class="resultParas">
      <p class="guesses"></p>
      <p class="lastResult"></p>
      <p class="lowOrHi"></p>
    </div>
  </div>
</template>

<script>

export default {
  // name: 'blog',
  // data() {
  //   return {
  //     inpContent: ''
  //   }
  // },
  // methods: {
  //   getValue() {
  //     // axios.get('/', {params: ''})
  //     this.http.get('/api/getValue', {
  //       params: {id: 1}
  //     }).then( (res) => {
  //       console.log('res', res.data);
  //       this.inpContent = res.data[0].title;
  //     })
  //   },
  //   setUpdate() {
  //     // axios.post('/', {})
  //     this.http.post('/api/setValue', {
  //       id: 1, name: this.inpContent
  //     }).then( (res) => {
  //       console.log('res', res);
  //     })
  //   },
  //   getContentAll() {
  //     // axios.get('/', {params: ''})
  //     this.http.get('/api/getContentAll').then( (res) => {
  //       console.log('res', res.data);
  //       this.inpContent = res.data[0].title;
  //     })
  //   },
  // }
}
</script>

<style scoped>

</style>
