import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import authReducer from "../Reducers/auth-reducer";
import adminReducer from "../Reducers/admin-reducer";
import companyReducer from "../Reducers/company-reducer";
import userReducer from "../Reducers/user-reducer";



export const history = createHistory();

const rootReducer = combineReducers({

    auth: authReducer,
    admin: adminReducer,
    company: companyReducer,
    user: userReducer,
    router: routerReducer
});

const middleWares = [
    thunk,
    routerMiddleware(history),
];

const enhancers = applyMiddleware(...middleWares);

const store = createStore(rootReducer, composeWithDevTools(enhancers));

export default store;