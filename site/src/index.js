

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer} from 'react-toastify';

import './index.scss';


import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <Routes />
  </React.StrictMode>
);
