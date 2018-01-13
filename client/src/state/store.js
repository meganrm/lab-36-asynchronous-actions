import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

import * as fileData from './file-data';

const reducers = {
  fileData: fileData.reducer,
};
const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;
