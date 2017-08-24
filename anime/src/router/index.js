import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from 'pages/Home/home'

// 分类页
import classify from 'pages/Classify/classify'
// 子页
import index from 'pages/Classify/ClassifySon/index'
import listAll from 'pages/Classify/ClassifySon/ListAll'


// 排行页
import ranking from 'pages/Ranking/ranking'

// 条漫
import channel from 'pages/Channel/channel'

// 历史
import historys from 'pages/Historys/Historys'

// 追更
import overtake from 'pages/Overtake/Overtake'

// 详情页
import detail from 'pages/Detail/Detail'

// 更多
import more from 'pages/More/More'

export default new Router({
	mode : 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify,
      children:[
      	{
          path:'index',
          component:index
       },
        {
          path:'listAll',
          component:listAll
        }
      ]
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/channel',
      name: 'channel',
      component: channel
    },
    {
      path: '/historys',
      name: 'historys',
      component: historys
    },
    {
      path: '/overtake',
      name: 'overtake',
      component: overtake
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/more',
      name: 'more',
      component: more
    }
  ]
})
