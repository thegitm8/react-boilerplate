import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Action, State, Store } from '../types'
import { loginUser, logoutUser } from '../actions'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Site1 from './site1'

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

// export const MainComponent = (props: AppProps) => {
export const MainComponent = connect(mapStateToProps, mapDispatchToProps)((props: AppProps) => {
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
})

class ClientRouter extends React.Component {

    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/site1">Site 1</Link></li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={MainComponent} />
                    <Route path="/site1" component={Site1} />
                </div>
            </Router>
        )
    }
}

export default ClientRouter
