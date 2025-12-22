import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// CORRECT SYNTAX FOR CREATE REACT APP:
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.error("Clerk Key Missing! Check your .env file location and variable name.");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {PUBLISHABLE_KEY ? (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClerkProvider>
    ) : (
      <div style={{color: 'red', padding: '20px', textAlign: 'center', background: '#000', height: '100vh'}}>
        <h1>Configuration Error</h1>
        <p>Your <b>REACT_APP_CLERK_PUBLISHABLE_KEY</b> is not being detected.</p>
        <p>1. Ensure your .env file variable starts with <b>REACT_APP_</b></p>
        <p>2. Restart your terminal (npm start)</p>
      </div>
    )}
  </React.StrictMode>
);