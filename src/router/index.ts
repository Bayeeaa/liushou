import { createRouter, createWebHistory } from 'vue-router'
import Charity from '@/views/charity/charity.vue'
import Children from '@/views/charity/children.vue'
import Donation from '@/views/donation/donation.vue'
import Certificate from '@/views/donation/certificate.vue'
import Subsidy from '@/views/donation/subsidy.vue'
import Duanxin from '@/views/donation/methods/duanxin.vue'
import Parents from '@/views/charity/parents.vue'
import Ngo from '@/views/charity/ngo.vue'
import Login from '@/views/login.vue'
import Register from '@/views/register.vue'
import project_overview from '@/views/project-overview/project-overview.vue'
import project_page1 from '@/views/project-overview/page/page1.vue'
import project_page2 from '@/views/project-overview/page/page2.vue'
import project_page3 from '@/views/project-overview/page/page3.vue'
import project_page4 from '@/views/project-overview/page/page4.vue'
import project_page5 from '@/views/project-overview/page/page5.vue'
import project_page6 from '@/views/project-overview/page/page6.vue'
import Join from '@/views/join/join.vue'
import Contact from '@/views/join/contact.vue'
import Volunteer from '@/views/join/volunteer.vue'
import About from '@/views/about/about.vue'
import Centre from '@/views/about/centre.vue'
import Constitution from '@/views/about/constitution.vue'
import Members from '@/views/about/members.vue'
import Rules from '@/views/about/rules.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path:"/", redirect:"/home"},
    { path:"/home", component:()=> import("../views/home.vue") },
    { path:"/register", component:Register },
    { path:"/login", component:Login },
    {
      path: '/join',
      component: Join,
      children: [
        {
          path: 'volunteer',  // 注意这里是相对路径，不需要加 
          component:Volunteer,
          meta: { title: '志愿者' },
        },
        {
          path: 'contact',
          component:Contact,
          meta: { title: '联系我们' },
        },
      ]
    },
    {
      path: '/about',
      component: About,
      meta: { title: '关于我们' },
      children: [
        {
          path: 'centre',  // 注意这里是相对路径，不需要加 
          component:Centre,
          meta: { title: '平台中心站' },
        },
        {
          path: 'constitution',
          component:Constitution,
          meta: { title: '平台章程' },
        },
        {
          path: 'members',
          component:Members,
          meta: { title: '平台成员' },
        },
        {
          path: 'rules',
          component:Rules,
          meta: { title: '管理制度' },
        },
      ]
    },
    {
      path: '/charity',
      component: Charity,
      children: [
        {
          path: 'children',  // 注意这里是相对路径，不需要加 
          component:Children,
          
        },
        {
          path: 'parents',
          component:Parents
        },
        {
          path: 'ngo', 
          component:Ngo
        },
      ]
    },
    {
      path: '/donation',
      component: Donation,
      children: [
        {
          path: 'certificate',
          component:Certificate,
          meta: { title: '证书申领' },
        },
        {
          path: 'subsidy',
          component:Subsidy,
          meta: { title: '政府补贴' },
        },
        {
          path: 'methods/one',
          component:Duanxin,
          meta: { title: '短信捐赠' },
        }
      ]
    },
    {
      path: '/project-overview',
      component: project_overview,
    },
    {
      path: '/project-overview/page1',
      component: project_page1,
    },
    {
      path: '/project-overview/page2',
      component: project_page2,
    },
    {
      path: '/project-overview/page3',
      component: project_page3,
    },
    {
      path: '/project-overview/page4',
      component: project_page4,
    },
    {
      path: '/project-overview/page5',
      component: project_page5,
    },
    {
      path: '/project-overview/page6',
      component: project_page6,
    }
  ],
})


export default router
