import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './store/reducers/auth';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeType = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeType(
    applyMiddleware(thunk)
))


const app = (
    <Provider  store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

