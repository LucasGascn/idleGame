import { createRouter, createWebHistory } from 'vue-router'
import FactoryView from '../views/FactoryView.vue'
import HomeView from '../views/HomeView.vue'
import MarketView from '../views/Marketview.vue'
import RessourceView from '../views/RessourceView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/factory',
      name:'factory',
      component:FactoryView
    },
    {
      path: '/market',
      name: 'market',
      component: MarketView
    },
    {
      path: '/ressource',
      name: 'ressource',
      component: RessourceView
    },
  ]
})

export default router
