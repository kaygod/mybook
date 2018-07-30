import { combineReducers } from 'redux-immutable';
import { reducer as homepage} from "../pages/index/store" 
const reducer= combineReducers({
  homepage
})
export default reducer;
  