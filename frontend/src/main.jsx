// frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import './index.css'; // Estilos globales

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> {/* Puedes usar App como un Home temporal */}
        <Route path="/register" element={<RegisterPage />} />
        {/* Aquí añadirás otras rutas como /login, /dashboard, etc. */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);