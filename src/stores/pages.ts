import { defineStore } from "pinia";

export const project = defineStore("project", {
  state: () => ({
    project_overview: [
        { title: '钱塘区留守儿童关爱', path:'/project-overview/page1' },
        { title: 'AI助力心理需求辅导', path:'/project-overview/page2' },
        { title: '线上线下构建网络交流平台', path:'/project-overview/page3' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
    ],

    demo: [
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
        { title: 'item', path:'/#' },
    ]
  }),
});