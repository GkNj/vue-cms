import VueRouter from 'vue-router'

import HomeContainer from "./components/tabbar/HomeContainer";
import MemberContainer from "./components/tabbar/MemberContainer";
import ShopCarContainer from "./components/tabbar/ShopCarContainer";
import SearchContainer from "./components/tabbar/SearchContainer";
import newsList from "./components/news/NewsList"
import newsInfo from "./components/news/NewsInfo"

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/home'},
        {
            path: '/home',
            component: HomeContainer
        },
        {path: '/home/newsList', component: newsList},
        {
            path: '/member',
            component: MemberContainer
        },
        {
            path: '/shopcar',
            component: ShopCarContainer
        },
        {
            path: '/search',
            component: SearchContainer
        },
        {
            path: '/home/newsInfo/:id',
            component: newsInfo
        }
    ],
    linkActiveClass: 'mui-active'//覆盖默认路由的高亮的类，默认的类叫做 router-link-active
})

export default router
