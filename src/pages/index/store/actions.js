import * as constans from "./actionTypes";
import axios from 'axios';
import { fromJS } from 'immutable';

const collectionType=(data)=>({
    type:constans.GET_COLLECTIONS,
    value:fromJS(data.data)
})


export const getCollections=()=>{

   return (dispatch)=>{
    
    axios.get("./data/collection.json").then((data)=>{ 
        dispatch(collectionType(data));  
    }).catch(function (error) {
        console.log(error);
    })

   }

}

