
export interface Action {
    type: string,
    payload?: any
}

export type State = {
    user: {
        loggedIn: boolean,
        token: string,
        name: string
    }
}

export namespace Store {
    export interface User {
        loggedIn: boolean,
        token: string,
        name: string
    }
}
