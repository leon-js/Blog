<template>
    <largescreen></largescreen>  
</template>

<script>
import Largescreen from './Largescreen'
export default {
    components:{
        largescreen:Largescreen,
    },
    // beforeRouteLeave:(to,from,next) => {
    //     if(to)
    // }
    created(){
        // if(sessionStorage.getItem("isLoing") == "0"){
        //     console.log(sessionStorage.getItem("isLoing"))
        //     // sessionStorage.setItem("isLogin","3")
        // }
        
    },
    beforeMount(){

    },
    beforeDestroy(){
        if(sessionStorage.getItem("isLogin") == "0"){
            this.$router.go(0)
        }
        // if(beforeRouteLeave)
    },
    methods:{
       
    }
}
</script>
