import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Classify from '../pages/Classify/Classify.vue'
import Goods from '../pages/Goods/Goods.vue'
import Home from '../pages/Home/Home.vue'
import Person from '../pages/Person/Person.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/classify',
      component:Classify
    },
    {
      path:'/goods',
      component:Goods
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/person',
      component:Person
    },
    {
      path:'/shopcart',
      component:ShopCart
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
