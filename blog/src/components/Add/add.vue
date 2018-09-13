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
            <button type="button" @click="addContent">提交</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            content:{},
        }
    },
    created(){
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
                console.log(newContent)
            }
            e.preventDefault()
        }
    }
}
</script>

<style scoped>

</style>
