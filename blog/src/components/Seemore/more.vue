<template>
<div>
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <h1 class="display-3">Welcome back Sir!</h1>
                        <p style="text-indent:2em;">生活不如意总比如意多，而对此的恪守，热情恰恰也源于自身的坚韧。时刻提醒自己，要自律，要保持份内在的从容与安静。</p>
                        <p style="text-indent:2em;">花花世界，静守己心。</p>
                        <!-- <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p> -->
                </div>
                <div class="col-md-4 bg">
                </div>
            </div>   
        </div>
    </div>
    <div class="container">
        <router-link :to="{name:'allmorelearningLink',query:{id:3}}">Vue</router-link>
        <router-link :to="{name:'allmorelearningLink',query:{id:2}}">Html</router-link>
        <router-link :to="{name:'allmorelearningLink',query:{id:4}}">Javascript</router-link>
        <router-link :to="{name:'allmorelearningLink',query:{id:1}}">Css</router-link>
        <router-link :to="{name:'allmorelearningLink',query:{id:5}}">Ubuntu</router-link>

    </div>
    <div class="container">
        <!-- Example row of columns -->
        <div class="row">
          <div class="col-md-6 card" v-for="item in getContents" :key="item.index">
            <h2 style="text-indent:2em;">{{item.title}}</h2>
            <p class="p1" style="text-indent:2em;">{{item.Detailed}}</p>
            <div class="row">
                <div class="col-md-6">
                    <p style="text-align:right">{{item.dateTim}}</p>
                </div>
                <div class="col-md-6">
                    <p><router-link v-bind:to="'/detailed/'+item.id" class="btn btn-secondary" href="#" role="button">查看详细 &raquo;</router-link></p>
                </div>
            </div>
          </div>
        </div>
        <hr>
      </div>
</div>
   
</template>

<script>
export default {
    data(){
        return{
            Vue:'\'vue\'',
            Html:'\'html\'',
            Css:'\'css\'',
            Javascript:'\'javascript\'',
            Ubuntu:'\'ubuntu\''
        }
    },
    created(){
         this.http.get('/api/getContentAll')
            .then( (res) => {
                console.log('res',res.data);
                this.$store.commit("setContent",res.data)
            })
    },
    computed:{
        getContents(){
            return this.$store.getters.getContent
        },
    },
    beforeRouteEnter:(to,from,next) => {
        var a = sessionStorage.getItem("isLogin")
        if(a == "1"){
            next()
        }else{
            if(confirm("对不起，您没有查看权限，请先登录") == true){
                next('/islogin')
            }
            else{
                next(false)
            }
        }
    },
    beforeDestroy(){
        if(sessionStorage.getItem("isLogin") == "0"){
            this.$router.go(0)
        }
    },
}
</script>

<style scoped>
.bg{
    /* background: url(../../assets/FirstPage/screen.jpg); */
    background-size: 100%;
    background-repeat: no-repeat;
}
.card{
    margin-top: 20px;
}
.p1{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>
