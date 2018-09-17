<template>
    <header>
       
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#"><strong>梁酱的小窝</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link :to="{name:'firstLink'}" class="nav-item nav-link active" href="#">首页 <span class="sr-only">(current)</span></router-link>
                    <a class="nav-item nav-link" href="#">学习圣地</a>
                    <a class="nav-item nav-link" href="#">我和她</a>
                    <span class=" navbar-text" href="#">某些链接需要登录方可查看</span>
                    
                </div>
                <div class="navbar-nav ml-auto">
                    <a class="nav-item nav-link" v-show="isLogin">{{currenuser}}</a>
                    <!-- <router-link @click="out" :to="{name:'isloginLink'}" class="nav-item nav-link" v-show="isLogin">Sign out</router-link> -->
                    <router-link :to="{name:'isloginLink'}" class="nav-item nav-link" v-show="!isLogin">Log in</router-link>
                </div>
            </div>
            </nav>
         
    </header>
</template>
 
 <script>
 export default {
     computed:{
         currenuser(){
             return this.$store.getters.getcurrenuser
         },
         isLogin(){
             return sessionStorage.getItem("isLogin")
         }
     },
     created(){
         this.isLogin
     }
 }
 </script>

 <style scoped>
.navbar-text{
    color:gainsboro;
}
 </style>
 
 