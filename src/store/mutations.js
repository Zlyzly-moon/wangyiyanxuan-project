import {
    SAVE_NAVLIST,
 } from './mutations-types'
 
 export default{
     [SAVE_NAVLIST] (state,categoryL1List){
         state.categoryL1List = categoryL1List
         console.log(categoryL1List)
     }  
 }

 