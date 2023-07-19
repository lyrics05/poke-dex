/*import {composeWithDevTools} from"redux-devtools-extension"
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducer';

const store = createStore(
    reducer,
composeWithDevTools(applyMiddleware(thunk))
);

export default store;



import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // elige el almacenamiento (por defecto, utiliza el almacenamiento local del navegador)

import rootReducer from '../reducer/reducer'; // importa tus reducers

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);*/

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import Reducer from "../reducer/reducer";
import { saveState } from "./LocalStorage";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const newReducer = persistReducer(persistConfig, Reducer);

export const store = createStore(
  newReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

store.subscribe(() => {
  saveState(store.getState());
});