import { INSERT_DATA, LOAD_DATA } from "../actions/userdata.action"

const INITIAL_STATE = {
    userData: null,
}

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INSERT_DATA:
            return { ...state, userData: action.userData }
        case LOAD_DATA:
            return { ...state, userData: action.userData }
        default:
            return state;
    }
}

export default UserReducer;