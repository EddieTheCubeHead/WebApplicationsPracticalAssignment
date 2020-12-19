import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Feed from './Feed';
import { Provider } from 'react-redux';
import store from './redux/store'
import { fetchAll } from './redux/asyncFunctions';

// Upon page init fetch all messages
store.dispatch(fetchAll);

ReactDOM.render(
  <Provider store={store}>
    <Feed />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();