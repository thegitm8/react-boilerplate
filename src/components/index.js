import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import SampleSite from './sampleSite'
import MainSite from './mainSite'



class ClientRouter extends React.Component {

    render = () => {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sampleSite">sample Site</Link></li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={MainSite} />
                    <Route path="/sampleSite" component={SampleSite} />
                </div>
            </Router>
        )
    }
}

export default ClientRouter
