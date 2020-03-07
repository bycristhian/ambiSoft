import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4

const root = document.getElementById('root')

ReactDOM.render(<App />, root);

