const state = {
    //设置属性
    xiangxi:{},
    content:{},
    vue:{},
    html:{},
    css:{},
    javascript:{},
    ubuntu:{}
}

const getters = {
    //获取属性状态
    getXiangxi : state => state.xiangxi,
    getContent : state => state.content,
    getContentvue : state => state.vue,
    getContenthtml : state => state.html,
    getContentcss : state => state.css,
    getContentjavascript : state => state.javascript,
    getContentubuntu : state => state.ubuntu
}


const mutations = {
    //改变属性状态
    setContent(state,data){
        state.content = data
    },
    setXiangxi(state,data){
        state.xiangxi = data
    },
    setContentvue(state,data){
        state.vue = data
    },
    setContenthtml(state,data){
        state.html = data
    },
    setContentcss(state,data){
        state.css = data
    },
    setContentjavascript(state,data){
        state.javascript = data
    },
    setContentubuntu(state,data){
        state.ubuntu = data
    },
}

const actions = {
    //应用mutations
}

export default{
    state,
    getters,
    mutations,
    actions
}