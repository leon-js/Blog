<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <div v-for="vue in getAllVue" :key="vue.index">
                    <h1>{{vue.title}}</h1>
                    <h1>{{vue.Detailed}}</h1>
                    <h1>{{vue.time}}</h1>
                </div>
            </div>
            <div class="col-md-4">
                <router-link :to="{name:'addLink',query:{kind:this.kind}}">添加</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            kind:''
        }
    },
    created(){
        let routerParams = this.$route.query.kind
        this.kind = routerParams
        this.http.get("content?kind="+this.kind+"&_sort=time&_order=desc")
            .then(res => this.$store.commit("setContent",res.data))
    },
    computed:{
        getAllVue(){
            return this.$store.getters.getContent
        }
    }
}
</script>

<style scoped>

</style>
