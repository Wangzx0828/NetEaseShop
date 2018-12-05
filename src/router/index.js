import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Classify from '../pages/Classify/Classify.vue'
import Goods from '../pages/Goods/Goods.vue'
import Home from '../pages/Home/Home.vue'
import Person from '../pages/Person/Person.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import HomeChildren from '../pages/Home/home-children/home-children.vue'
import HomeConent from '../pages/Home/home-conent/home-conent.vue'

export default new VueRouter({
  routes:[
    {
      path:'/classify',
      component:Classify,
      meta:{
        isShowFooter:true
      }
    },
    {
      path:'/goods',
      component:Goods,
      meta:{
        isShowFooter:true
      }
    },
    {
      path:'/home',
      component:Home,
      meta:{
        isShowFooter:true
      },
      children:[
        {
          path:'/',
          component:HomeConent,
          meta:{
            isShowFooter:true
          },
        },
        {
          path:'/home/homechildren/0',
          redirect:'/home'
        },
        {
          path:'/home/homechildren/:id',
          component:HomeChildren,
          meta:{
            isShowFooter:true
          }
        }
      ]
    },
    {
      path:'/person',
      component:Person
    },
    {
      path:'/shopcart',
      component:ShopCart,
      meta:{
        isShowFooter:true
      }
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
