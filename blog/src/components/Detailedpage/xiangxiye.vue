<template>
<div v-cloak>
    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <div>
                    <h1>{{xiangxi.title}}</h1>
                </div>
                
                <mavonEditor :ishljs="true" :scrollStyle="true" :editable="false" :toolbarsFlag="false" :subfield="false" :defaultOpen="defaultData" v-model="xiangxi.Detailed"/>
                <p>{{xiangxi.dateTim}}</p>
                
            </div>
            <div class="col-md-2">
                <p><router-link :to="{name:'updateLink',query:{id:xiangxi.id}}" class="btn btn-sm btn-success btn-block" href="#" role="button"><i class="el-icon-edit"></i>&nbsp;修改</router-link></p>
                <p><button @click="shanchu" class="btn btn-sm btn-danger btn-block" href="#" role="button"><i class="el-icon-delete"></i>&nbsp;删除</button></p>
                <p><button @click="fanhui" class="btn btn-sm btn-primary btn-block" href="#" role="button"><i class="el-icon-back"></i>&nbsp;返回</button></p>
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
            xiangxi:{},
            id:null
        }
    },
    components:{
        mavonEditor
    },
    created(){
        this.fetchXiangxi(this.$route.params.id)
        let routerParams = this.$route.query.id
        this.id = routerParams
        // this.http.get("content?id="+routerParams)
        //     .then(res => {
        //         this.xiangxi = res.data
        //         console.log(this.xiangxi)
        //     })
        
    },
    methods:{
        fetchXiangxi(id){
            this.http.get('/api/getValue', {
                params: {id: id}
            }).then( (res) => {
                // console.log('res', res.data);
                this.xiangxi = res.data[0];
            })
        },
        shanchu(){
            if(confirm("确认删除吗，将无法撤回") == true){
                var sudo = prompt("请输入权限密码进行验证","");
                var usersudo = localStorage.getItem("usersudo")
                // console.log(usersudo)
                if(sudo != null && usersudo != null && sudo == usersudo){
                    
                    // this.http.delete("content/"+this.msg)
                    this.http.post('/api/deleteValue',{
                        id:this.xiangxi.id
                    }).then((res)=>{
                        // console.log(res)
                    })
                    this.$router.go(-1)
                    this.$notify.warning({
                        title: '提示信息',
                        message: '已删除'+this.xiangxi.kind+'相关内容'+this.xiangxi.title,
                        showClose: false
                    });
                }else if(sudo == null){}
                else if(sudo != null && sudo != usersudo){
                    alert("权限密码错误")
                }else{  }
            }
            else{     }
        },
        fanhui(){
            this.$router.go(-1)
        }
    },
    beforeDestroy(){
        if(localStorage.getItem("isLogin") == "0"){
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
    display: none;
}
.col-md-2{
    margin-top: 5%
}
</style>

