// libs
import React from 'react';
import ReactDOM from 'react-dom';
import QRGenerator from './components/QRGenerator/';

// styles
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <QRGenerator />
  </React.StrictMode>,
  document.getElementById('root')
);
