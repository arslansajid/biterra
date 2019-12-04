import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { UserReducer } from './user.reducer';

const config = {
  key: 'root',
  storage
};

const rootReducer = persistCombineReducers(config, {
  user: UserReducer
});

export default rootReducer;
