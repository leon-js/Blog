import Vue from 'vue'
import Router from 'vue-router'
import Firstpage from '../components/FirstPage/FirstPage'
import xiangxiye from '../components/Detailedpage/xiangxiye'
import login from '../components/IsLogin/login'
import more from '../components/Seemore/more'
import moreall from '../components/Seemore/moreall'
import add from '../components/ZSGC/add'
import update from '../components/ZSGC/update'
import deleted from '../components/ZSGC/deleted'
import transfer from '../components/transfer'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'firstLink',
      component:Firstpage
    },
    {
      path:'/detailed',
      name:'detailedLink',
      component:xiangxiye
    },
    {
      path:'/islogin',
      name:'isloginLink',
      component:login
    },
    {
      path:'/all_learning',
      name:'alllearningLink',
      component:more
    },
    {
      path:'/allmore_learning',
      name:'allmorelearningLink',
      component:moreall
    },
    {
      path:'/add',
      name:'addLink',
      component:add
    },
    {
      path:'/transfer',
      name:'transferLink',
      component:transfer
    },
    {
      path:'update',
      name:'updateLink',
      component:update
    },
    {
      path:'deleted',
      name:'deletedLink',
      component:deleted
    },
    {path:'*',redirect:'/'}
  ]
})
