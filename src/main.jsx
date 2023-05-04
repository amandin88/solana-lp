import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'animate.css/animate.min.css';

import './main.scss';
import App from './App';
import './configs/i18n';

createRoot(document.getElementById('app')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
