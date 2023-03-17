import { configureStore } from "@reduxjs/toolkit";
import routReducers from './reducers'
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";

const persistConfig={key:'root',storage}
const persistedReducer=persistReducer(persistConfig,routReducers)

export default configureStore({
    reducer:persistedReducer,
    middleware:[thunk]})