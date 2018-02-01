import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import createStore from './store'
import Router from './components';

require('./styles/main.scss')

render(
    <Provider store={ createStore() }>
        <Router />
    </Provider>,
    document.getElementById('root')
)

