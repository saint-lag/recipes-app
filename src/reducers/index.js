import { combineReducers } from 'redux';
import user from './user';
import filters from './filters';
import query from './query';

const reducer = combineReducers({
  user,
  filters,
  query,
});

export default reducer;
