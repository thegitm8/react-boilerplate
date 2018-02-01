import * as Types from '../types'

export function loginUser(name, token) {
    return {
        type: Types.LOGIN_USER,
        payload: {
            name,
            token,
        },
    };
}

export function logoutUser() {
    return {
        type: Types.LOGOUT_USER,
    };
}
