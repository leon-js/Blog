const state = {
    //设置属性
    currenuser:null,
    isLogin:false,
    noLogin:true,
    token:"",
}

const getters = {
    //获取属性状态
    getcurrenuser : state => state.currenuser,
    isLogin : state => state.isLogin,
    noLogin : state => state.noLogin
    // isLogin : state => {
    //     if(!state.isLogin){
    //         state.isLogin = sessionStorage.getItem("isLogin");
    //         state.currenuser = sessionStorage.getItem("username")
    //     }else{
    //         state.isLogin = sessionStorage.getItem("isLogin");
    //         state.currenuser = sessionStorage.getItem("username")
    //     }
    //     return state.isLogin
    // }
}

const mutations = {
    //改变属性状态
    userStatus(state,user){
        if(user){
            state.currenuser = user,
            state.isLogin = true
            // sessionStorage.setItem("username",user),
            // sessionStorage.setItem("isLogin",true)
        }else if(user == null){
            state.currenuser = null,
            state.isLogin = false
            // sessionStorage.setItem("username",null),
            // sessionStorage.setItem("isLogin",false)
        }
    }
}

const actions = {
    //应用mutations
    setUser({commit},user){
        commit("userStatus",user)
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}