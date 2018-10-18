<template>
    <div>
        <div class="row">
            <div class="col-md-10">
                <div class="container">
        <!-- Example row of columns -->
        <div class="row">
          <!-- <div class="col-md-4 card" v-for="(item,index) in getContents" v-if="index <= 8" :key="item.index">
            <h2 style="text-indent:2em;">{{item.title}}</h2>
            <p class="p1" style="text-indent:2em;">{{item.Detailed}}</p>
            <div class="row">
                <div class="col-md-6">
                    <p style="text-align:right">{{item.dateTim}}</p>
                </div>
                <div class="col-md-6">
                    <p><router-link v-bind:to="'/detailed/'+item.id" class="btn btn-secondary" href="#" role="button">查看详细 &raquo;</router-link></p>
                </div>
            </div>
          </div> -->
          <div class="col-md-4" v-for="(item,index) in getAll" v-if="index <= 11" :key="item.index">
              <p><router-link class="titlelink" v-bind:to="'/detailed/'+item.id"  href="#" ><strong>{{item.title}}</strong></router-link></p>
              <!-- <p style="text-indent:0.5em;"><strong>{{item.title}}</strong></p> -->
              <p >{{item.dateTim}}</p>
          </div>
        </div>
        <hr>
      </div> <!-- /container -->
            </div>
            <div class="col-md-2">
                <router-link class="btn btn-sm btn-primary btn-block buttonlogin" :to="{name:'addLink',query:{kind:this.kind}}"><i class="el-icon-edit"></i>&nbsp;添加</router-link>
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
        // console.log(this.kind)
        // this.http.get("content?kind="+this.kind+"&_sort=id&_order=desc")
        //     .then(res => this.$store.commit("setContent",res.data))
        this.http.get('/api/getContentAllforKind',{
            params: {kind:this.kind}
        })
            .then( (res) => {
                // console.log('res',res.data);
                this.$store.commit("setContentcss",res.data)
                // this.javascript = res.data
            })
    },
    computed:{
        getAll(){
            return this.$store.getters.getContentcss
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
                this.$store.commit("setContentcss",res.data)
                // this.javascript = res.data
            })
    }
}
</script>

<style scoped>

</style>
