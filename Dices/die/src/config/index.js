import {
    createStore,
    combineReducers,
} from 'redux';
import diceReducer from '../reducers/diceReducer';

const rootReducer = combineReducers({
    diceReducer: diceReducer,
});

const store = createStore(rootReducer);

console.log(store.getState());

export default store;