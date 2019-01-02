<template>
    <div>
        <div class="row">
            <div class="col-md-10">
                <div class="container">
        <div class="row">
          <div class="col-md-4" v-if="getAll" v-for="(item) in getAll.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="item.index">
              <p><router-link class="titlelink" v-bind:to="'/detailed/'+item.id"  href="#" ><strong>{{item.title}}</strong></router-link></p>
              <p >{{item.dateTim}}</p>
          </div>
        </div>
        <hr>
      </div>
            </div>
            <div class="col-md-2">
                <router-link class="btn btn-sm btn-primary btn-block buttonlogin" :to="{name:'addLink',query:{kind:this.kind}}"><i class="el-icon-edit"></i>&nbsp;添加</router-link>
            </div>
            <div class="container">
        <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[18, 27, 36, 45]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="getAll.length">
            </el-pagination>

        </div>
    </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            kind:null,
            javascript:{},
            currentPage:1,//初始页
            pagesize:18,//每页的数据
        }
    },
    created(){
        let routerParams = this.$route.query.id
        this.kind = routerParams
        this.http.get('/api/getContentAllforKind',{
            params: {kind:this.kind}
        })
            .then( (res) => {
                this.$store.commit("setContentmysql",res.data)
            })
    },
    computed:{
        getAll(){
            return this.$store.getters.getContentmysql
        }
    },
    methods:{
        handleSizeChange(val) {
            this.pagesize = val
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val
            console.log(`当前页: ${val}`);
        }
    },
    mounted(){
        let id = localStorage.getItem("userid")
        this.userid = id
        this.http.get('/api/getContentAllforKind',{
            params: {kind:this.kind,userid:this.userid}
        })
            .then( (res) => {
                // this.$store.commit("setContent",res.data)
                this.$store.commit("setContentmysql",res.data)
                // this.javascript = res.data
            })
    }
}
</script>

<style scoped>

</style>
