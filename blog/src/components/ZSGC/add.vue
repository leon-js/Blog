<template>
    <div class="container">
        <form>
            <input type="text" v-model="content.title">
            <!-- <label>下拉1组：</label>
            <select v-model="content.kind">
            <option disabled >--请选择--</option>
            <option :value="kind.kind" v-for="kind in getKinds" :key="kind.index">{{kind.kind}}</option>
            </select> -->
            {{kindid}}
            {{kind}}
            <mavonEditor v-model="content.Detailed"/>
            <button type="button" @click="addContent">提交</button>
        </form>
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    data(){
        return{
            content:{},
            kindid:null,
            kind:'',
            dateTim:''
        }
    },
    components:{
        mavonEditor
    },
    created(){
        // this.http.post('/api/setUpdate',{
                //     id:this.message.id,title:this.message.title,detailed:this.message.Detailed
                // }).then((res)=>{
                //     console.log('res',res)
                //     this.$router.go(-1)
                // })
        let routerParams = this.$route.query.kind
        this.kindid = routerParams
        
        this.http.get('/api/getKind',{
            params: {id:this.kindid}
        }).then((res)=>{
            console.log('res',res)
            this.kind = res.data[0].kind
        })
        // this.http.get("kinds")
        //     .then(res => this.$store.commit("setKinds",res.data))
    },
    computed:{
        getKinds(){
            return this.$store.getters.getKinds
        }
    },
    beforeDestroy(){
        if(sessionStorage.getItem("isLogin") == "0"){
            this.$router.go(0)
        }
    },
    methods:{
        addContent(e){
            if(!this.content.title){
                alert("请输入标题")
            }else if(!this.content.Detailed){
                alert("请输入内容")
            }else if(!this.content.title && !this.content.Detailed){
                alert("请输入相应的内容")
            }
            // else if(!this.content.kind){
            //     alert("请选择相应的类型")
            // }
            else{
                

                
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
                if (second >= 0 && second <= 9) {
                    second = "0" + second;
                }
                var currentdate = year + seperator1 + month + seperator1 + strDate + " " +hour + ":" + minute + ":" + second;
                console.log(currentdate)
                let newContent = {
                    title : this.content.title,
                    Detailed : this.content.Detailed,
                    time : currentdate,
                    kind : this.kind,
                    dateTim:this.dateTim
                }


                // this.http.post('/api/setUpdate',{
                //     id:this.message.id,title:this.message.title,detailed:this.message.Detailed
                // }).then((res)=>{
                //     console.log('res',res)
                //     this.$router.go(-1)
                // })
                
                this.http.get('/api/getKind',{}).then((res)=>{
                    console.log('res',res.headers.date)
                    this.dateTim = res.headers.date

                    this.http.post('/api/addValue',{
                        title : this.content.title,
                        detailed : this.content.Detailed,
                        time:currentdate,
                        kind:this.kind,
                        dateTim:this.dateTim
                        }).then((res)=>{
                            console.log('res',res)
                        })

                })


                
                // this.http.post("content",newContent)
                //     .then(res =>console.log(newContent))
                alert("添加成功")

                this.http.get('/api/getContentAll')
                .then( (res) => {
                    console.log('res',res.data);
                    this.$store.commit("setContent",res.data)
                })
                // this.$router.push({path:"/allmore_learning?kind="+this.kind+"&_sort=id&_order=asc"})
                this.$router.go(-1)
                }
            e.preventDefault()
        }
    }
}
</script>

<style scoped>
.v-note-wrapper{
    min-height: 600px;
}
</style>
