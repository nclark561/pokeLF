import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/Mynerve/Mynerve-Regular.ttf'
import './fonts/Orbitron/Orbitron-VariableFont_wght.ttf'
import './fonts/Pokemon-Classic.ttf'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
