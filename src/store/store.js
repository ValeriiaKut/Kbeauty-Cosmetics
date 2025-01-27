import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension"; 
import appReducer from "./reducers"; 


const rootReducer = combineReducers({
  app: appReducer,
});


export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) 
);
