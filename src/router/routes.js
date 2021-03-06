import Home from '../pages/Home/Home.vue'
import Class from '../pages/Class/Class.vue'
import Buy from '../pages/Buy/Buy.vue'
import Profile from '../pages/Profile/Profile.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import SearchList from '../pages/SearchList/SearchList.vue'
import Login from '../pages/Login/Login.vue'
import Email from '../pages/Email/Email.vue'
import Phone from '../pages/Phone/Phone.vue'
import Live from '../pages/Live/Live.vue'

export default [
    {
        path:'/home',
        component:Home,
        meta: {
            isShowFooter:true
        }
    },
    {
        path:'/class',
        component:Class,
        meta: {
            isShowFooter:true
        }
    },
    {
        path:'/buy',
        component:Buy,
        meta: {
            isShowFooter:true
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta: {
            isShowFooter:true
        }
    },
    {
        path:'/shopcart',
        component:ShopCart,
        meta: {
            isShowFooter:true
        }
    },
    {
        path: '/searchlist',
        component: SearchList,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/email',
        component: Email,
    },
    {
        path: '/phone',
        component: Phone,
    },
    {
        path: '/live',
        component: Live,
    },
    {
        path:'/',
        redirect: '/home'
    }
]