import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import content from './modules/content'
import kinds from './modules/kinds'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        content,
        user,
        kinds
    }
})