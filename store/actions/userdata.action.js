import { insertUserData, loadUserData } from "../../db";

export const INSERT_DATA = 'INSERT_DATA';
export const LOAD_DATA = 'LOAD_DATA';

export const setUserData = (name, latitude, longitude) => {
    return async dispatch => {
        try {
            const result = await insertUserData(name, latitude, longitude)

            dispatch({
                type: INSERT_DATA,
                userData: {
                    name: name,
                    latitude: latitude,
                    longitude: longitude
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const takeUserData = () => {
    return async dispatch => {
        try {
            const result = await loadUserData()
            dispatch({
                type: LOAD_DATA,
                userData: result.rows._array
            })
        } catch (err) {
            console.log(err)
        }
    }
}

