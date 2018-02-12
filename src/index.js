import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// storeとのつなぎこみ
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// store 生成のためにimport
import {Reducer} from './Module'

let store = createStore(Reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
  registerServiceWorker();
