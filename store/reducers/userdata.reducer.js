import { INSERT_DATA, LOAD_DATA } from "../actions/userdata.action"

const INITIAL_STATE = {
    userData: {
        name: 'User',
        latitude: '34.4220014',
        longitude: '-112.0840214',
        city: 'CA, USA',
    },
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