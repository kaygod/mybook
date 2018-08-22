import * as constans from "./actionTypes";
import axios from 'axios';
import { fromJS } from 'immutable';

const keywordType=(data)=>({
    type:constans.GET_KEYWORDS,
    value:fromJS(data.data)
})


export const getKeyWords=()=>{//获取头部的关键词
   return (dispatch)=>{
    
    axios.get("./data/keyword.json").then((data)=>{ 
        dispatch(keywordType(data));  
    }).catch(function (error) {
        console.log(error);
    })

   }

}

