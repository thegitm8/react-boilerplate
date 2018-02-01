import * as Types from '../types'

const initialState = {
    loggedIn: false,
    token: '',
    name: '',
};

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case Types.LOGIN_USER:
            return {
                ...state,
                loggedIn: true,
                name: action.payload.name,
                token: action.payload.token
            }

        case Types.LOGOUT_USER:
            return {
                ...state,
                ...initialState
            };

        default:
            return state;
    }

}
