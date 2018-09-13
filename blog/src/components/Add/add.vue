<template>
    <div>
        <form v-on:submit="addContent">
            <input type="text" v-model="content.title">
            <input type="text" v-model="content.Detailed">
            <button type="submit"   >提交</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            content:{},
            time:''
        }
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

</style>
