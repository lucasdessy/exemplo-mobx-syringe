import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reflect-metadata';
import { setupInjection } from './injection';
import HomePage from './presentation/home_page';

setupInjection();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HomePage></HomePage>
  </React.StrictMode>
)
