import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';

import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import adminReducer from '../Reducers/admin-reducer';
import companyReducer from '../Reducers/company-reducer';
import userReducer from '../Reducers/user-reducer';
import generalReducer from '../Reducers/general-reducer';
import authReducer from '../Reducers/auth-reducer';

export const history = createHistory();

const rootReducer = combineReducers({
    admin: adminReducer,
    company: companyReducer,
    user: userReducer,
    general: generalReducer,
    auth: authReducer,

    router: routerReducer
});

const middleWares = [
    thunk,
    routerMiddleware(history),
];

const enhancers = applyMiddleware(...middleWares);

const store = createStore(rootReducer, enhancers);

export default store;