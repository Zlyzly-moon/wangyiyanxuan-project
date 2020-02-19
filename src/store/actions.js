import {
  SAVE_NAVLIST
} from './mutations-types'



import {
    getNavList
} from '../api'

export default{
    async getNavListAction({commit}){
        let result = await getNavList()
        !!(result.code === 0) || commit(SAVE_NAVLIST,result.categoryL1List)
        console.log(result.categoryL1List)
    }
}