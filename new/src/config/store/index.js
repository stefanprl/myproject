import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';

import authReducer from '../../reducers/authReducer';
import counterReducer from '../../reducers/counterReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    counter: counterReducer,
});

const middleWares = [
    thunk,
];

const enhancers = applyMiddleware(...middleWares);

const store = createStore(rootReducer, enhancers);

export default store;