import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers'

export default function create(initialState = {}) {

    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(logger),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )
}
