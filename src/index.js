import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CheckboxProvider } from './components/Contexts/CheckboxContext';
import { AuthProvider } from './components/Contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CheckboxProvider>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </CheckboxProvider>
);
