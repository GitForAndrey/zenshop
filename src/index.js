import React from 'react';
import {Provider} from 'react-redux';
import creatStore from './Redux';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/antd/dist/antd.css';


const store = creatStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );


