import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'http://localhost:3000/',
  responseType: 'json'
});

const store = createStore(rootReducer, applyMiddleware(
  axiosMiddleware(client),
))

//const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
