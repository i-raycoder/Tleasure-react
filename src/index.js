import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Auth0Provider
    domain="dev-mc0quesxm7x1k8zc.us.auth0.com"
    clientId="7VkDlqTjuUp1RrWNvINolw3LEI5UZ4vd"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,


    <App />
  
);

