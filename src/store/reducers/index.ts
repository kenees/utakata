import { combineReducers } from 'redux';
import user from './user';
import tag from './tag';

export default combineReducers({
  user,
  tag,
})
