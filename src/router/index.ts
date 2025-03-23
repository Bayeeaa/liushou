import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path:"/", redirect:"/home"},
    { path:"/home", component:()=> import("../views/home.vue") },
    {
      path: '/focus',
      name: 'Focus',
      component: () => import('../views/Focus.vue'),
      },
    {
      path:'/project-overview',
      name:'ProjectOverview',
      component:()=>import('../views/ProjectOverview.vue'),
    },
    {
      path:'/success-cases',
      name:'SuccessCases',
      component:()=>import('../views/SuccessCase.vue'),
    },
    {
      path:'/about-us',
      name:'AboutUs',
      component:()=>import('../views/AboutUs.vue'),
    },
    {
      path:'/process-module',
      name:'ProcessModule',
      component:()=>import('../views/ProcessModule.vue'),
    },
    {
      path:'/donation',
      name:'Donation',
      component:()=>import('../views/Donation.vue'),
    },
    {
      path:'/information-disclosure',
      name:'InformationDisclosure',
      component:()=>import('../views/InformationDisclosure.vue'),
    },
    {
      path:'/party-column',
      name:'PartyColumn',
      component:()=>import('../views/PartyColumn.vue'),
    },
    {
      path:'/join-us',
      name:'JoinUs',
      component:()=>import('../views/JoinUs.vue'),
    }
  ],
})

export default router
