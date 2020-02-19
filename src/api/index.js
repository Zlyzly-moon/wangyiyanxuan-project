import ajax from './ajax'


// 获取顶部导航列表
export const getNavList = () => ajax({
    url:'/cateNavDatas'
})

