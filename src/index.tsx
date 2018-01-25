import * as React from 'react'
import * as reactDom from 'react-dom'
import { Store, createStore } from 'redux'

const { Provider } = require('react-redux')

import reducers from './reducers'
import App from './components'

const initialState = {};

const store: Store<any> = createStore(reducers, initialState)

reactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
