<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <div v-for="vue in getAllVue" :key="vue.index">
                    <h1><router-link :to="{name:'detailedLink',query:{id:vue.id}}"  href="#" >{{vue.title}}</router-link></h1>
                    <h2>{{vue.Detailed}}</h2>
                    <h3>{{vue.time}}</h3>
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
        this.http.get("content?kind="+this.kind+"&_sort=id&_order=desc")
            .then(res => this.$store.commit("setContent",res.data))
    },
    computed:{
        getAllVue(){
            return this.$store.getters.getContent
        }
    },
//     beforeCreate（创建前）,

// created（创建后）,

// beforeMount(载入前),

// mounted（载入后）,

// beforeUpdate（更新前）,

// updated（更新后）,

// beforeDestroy（销毁前）,

// destroyed（销毁后）
    beforeMount(){
        this.http.get("content?kind="+this.kind+"&_sort=id&_order=desc")
            .then(res => this.$store.commit("setContent",res.data))
    }
}
</script>

<style scoped>

</style>
