import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const rootElement = document.getElementById('root');
const store = createStore(reducer,
    applyMiddleware(thunk)
    );
ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    rootElement);
serviceWorker.unregister();
