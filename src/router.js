import VueRouter from 'vue-router'

import HomeContaine from "@/components/tabbar/HomeContaine";
import MemberContaine from "@/components/tabbar/MemberContaine";
import ShopCarContaine from "@/components/tabbar/ShopCarContaine";
import SearchContaine from "@/components/tabbar/SearchContaine";
import newsList from "@/components/news/NewsList"

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/home'},
        {
            path: '/home',
            component: HomeContaine
        },
        {path: '/home/newsList', component: newsList},
        {
            path: '/member',
            component: MemberContaine
        },
        {
            path: '/shopcar',
            component: ShopCarContaine
        },
        {
            path: '/search',
            component: SearchContaine
        }
    ],
    linkActiveClass: 'mui-active'//覆盖默认路由的高亮的类，默认的类叫做 router-link-active
})

export default router