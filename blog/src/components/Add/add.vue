<template>
    <div>
        <form>
            <input type="text" v-model="content.title">
            <input type="text" v-model="content.Detailed">
            <label>下拉1组：</label>
            <select v-model="content.kind">
            <option disabled >--请选择--</option>
            <option :value="kind.kind" v-for="kind in getKinds" :key="kind.index">{{kind.kind}}</option>
            </select>
            {{kind}}
            <button type="button" @click="addContent">提交</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            content:{},
            kind:''
        }
    },
    created(){
        let routerParams = this.$route.query.kind
        this.kind = routerParams
        this.http.get("kinds")
            .then(res => this.$store.commit("setKinds",res.data))
    },
    computed:{
        getKinds(){
            return this.$store.getters.getKinds
        }
    },
    methods:{
        addContent(e){
            if(!this.content.title){
                alert("请输入标题")
            }else if(!this.content.Detailed){
                alert("请输入内容")
            }else if(!this.content.title || !this.content.Detailed){
                alert("请输入相应的内容")
            }else if(!this.content.kind){
                alert("请选择相应的类型")
            }else{
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
                let newContent = {
                    title : this.content.title,
                    Detailed : this.content.Detailed,
                    time : currentdate,
                    kind : this.content.kind
                }
                this.http.post("content",newContent)
                    .then(res =>console.log(newContent))
                alert("添加成功")
                this.$router.push({path:"/allmore_learning?kind="+this.kind+"&_sort=time&_order=asc"})
            }
            e.preventDefault()
        }
    }
}
</script>

<style scoped>

</style>
