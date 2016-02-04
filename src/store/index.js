import { redux } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

console.log(redux);

let createStoreWithMiddleware = redux.applyMiddleware(
    thunk
)(redux.createStore);

export default (function configureStore (initialState) {
    return createStoreWithMiddleware(redux.combineReducers({
        data: reducer
    }), initialState);
})();
