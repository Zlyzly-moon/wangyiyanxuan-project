import Home from '../pages/Home/Home.vue'
import Class from '../pages/Class/Class.vue'
import Buy from '../pages/Buy/Buy.vue'
import Profile from '../pages/Profile/Profile.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'

export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/class',
        component:Class
    },
    {
        path:'/buy',
        component:Buy
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/shopcart',
        component:ShopCart
    },
    {
        path:'/',
        redirect: '/home'
    }
]