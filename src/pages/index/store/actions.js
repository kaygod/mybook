import * as constans from "./actionTypes";

const collectionType=()=>({
    type:constans.GET_COLLECTIONS
})


export const getCollections=()=>{

   return (dispatch)=>{

    setTimeout(()=>{
        dispatch(collectionType());  
    },3000)
 
   }

}

