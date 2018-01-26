import * as React from 'react'
import { Dispatch } from "redux"
import { connect } from 'react-redux'
import { Action, State, Store } from '../types'
import { loginUser, logoutUser } from '../actions'

/**
 * Interfaces and Maps
 */

const mapStateToProps = (state: State) => ({
    loggedIn: state.user.loggedIn,
    name: state.user.name
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    login: (name: string, token: string) => dispatch(loginUser(name, token)),
    logout: () => dispatch(logoutUser())
})

interface AppProps {
    loggedIn: boolean,
    name: string,
    login: (name: string, token: string) => void,
    logout: () => void
}

/**
 * Components
 */

export const AppComponent = (props: AppProps) => {
    return (
        <div>
            <h2>{props.loggedIn ? `Logged in as "${props.name}"` : 'Not logged in'}</h2>
            {
                !props.loggedIn
                    ? <button onClick={() => props.login('someUser', 'aToken')}>Fake login</button>
                    : <button onClick={() => props.logout()}>Fake logout</button>
            }
        </div>
    )
}

class AppContainer extends React.Component<AppProps> {

    constructor(props: any) {
        super(props)
    }


    render() {
        return <AppComponent
            loggedIn={this.props.loggedIn}
            name={this.props.name}
            login={this.props.login}
            logout={this.props.logout}
        />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
