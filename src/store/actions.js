import {
  SAVE_NAVLIST,
  SAVE_INDEXLIST,
  SAVE_CATELISTS,
  SAVE_SEARCHLIST
} from './mutations-types'



import {
    getNavList,
    getIndexList,
    getCateList,
    getSearchList
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
        console.log(result)
    },
    async getSearchLists({commit}){
        let result = await getSearchList();
        commit(SAVE_SEARCHLIST,result)
      }

}