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


/* 手机号验证码登陆 */
export const loginWithPhone = ({phone, code}) => ajax({
    url: '/login_sms',
    method: 'POST',
    data: {
      phone,
      code
    }
  })


  export const sendCode = ({phone}) => ajax({
    url: '/sendcode',
    params: {
      phone
    }
  })


// 值得买 轮播图数据\
export const getBuyList = ()=>ajax({
  url:'/buyList',
  method:'GET'
})

// 瀑布流数据
export const getPuBuList = ()=>ajax({
  url:'/pubuList',
  method:'GET'
})