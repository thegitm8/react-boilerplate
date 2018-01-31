import * as React from 'react'
import { render } from 'react-dom'
import { Store, createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'

// TODO: seems weird to use require here, needs some investigation
const { Provider } = require('react-redux')

import reducers from './reducers'
import ClientRouter from './components'

const initialState = {};

const store: Store<any> = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(logger),
        (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f
    )
)

render(
    <Provider store={store}>
        <ClientRouter />
    </Provider>,
    document.getElementById('root')
)
