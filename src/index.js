import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContextProvider from './components/AppContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
       <BrowserRouter>
    <AppContextProvider>
      
        <App />
    
    </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
