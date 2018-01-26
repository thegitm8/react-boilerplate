import * as React from 'react'
import * as reactDom from 'react-dom'
import { Store, createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'

// TODO: seems weird to use require here, needs some investigation
const { Provider } = require('react-redux')

import reducers from './reducers'
import App from './components'

const initialState = {};

const store: Store<any> = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(logger),
        (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f
    )
)

reactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
