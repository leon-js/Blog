import Vue from 'vue'
import Router from 'vue-router'
import Firstpage from '../components/FirstPage/FirstPage'
import xiangxiye from '../components/Detailedpage/xiangxiye'
import login from '../components/IsLogin/login'
import more from '../components/Seemore/more'
import moreall from '../components/Seemore/moreall'

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
    {path:'*',redirect:'/'}
  ]
})
