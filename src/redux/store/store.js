import {composeWithDevTools} from"redux-devtools-extension"
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducer';

const store = createStore(
    reducer,
composeWithDevTools(applyMiddleware(thunk))
);

export default store;
