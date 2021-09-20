import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from"./components/Home";
import Home1 from"./components/Home1";

ReactDOM.render(
  <div><Home/>
  {/* <Home1/> */}
  </div>,
  document.getElementById('root')
);

reportWebVitals();
