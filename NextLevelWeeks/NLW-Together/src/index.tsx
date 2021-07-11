import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './styles/global';
import { App } from './App';

import './services/firebase'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
