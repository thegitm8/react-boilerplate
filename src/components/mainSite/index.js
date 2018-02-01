import React from 'react'
import { connect } from 'react-redux'

import { loginUser, logoutUser } from '../../store/actions'


export function MainComponent ({ name, loggedIn, login, logout }) {
    return (
        <div>
            <h2>{loggedIn ? `Logged in as "${name}"` : 'Not logged in'}</h2>
            {
                !loggedIn
                    ? <button onClick={() => login('someUser', 'aToken')}>Fake login</button>
                    : <button onClick={() => logout()}>Fake logout</button>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    loggedIn: state.user.loggedIn,
    name: state.user.name,
})

const mapDispatchToProps = dispatch => ({
    login: (name, token) => dispatch(loginUser(name, token)),
    logout: () => dispatch(logoutUser()),
})

@connect(mapStateToProps, mapDispatchToProps)
export default class MainContainer extends React.Component {

    render = () => {

        return (
            <MainComponent
                loggedIn={this.props.loggedIn}
                name={this.props.name}
                login={this.props.login}
                logout={this.props.logout}
            />
        )
    }
}
