import { fromJS } from 'immutable';
import * as constans from "./actionTypes"; 


const defaultState = fromJS({
	list:[]
});

export default (state = defaultState, action) => {
     
    switch(action.type){  
      case constans.GET_KEYWORDS:
          return state.set("list",action.value);break;
      default: return state; 
    }

}


