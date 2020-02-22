import {
    SAVE_NAVLIST,
    SAVE_INDEXLIST,
    SAVE_CATELISTS,
    SAVE_SEARCHLIST,
    SAVE_BUYLIST,
    SAVE_PUBULIST
 } from './mutations-types'
 
 export default{
     [SAVE_NAVLIST] (state,categoryL1List){
         state.categoryL1List = categoryL1List
        //  console.log(categoryL1List)
     },
     [SAVE_INDEXLIST] (state,indexList){
        state.indexList = indexList
        console.log(indexList)
    } ,
    [SAVE_CATELISTS] (state,cateLists){
        state.cateLists = cateLists
        console.log(cateLists)
    },
    [SAVE_SEARCHLIST](state,searchItem){
        state.searchList = searchItem
    },  
    [SAVE_BUYLIST](state,buyList){
        state.buyList = buyList
        console.log(buyList)
    },
    [SAVE_PUBULIST](state,data){
        state.data = data
        console.log(data)
    },
 }

 