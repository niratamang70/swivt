import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { myRepoReducer, repoListReducer, searchDataReducer } from './reducers/repoReducer';

const rootReducer = combineReducers({
  repoList: repoListReducer,
  userRepo: myRepoReducer,
  searchData: searchDataReducer
});
const initialState = {};
const middleware = [thunk];

const store = configureStore(
  { reducer: rootReducer, initialState },
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
