import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import authReducer from './store/reducers/auth';
import subjectsReducer from './store/reducers/subjects';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeType = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    auth: authReducer,
    subjects: subjectsReducer
})


const store = createStore(rootReducer, composeType(
    applyMiddleware(thunk)
))


const app = (
    <Provider  store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

