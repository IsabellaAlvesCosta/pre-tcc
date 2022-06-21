import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route  } from 'react-router-dom';


import Home from './pages/home';
import Adm from './pages/pag3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Adm' element={<Adm/>}/>
     
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
