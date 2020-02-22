import {
  SAVE_NAVLIST,
  SAVE_INDEXLIST,
  SAVE_CATELISTS,
  SAVE_SEARCHLIST,
  SAVE_BUYLIST,
  SAVE_PUBULIST
} from './mutations-types'



import {
    getNavList,
    getIndexList,
    getCateList,
    getSearchList,
    getBuyList,
    getPuBuList
} from '../api'

export default{
    async getNavListAction({commit}){
        let result = await getNavList()
        !!(result.code === 0) || commit(SAVE_NAVLIST,result.categoryL1List)
        // console.log(result.categoryL1List)
    },
    async getIndexListAction({commit}){
        let result = await getIndexList()
        !!(result.code === 0) || commit(SAVE_INDEXLIST,result)
        // console.log(result)
    },
    async getCateListAction({commit}){
        let result = await getCateList()
        !!(result.code === 0) || commit(SAVE_CATELISTS,result)
        // console.log(result)
    },
    async getSearchLists({commit}){
        let result = await getSearchList();
        commit(SAVE_SEARCHLIST,result)
      },

      async getBuyListAction({commit}){
        let result = await getBuyList();
        commit(SAVE_BUYLIST,result.data.navList)
        console.log(result.data.navList)
      },
      async getPuBuListAction({commit}){
        let result = await getPuBuList();
        commit(SAVE_PUBULIST,result.data)
        console.log(result.data)
      }


}