import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

let createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

export default (function configureStore (initialState) {
    return createStoreWithMiddleware(combineReducers({
        data: reducer
    }), initialState);
}());
