<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div  v-for="de in getDetailed" :key="de.index">
                <h1>12</h1>
                <h2>{{msg}}</h2>
                <h1>{{de.title}}</h1>
                <h1>{{de.Detailed}}</h1>
                <h1>{{de.time}}</h1>
            </div>
            </div>
            <div class="col-md-4">
                <p><router-link :to="{name:'updateLink',query:{id:this.msg}}" class="btn btn-secondary" href="#" role="button">修改</router-link></p>
            </div>
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

