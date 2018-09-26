<template>
<div v-cloak>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                
                <h1>12</h1>
                <h2>{{msg}}</h2>
                <h1>{{xiangxi.title}}</h1>
                
                <mavonEditor :ishljs="true" :scrollStyle="true" :editable="false" :toolbarsFlag="false" :subfield="false" :defaultOpen="defaultData" v-model="xiangxi.Detailed"/>
                <h1>{{xiangxi .time}}</h1>
                
            </div>
            <div class="col-md-4">
                <p><router-link :to="{name:'updateLink',query:{id:xiangxi.id}}" class="btn btn-secondary" href="#" role="button">修改</router-link></p>
                <p><button @click="shanchu" class="btn btn-secondary" href="#" role="button">删除</button></p>
            </div>
        </div>
       
    </div>
</div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    data(){
        return{
            msg:'',
            defaultData:'preview',
            xiangxi:{}
        }
    },
    components:{
        mavonEditor
    },
    created(){
        this.fetchXiangxi(this.$route.params.id)
        // let routerParams = this.$route.query.id
        // this.msg = routerParams
        // this.http.get("content?id="+routerParams)
        //     .then(res => {
        //         this.xiangxi = res.data
        //         console.log(this.xiangxi)
        //     })
        
    },
    methods:{
        fetchXiangxi(id){
            this.http.get("content/"+id)
                .then(res => {
                    console.log(res.data)
                    this.xiangxi = res.data
                })
        },
        shanchu(){
            if(confirm("确认删除吗，将无法撤回") == true){
                var sudo = prompt("请输入权限密码进行验证","");
                var usersudo = sessionStorage.getItem("usersudo")
                console.log(usersudo)
                if(sudo != null && usersudo != null && sudo == usersudo){
                    alert("删除成功")
                    this.http.delete("content/"+this.msg)
                    this.$router.go(-1)
                }else if(sudo == null){}
                else if(sudo != null && sudo != usersudo){
                    alert("权限密码错误")
                }else{  }
            }
            else{     }
        }
    },
    beforeDestroy(){
        if(sessionStorage.getItem("isLogin") == "0"){
            this.$router.go(0)
        }
    },
}
</script>

<style scoped type="text/css">

.v-note-wrapper{
    min-height: 600px;
}
/* .v-note-wrapper .v-note-op.shadow{
    display: none;
}
.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper{
    display: none;
}
.v-note-wrapper .v-note-panel .v-note-show{
    flex: 0 0 100%;
} */
[v-cloak]{
    display: none !important;
}
</style>

