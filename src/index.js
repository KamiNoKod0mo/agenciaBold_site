import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import Menu from './menu';
import Marcas from './marcas';
import CtaBen from './cta-ben';
import DepCont from './depcont';
import Footer from './footer';

const menu = ReactDOM.createRoot(document.getElementById('menu'));
menu.render(
  <React.StrictMode>
    <Menu />
  </React.StrictMode>
);

const marcas = ReactDOM.createRoot(document.getElementById('marcas'));
marcas.render(
  <React.StrictMode>
    <Marcas />
  </React.StrictMode>
);

const ctaben = ReactDOM.createRoot(document.getElementById('cta-ben'));
ctaben.render(
  <React.StrictMode>  
    <CtaBen />
  </React.StrictMode>
);

const depcont = ReactDOM.createRoot(document.getElementById('depcont'));
depcont.render(
  <React.StrictMode>  
    <DepCont />
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>  
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
