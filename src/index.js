import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/'
import { HashRouter, Route } from 'react-router-dom'

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware ))

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
                <Route path="/" component={App} />
        </HashRouter>
    </Provider>, 
    document.getElementById("root")
);
