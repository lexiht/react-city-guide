import {combineReducers} from 'redux';
import attractions_selected from './attractions_selected';
import attractions from './attractions';
import search from './search';

export default combineReducers({
  attractions_selected,
  attractions,
  search,
})
