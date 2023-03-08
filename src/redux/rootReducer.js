import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import appReducer from './slices/app';

// slices

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-'
  // whitelist: ["auth", "user", "settings"],
  // blacklist: ["auth", "user", "settings"],
};

const rootReducer = combineReducers({
  app: appReducer
});

export { rootPersistConfig, rootReducer };
