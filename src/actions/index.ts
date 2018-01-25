import * as Types from '../types/constants'
import { Action } from '../types'

interface LoginAction extends Action {
    payload: {
        name: string,
        token: string
    }
}

export function loginUser(name: string, token: string): LoginAction {
    return {
        type: Types.LOGIN_USER,
        payload: {
            name,
            token
        }
    }
}

export function logoutUser(): Action {
    return {
        type: Types.LOGOUT_USER
    }
}
