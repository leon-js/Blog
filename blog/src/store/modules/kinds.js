const state = {
    //设置属性
    kinds:{}
}

const getters = {
    //获取属性状态
    getKinds : state => state.kinds,
}

const mutations = {
    //改变属性状态
    setKinds(state,data){
        state.kinds = data
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