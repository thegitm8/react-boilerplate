import * as Types from '../types/constants'
import { Store, Action }  from '../types'

const initialState: Store.User = {
    loggedIn: false,
    token: '',
    name: ''
}

export default function userReducer(state = initialState, action: Action) {

    switch (action.type) {
        case Types.LOGIN_USER:
            return Object.assign({}, state, {
                loggedIn: true,
                name: action.payload.name,
                token: action.payload.token
            })

        case Types.LOGOUT_USER:
            return Object.assign({}, state, initialState)

        default:
            return state
    }

}
