import { combineReducers } from 'redux-immutable';
import { reducer as homepage} from "../pages/index/store";
import { reducer as keyword} from "../components/header/store"; 
const reducer= combineReducers({
  homepage,
  keyword
})
export default reducer;
  