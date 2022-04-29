import { combineReducers } from 'redux';
import user from './user';
import filters from './filters';

const reducer = combineReducers({
  user,
  filters,
});

export default reducer;
