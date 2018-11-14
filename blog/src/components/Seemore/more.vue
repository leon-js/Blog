<template>
<div>
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="display-3">Welcome back Sir!</h1>
                        <p style="text-indent:2em;">生活不如意总比如意多，而对此的恪守，热情恰恰也源于自身的坚韧。时刻提醒自己，要自律，要保持份内在的从容与安静。</p>
                        <p style="text-indent:2em;">花花世界，静守己心。</p>
                        <!-- <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p> -->
                </div>
            </div>   
        </div>
    </div>
    <div class="container biaoqian">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>more</el-breadcrumb-item>
        <el-breadcrumb-item>{{this.kinds}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <router-link :to="{name:'vueall',query:{id:3}}">
            <button class="myBtnhome" @click="changekind('Vue')">
                    <strong>Vue</strong>
            </button>
        </router-link>
        <router-link :to="{name:'htmlall',query:{id:2}}">
            <button class="myBtnlist" @click="changekind('html')">
                    <strong>Html</strong>
            </button>
        </router-link>
        <router-link :to="{name:'javascriptall',query:{id:4}}">
            <button class="myBtnnews" @click="changekind('javascript')">
                    <strong>Javascript</strong>
            </button>
        </router-link>
        <router-link :to="{name:'cssall',query:{id:1}}">
            <button class="myBtnpic" @click="changekind('css')">
                    <strong>Css</strong>
            </button>
        </router-link>
        <router-link :to="{name:'ubuntuall',query:{id:5}}">
            <button class="myGao" @click="changekind('ubuntu')">
                    <strong>Ubuntu</strong>
            </button>
        </router-link>
        <router-link :to="{name:'mysqlall',query:{id:6}}">
            <button class="mysql" @click="changekind('mysql')">
                    <strong>Mysql</strong>
            </button>
        </router-link>
    </div>
    <div class="container">
        <!-- Example row of columns -->
        <div >
            <router-view></router-view>
          <!-- <div class="col-md-6 card" v-for="item in getContents" :key="item.index">
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
          </div> -->
        </div>
        <hr>
      </div>
</div>
   
</template>

<script>
export default {
    data(){
        return{
            // Vue:'vue',
            // Html:'html',
            // Css:'css',
            // Javascript:'javascript',
            // Ubuntu:'ubuntu',
            kinds:'javascript'
        }
    },
    created(){
        this.kinds = sessionStorage.getItem('LabelKinds')
        //  this.http.get('/api/getContentAll')
        //     .then( (res) => {
        //         console.log('res',res.data);
        //         this.$store.commit("setContent",res.data)
        //     })
        let routerParams = this.$route.query.id
        this.kind = routerParams
        // console.log(this.kind)
        // this.http.get("content?kind="+this.kind+"&_sort=id&_order=desc")
        //     .then(res => this.$store.commit("setContent",res.data))
        this.http.get('/api/getContentAllforKind',{
            params: {kind:this.kind}
        })
            .then( (res) => {
                // console.log('res',res.data);
                this.$store.commit("setContentjavascript",res.data)
                // this.javascript = res.data
            })
    },
    computed:{
        // getContents(){
        //     return this.$store.getters.getContent
        // },
    },
    methods:{
        changekind(i){
            sessionStorage.setItem('LabelKinds',i)
            console.log(i)
            this.kinds = sessionStorage.getItem('LabelKinds')
            console.log(sessionStorage.getItem('LabelKinds'))
        }
    },

    beforeRouteEnter:(to,from,next) => {
        var a = localStorage.getItem("isLogin")
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

    // beforeDestroy(){
    //     if(sessionStorage.getItem("isLogin") == "0"){
    //         this.$router.go(0)
    //     }
    // },
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
.myBtnhome {
    width: 80px;
    height: 35px;
    background-color: #f52e59;
    color: white;
    border: none;
    cursor: pointer;
    /*渐变效果,可以删掉这句话试试*/
    transition: all 0.8s;
    margin-bottom: 5px
}
.myBtnhome:hover {
    /*鼠标悬浮效果*/
    /*阴影*/
    box-shadow: 5px 5px 5px grey;
    /*发光*/
    background-color: #f54d71;
}
.myBtnlist {
    width: 80px;
    height: 35px;
    background-color: #0091eb;
    color: white;
    border: none;
    cursor: pointer;
    /*渐变效果,可以删掉这句话试试*/
    transition: all 0.8s;
}
.myBtnlist:hover {
    /*鼠标悬浮效果*/
    /*阴影*/
    box-shadow: 5px 5px 5px grey;
    /*发光*/
    background-color: #3aa6e9;
}
.myBtnnews {
    width: 90px;
    height: 35px;
    background-color: #ffd600;
    color: white;
    border: none;
    cursor: pointer;
    /*渐变效果,可以删掉这句话试试*/
    transition: all 0.8s;
}
.myBtnnews:hover {
    /*鼠标悬浮效果*/
    /*阴影*/
    box-shadow: 5px 5px 5px grey;
    /*发光*/
    background-color: #fbe055;
}
.myBtnpic {
    width: 80px;
    height: 35px;
    background-color: #871996;
    color: white;
    border: none;
    cursor: pointer;
    /*渐变效果,可以删掉这句话试试*/
    transition: all 0.8s;
}
.myBtnpic:hover {
    /*鼠标悬浮效果*/
    /*阴影*/
    box-shadow: 5px 5px 5px grey;
    /*发光*/
    background-color: #894293;
}

.myGao {
    width: 80px;
    height: 35px;
    background-color: #94c23d;
    color: white;
    border: none;
    cursor: pointer;
    /*渐变效果,可以删掉这句话试试*/
    transition: all 0.8s;
}
.myGao:hover {
    /*鼠标悬浮效果*/
    /*阴影*/
    box-shadow: 5px 5px 5px grey;
    /*发光*/
    background-color: #a0c065;
}
.myHero {
    width: 80px;
    height: 35px;
    background-color: #f29100;
    color: white;
    border: none;
    cursor: pointer;
    /*渐变效果,可以删掉这句话试试*/
    transition: all 0.8s;
}
.myHero:hover {
    /*鼠标悬浮效果*/
    /*阴影*/
    box-shadow: 5px 5px 5px grey;
    /*发光*/
    background-color: #f0a93e;
}
.mysql {
    width: 80px;
    height: 35px;
    background-color: #ffc0cb;
    color: white;
    border: none;
    cursor: pointer;
    /*渐变效果,可以删掉这句话试试*/
    transition: all 0.8s;
}
.mysql:hover {
    /*鼠标悬浮效果*/
    /*阴影*/
    box-shadow: 5px 5px 5px grey;
    /*发光*/
    background-color: #ffc0cb;
}
.biaoqian{
    margin-bottom: 20px;
}
</style>
