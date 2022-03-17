import { createStore, combineReducers } from 'redux';
import GoReducer from './reducers/go.reducer';
import LoginReducer from './reducers/login.reducer';
import PermissionReducer from './reducers/permission.reducer';

const RootReducer = combineReducers({
    isLogged: LoginReducer,
    isGoing: GoReducer,
    permission: PermissionReducer,
})

export default createStore(RootReducer);