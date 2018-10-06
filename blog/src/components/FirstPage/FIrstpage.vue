<template>
    <largescreen></largescreen>  
</template>

<script>
import Largescreen from './Largescreen'
export default {
    components:{
        largescreen:Largescreen,
    },
    created(){

    },
    beforeMount(){

    },
    beforeDestroy(){
        if(sessionStorage.getItem("isLogin") == "0"){
            this.$router.go(0)
        }
    },
    methods:{
       
    }
}
</script>
