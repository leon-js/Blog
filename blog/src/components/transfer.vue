<template>
    <div>{{kind}}</div>
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
        this.$router.push({path:"/allmore_learning?kind="+this.kind+"&_sort=time&_order=asc"})
    }
    
}
</script>
