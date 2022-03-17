import { createStore, combineReducers } from 'redux';
import GoReducer from './reducers/go.reducer';
import LoginReducer from './reducers/login.reducer';

const RootReducer = combineReducers({
    isLogged: LoginReducer,
    isGoing: GoReducer,
})

export default createStore(RootReducer);