import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';

import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';



export const history = createHistory();

const rootReducer = combineReducers({


    router: routerReducer
});

const middleWares = [
    thunk,
    routerMiddleware(history),
];

const enhancers = applyMiddleware(...middleWares);

const store = createStore(rootReducer, enhancers);

export default store;