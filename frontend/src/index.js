import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Este processo está ocorrendo em live-reload, então qualquer mudança salva
//será automaticamente enviada ao front-end.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

