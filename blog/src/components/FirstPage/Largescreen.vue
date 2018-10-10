<template>
    <main role="main">

      <!-- Main jumbotron for a primary marketing message or call to action -->
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
            <div class="row">
                <div class="col-md-6">
                    <h3>最新学习答疑事项</h3>
                </div>
                <div class="col-md-6">
                    <router-link :to="{name:'alllearningLink'}"><h5 style="text-align:right">查看更多&raquo;</h5></router-link>
                </div>
            </div>
        </div>

      <div class="container">
        <!-- Example row of columns -->
        <div class="row">
          <div class="col-md-4 card" v-for="(item,index) in getContents" v-if="index <= 8" :key="item.index">
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
      </div> <!-- /container -->
    </main>
</template>

<script>
export default {
    name:"Largescreen",
    data(){
        return{
            
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
        currenuser(){
             return this.$store.getters.getcurrenuser
         },
    },
    methods:{
        gettime(){
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            var hour = date.getHours();
            var minute = date.getMinutes();
            var second = date.getSeconds();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate + " " +hour + ":" + minute + ":" + second;
            console.log(currentdate)
            return currentdate;
        }
    }
}
</script>

<style scoped>
.bg{
    background: url(../../static/firstpage/yzf.jpg);
    /* background: url(../../assets/firstpage/yzf.jpg); */
    /* background: url(static/FirstPage/yzf.jpg); */
    background-size: 100%;
    background-repeat: no-repeat;
}
.card{
   margin-bottom: 10px;
}
.p1{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
</style>
