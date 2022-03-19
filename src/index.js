import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <div>
    <App />
    <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);