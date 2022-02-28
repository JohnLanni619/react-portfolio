import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// REACTDOM library is rendering the App component at the root element in the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

