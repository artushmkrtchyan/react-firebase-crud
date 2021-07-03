import { combineReducers } from 'redux';
import { users } from '../redux/users/reducer';

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
