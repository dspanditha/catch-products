//react
import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
//redux
import productReducer from "../reducers/productReducer"
import { loadState, saveState } from './local-store';

const loggerMiddleware = createLogger();

const persistedState = loadState();

const store = createStore(
    combineReducers({
        'productStore': productReducer
    }),
    persistedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

store.subscribe(() => {
    saveState(store.getState());
})

export default store;