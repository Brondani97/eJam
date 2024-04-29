import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppMobile from './AppMobile'; // Importa el componente de la versión móvil
import reportWebVitals from './reportWebVitals';

const Root = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); 
    };

    handleResize(); 

    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  return (
    <React.StrictMode>
      {isMobileView ? (
        <AppMobile /> 
      ) : (
        <App />
      )}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Root />
);

reportWebVitals();
