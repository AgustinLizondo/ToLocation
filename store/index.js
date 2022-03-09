import { createStore, combineReducers } from 'redux';
import LoginReducer from './reducers/login.reducer';
import ItemsReducer from './reducers/items.reducer';

const RootReducer = combineReducers({
    isLogged: LoginReducer,
    items: ItemsReducer,
})

export default createStore(RootReducer);