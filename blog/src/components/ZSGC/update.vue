<template>
    <div class="container">
        <h1 class="page-header">内容编辑</h1>
        <div class="row">
            <form @submit.prevent>
                <div class="well">
                    
                    <h4>内容详情</h4>
                    {{message}}
                    <div class="form-group">
                        <label>Title</label>
                        <h1>{{message.title}}</h1>
                        <input type="text" class="form-control" placeholder="Title" v-model="message.title">
                    </div>
                    <div class="form-group">
                        <label>Detailed</label>
                        <mavonEditor v-model="message.Detailed"/>
                    </div>
                    <button type="button" @click="updateAll" class="btn btn-primary">确认</button>
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
    created(){
        let routerParams = this.$route.query.id
        this.id = routerParams
        console.log(routerParams)
        // this.http.get("content?id="+routerParams)
        //     .then(res => this.$store.commit("setContent",res.data))
        // this.message = this.$store.state
        this.http.get("content?id="+routerParams)
            .then(res => this.message = res.data[0])
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
                this.http.put("content/"+this.id,updateMessage)
                    .then(res => {
                        console.log(res.data)
                        this.$router.push({path:'/detailed?id='+this.id})
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
