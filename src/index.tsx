import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from "./styles/GlobalStyles";

// Asegúrate de que `root` no sea null
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("El elemento root no se encontró en el DOM.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

reportWebVitals();

