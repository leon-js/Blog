<template>
<div class="bg">
<body class="text-center">
    <div class="container">
        <div class="titlelogin">
            <h2>Please sign in</h2>
        </div>
        <form>
        <div class="inputlogin">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input v-model="email" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" style="height:45px" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input v-model="password" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" style="height:45px" type="password" id="inputPassword" class="form-control" placeholder="Password" required>   
            <div class="checkbox mb-3">
            <label class="inputtext">
                <input type="checkbox" value="remember-me"> 电脑屏幕大的话，贞子更好爬出来
            </label>
            <button class="btn btn-lg btn-primary btn-block buttonlogin" type="submit" @click="signin">Sign in</button>
            </div>
        </div>
        </form>
    </div>
    <div class="container">
        <hr>
    </div>
</body>
</div> 
</template>

<script>
export default {
    data(){
        return{
            email:"",
            password:""
        }
    },
    beforeMount(){
        sessionStorage.setItem("isLogin","0")
    },
    updated(){
        sessionStorage.clear()
    },
    beforeDestroy(){
        this.$router.go(0)
    },
    methods:{
        signin(){
            this.http.get('users')
                .then(res => {
                    const data = res.data
                    const users = []
                    for(let key in data){
                        const user = data[key]
                        users.push(user)
                    }
                    let result = users.filter((users) => {
                    return users.useraccount === this.email && users.userpassword === this.password
                    })
                    if(result != null && result.length > 0){
                        this.$store.dispatch("setUsersudo",result[0].sudo)
                        this.$store.dispatch("setUser",result[0].username)
                        alert("登录成功")
                        sessionStorage.setItem("isLogin","1")
                        sessionStorage.setItem("name",this.$store.getters.getcurrenuser)
                        sessionStorage.setItem("usersudo",this.$store.getters.getusersudo)
                        this.$router.push({name:"firstLink"})
                    }else{
                        alert("账号或密码错误，请重新输入")
                        this.email = ""
                        this.password = ""
                        this.$store.dispatch("setUser",null)
                    }
                })
        }
    }
}
</script>

<style scoped>
.bg{
    background: url(../../assets/FirstPage/screen.jpg)
}
.titlelogin{
    margin-top: 15%;
}
.inputlogin{
    width: 30%;
    margin: 0 auto;
    margin-top: 5%;
}
.inputtext{
    margin-top: 5%;
}
.buttonlogin{
    margin-top: 5%;
}
</style>
