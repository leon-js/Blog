<template>
    <div>
        <div  v-for="de in getDetailed" :key="de.index">
        <h1>12</h1>
        <h2>{{msg}}</h2>
        <h1>{{de.title}}</h1>
        <h1>{{de.Detailed}}</h1>
        <h1>{{de.time}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:''
        }
    },
    created(){
        let routerParams = this.$route.query.id
        this.msg = routerParams
        this.http.get("content?id="+routerParams)
            .then(res => this.$store.commit("setContent",res.data))
    },
    computed:{
        getDetailed(){
            return this.$store.getters.getContent
        }
    }
}
</script>

<style scoped>

</style>

