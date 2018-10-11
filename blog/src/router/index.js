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
import Blog from '../components/Blog'

// 二级路由
import Vuevue from '../components/Seemore/Vue'
import Css from '../components/Seemore/Css'
import Html from '../components/Seemore/Html'
import Javascript from '../components/Seemore/Javascript'
import Ubuntu from '../components/Seemore/Ubuntu'

Vue.use(Router)

export default new Router({
  // mode:"history",
  base:__dirname,
  
  // scrollBehavior (to, from, savedPosition) {
  //   return{selector:".zhiding"}
  //   if(savedPosition){
  //      return savedPosition     滚动跳转
  //    }else{
  //      return {x:0 ,y:0}
  //    }
  // },
  routes: [
    {
      path: '/',
      name: 'firstLink',
      component:Firstpage
    },
    {
      path:'/detailed/:id',
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
      redirect:'/all_learning/javascript',
      component:more,
      children:[
        {
          path:'/all_learning/vue',
          name:'vueall',
          component:Vuevue
        },
        {
          path:'/all_learning/html',
          name:'htmlall',
          component:Html
        },
        {
          path:'/all_learning/css',
          name:'cssall',
          component:Css
        },
        {
          path:'/all_learning/javascript',
          name:'javascriptall',
          component:Javascript
        },
        {
          path:'/all_learning/ubuntu',
          name:'ubuntuall',
          component:Ubuntu
        },
      ]
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
    {
      path:'Blog',
      name:'BlogLink',
      component:Blog
    },
    {path:'*',redirect:'/'}
  ]
})
