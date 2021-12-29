import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

//dev-r5hwj42z.us.auth0.com 
//9PlPOvORQdm5EtPtBYHXqLFI6k0MdEtT
ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider   redirectUri={window.location.origin} domain='dev-r5hwj42z.us.auth0.com' clientId='9PlPOvORQdm5EtPtBYHXqLFI6k0MdEtT'>

    <AppProvider>
    <App />
    </AppProvider>
    </Auth0Provider>,
  </React.StrictMode>,
 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
