const state = {
    //设置属性
    content:{},
    vue:{},
    html:{},
    css:{},
    javascript:{}
}

const getters = {
    //获取属性状态
    getContent : state => state.content,
    getContentvue : state => state.vue,
    getContenthtml : state => state.html,
    getContentcss : state => state.css,
    getContentjavascript : state => state.javascript
}

const mutations = {
    //改变属性状态
    setContent(state,data){
        state.content = data
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
    }
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