import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.createRoot(
  document.getElementById('star-wars-quiz-root') as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
