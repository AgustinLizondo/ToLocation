import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import GoReducer from './reducers/go.reducer';
import LoginReducer from './reducers/login.reducer';
import PermissionReducer from './reducers/permission.reducer';
import AuthReducer from './reducers/auth.reducer';
import UserReducer from './reducers/userdata.reducer';

const RootReducer = combineReducers({
    isLogged: LoginReducer,
    isGoing: GoReducer,
    permission: PermissionReducer,
    auth: AuthReducer,
    userData: UserReducer
})

export default createStore(RootReducer, applyMiddleware(thunk));