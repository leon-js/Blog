<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <div v-for="vue in getAll" :key="vue.index">
                    <!-- <h1><router-link :to="{name:'detailedLink',query:{id:vue.id}}"  href="#" >{{vue.title}}</router-link></h1> -->
                    <h1><router-link v-bind:to="'/detailed/'+vue.id" href="#">{{vue.title}}</router-link></h1>
                    <h2>{{vue.Detailed}}</h2>
                    <h3>{{vue.dateTim}}</h3>
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
            kind:null,
            javascript:{}
        }
    },
    created(){
        let routerParams = this.$route.query.id
        this.kind = routerParams
        console.log(this.kind)
        // this.http.get("content?kind="+this.kind+"&_sort=id&_order=desc")
        //     .then(res => this.$store.commit("setContent",res.data))
        this.http.get('/api/getContentAllforKind',{
            params: {kind:this.kind}
        })
            .then( (res) => {
                console.log('res',res.data);
                this.$store.commit("setContentjavascript",res.data)
                // this.javascript = res.data
            })
    },
    computed:{
        getAll(){
            return this.$store.getters.getContentjavascript
        }
    },
    // beforeDestroy(){
    //     if(sessionStorage.getItem("isLogin") == "0"){
    //         this.$router.go(0)
    //     }
    // },
//     beforeCreate（创建前）,

// created（创建后）,

// beforeMount(载入前),

// mounted（载入后）,

// beforeUpdate（更新前）,

// updated（更新后）,

// beforeDestroy（销毁前）,

// destroyed（销毁后）
    updated(){
        // this.http.get("content?kind="+this.kind+"&_sort=id&_order=desc")
        //     .then(res => this.$store.commit("setContent",res.data))
        // this.http.get('/api/getContentAllforKind',{
        //     params: {id:this.kind}
        // })
        //     .then( (res) => {
        //         console.log('res',res.data);
        //         this.$store.commit("setContent",res.data)
        //     })
        this.http.get('/api/getContentAllforKind',{
            params: {kind:this.kind}
        })
            .then( (res) => {
                // this.$store.commit("setContent",res.data)
                this.$store.commit("setContentjavascript",res.data)
                // this.javascript = res.data
            })
    }
}
</script>

<style scoped>

</style>
