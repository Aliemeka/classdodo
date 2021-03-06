import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import authReducer from './store/reducers/auth';
import subjectsReducer from './store/reducers/subjects';
import usersReducer from './store/reducers/users';
import recordsReducer from './store/reducers/records';
import resultReducer from './store/reducers/resultDetails';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// const composeType = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ---only used in dev mode
const composeType = compose

const rootReducer = combineReducers({
    auth: authReducer,
    records: recordsReducer,
    result: resultReducer,
    subjects: subjectsReducer,
    users: usersReducer,
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

