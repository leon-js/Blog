<template>
    <div class="container">
        <h1 class="page-header">内容编辑</h1>
        <div class="row">
            <form @submit.prevent>
                <div class="well">    
                    <div class="form-group">
                        <label>标题</label>
                        <input type="text" class="form-control" placeholder="Title" v-model="message.title">
                    </div>
                    <div class="form-group">
                        <label>内容</label>
                        <mavonEditor v-model="message.Detailed"/>
                    </div>
                    <button type="button" @click="updateAll" class="btn btn-sm btn-primary btn-block">确认</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    data(){
        return{
            message:{},
            id:''
        }
    },
    components:{
        mavonEditor
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
    created(){
        let routerParams = this.$route.query.id
        this.id = routerParams
        console.log(routerParams)
        // this.http.get("content?id="+routerParams)
        //     .then(res => this.$store.commit("setContent",res.data))
        // this.message = this.$store.state

        // this.http.get("content?id="+routerParams)
        //     .then(res => this.message = res.data[0])
        this.http.get('/api/getValue', {
                params: {id: this.id}
            }).then( (res) => {
                console.log('res', res.data);
                this.message = res.data[0];
            })
        console.log(this.message)
    },
    methods:{
        updateAll(e){
            if(!this.message.title){
                alert("请输入标题")
            }else if(!this.message.Detailed){
                alert("请输入内容")
            }else if(!this.message.title && !this.message.Detailed){
                alert("请输入相应的内容")
            }else{
                let updateMessage = {
                    title:this.message.title,
                    Detailed:this.message.Detailed,
                    time:this.message.time,
                    kind:this.message.kind,
                    id:this.message.id
                }
                // this.http.put("content/"+this.id,updateMessage)
                //     .then(res => {
                //         console.log(res.data)
                //         this.$router.go(-1)
                //     })

                 // this.http.post('/api/setValue', {
                    //     id: 1, name: this.inpContent
                    // }).then( (res) => {
                    //     console.log('res', res);
                    // })
                this.http.post('/api/setUpdate',{
                    id:this.message.id,title:this.message.title,detailed:this.message.Detailed
                }).then((res)=>{
                    console.log('res',res)
                    this.$router.go(-1)
                })
            }
            e.preventDefault();
        }
    },
    computed:{
        getDetailed(){
            return this.$store.getters.getContent
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
.v-note-wrapper{
    min-height: 600px;
}
</style>
