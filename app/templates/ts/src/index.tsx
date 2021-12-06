import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';
import App from './routing/Root';
import * as serviceWorker from './serviceWorker';
import './locales/i18n';

// adding fonts
const montserratObserver = new FontFaceObserver('Montserrat', {});
montserratObserver.load().then(() => {
  document.body.classList.add('montserrat');
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
