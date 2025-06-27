// frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import './index.css'; // Mantén tus estilos globales si tienes

// Importa ChakraProvider
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider> {/* Envuelve toda la aplicación con ChakraProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Aquí añadirás otras rutas */}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);