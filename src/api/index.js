import ajax from './ajax'


// 获取顶部导航列表
export const getNavList = () => ajax({
    url:'/cateNavDatas'
})

// input搜索
export const getSearchList = ()=>ajax({
    url:'/searchList',
    method:'GET'
  })

// 获取推荐列表信息
export const getIndexList = () => ajax({
    url:'/indexList'
})
// 分类右侧数据
export const getCateList = () => ajax({
    url:'/cateLists'
})


