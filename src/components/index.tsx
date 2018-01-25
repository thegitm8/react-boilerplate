import * as React from 'react'
import { Dispatch } from "redux"
import { connect } from 'react-redux'
import { Action, State, Store } from '../types'
import { loginUser } from '../actions'

export const App = (props: { loggedIn: boolean, login: (name: string, token: string) => Action }) => {
    return (
        <div>
            App
        </div>
    )
}

const mapStateToProps = (state: State) => ({
    loggedIn: state.user.loggedIn
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    login: (name: string, token: string) => {
        dispatch(loginUser(name, token))
    }
})

interface AppProps {
    loggedIn: boolean
}

class AppContainer extends React.Component<AppProps> {

    constructor(props: any) {
        super(props)
    }

    render() {
        console.log(this.props)
        const { loggedIn, login } = this.props

        return <App
            loggedIn={loggedIn}
            login={login}
        />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
