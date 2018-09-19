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
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        <div class="row">
                            <div class="col-md-8">Vue</div>
                            <div class="col-md-4 ml-auto text-right"><router-link v-bind:Vue="Vue" :to="{name:'allmorelearningLink',query:{kind:Vue}}">All</router-link></div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="card" v-for="(vue,index) in getVue" :key="vue.index" v-if="index <= 2">
                            <div class="card-header">
                                <h3><router-link :to="{name:'detailedLink',query:{id:vue.id}}"  href="#" >{{vue.title}}</router-link></h3>
                            </div>
                            <div class="card-body" style="text-indent:2em;"><span class="p1">{{vue.Detailed}}</span></div>
                            <div class="card-footer">{{vue.time}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        <div class="row">
                            <div class="col-md-8">Html</div>
                            <div class="col-md-4 ml-auto text-right"><router-link v-bind:Html="Html" :to="{name:'allmorelearningLink',query:{kind:Html}}">All</router-link></div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="card" v-for="(html,index) in getHtml" :key="html.index" v-if="index <= 2">
                            <div class="card-header">
                                <h3><router-link :to="{name:'detailedLink',query:{id:html.id}}"  href="#" >{{html.title}}</router-link></h3>
                            </div>
                            <div class="card-body" style="text-indent:2em;"><span class="p1">{{html.Detailed}}</span></div>
                            <div class="card-footer">{{html.time}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        <div class="row">
                            <div class="col-md-8">Css</div>
                            <div class="col-md-4 ml-auto text-right"><router-link v-bind:Css="Css" :to="{name:'allmorelearningLink',query:{kind:Css}}">All</router-link></div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="card" v-for="(css,index) in getCss" :key="css.index" v-if="index <= 2">
                            <div class="card-header">
                                <h3><router-link :to="{name:'detailedLink',query:{id:css.id}}"  href="#" >{{css.title}}</router-link></h3>
                            </div>
                            <div class="card-body" style="text-indent:2em;"><span class="p1">{{css.Detailed}}</span></div>
                            <div class="card-footer">{{css.time}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        <div class="row">
                            <div class="col-md-8">Javascript</div>
                            <div class="col-md-4 ml-auto text-right"><router-link v-bind:Javascript="Javascript" :to="{name:'allmorelearningLink',query:{kind:Javascript}}">All</router-link></div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="card" v-for="(javascript,index) in getJavascript" :key="javascript.index" v-if="index <= 2">
                            <div class="card-header">
                                <h3><router-link :to="{name:'detailedLink',query:{id:javascript.id}}"  href="#" >{{javascript.title}}</router-link></h3>
                            </div>
                            <div class="card-body" style="text-indent:2em;"><span class="p1">{{javascript.Detailed}}</span></div>
                            <div class="card-footer">{{javascript.time}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                
            </div>
        </div>
    </div>
</div>
   
</template>

<script>
export default {
    data(){
        return{
            Vue:'vue',
            Html:'html',
            Css:'css',
            Javascript:'javascript'
        }
    },
    created(){
        this.http.get("content?_sort=id&_order=desc&kind=vue")
            .then(res => this.$store.commit("setContentvue",res.data)),
        this.http.get("content?_sort=id&_order=desc&kind=html")
            .then(res => this.$store.commit("setContenthtml",res.data)),
        this.http.get("content?_sort=id&_order=desc&kind=css")
            .then(res => this.$store.commit("setContentcss",res.data)),
        this.http.get("content?_sort=id&_order=desc&kind=javascript")
            .then(res => this.$store.commit("setContentjavascript",res.data))
    },
    computed:{
        getVue(){
            return this.$store.getters.getContentvue
        },
        getHtml(){
            return this.$store.getters.getContenthtml
        },
        getCss(){
            return this.$store.getters.getContentcss
        },
        getJavascript(){
            return this.$store.getters.getContentjavascript
        }
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
    }
}
</script>

<style scoped>
.bg{
    background: url(../../assets/FirstPage/screen.jpg);
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
