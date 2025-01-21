import './menu.css';
import logo from './images/logoagencia.svg';
import mockup from './images/mockup.svg';
import {useState} from 'react';

function Menu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };
  
  return (
    <div className="menu">
      <section class="main">
        <div class="center">
          <div class="menu">
            <div class="logo-menu">
              <a href="/"><img src={logo} alt="Logo Agência" /></a>
            </div>
            <div class="items-menu">
              <a href="#">Início</a>
              <a href="#">Por que nós?</a>
              <a href="#">Depoimentos</a>
              <a class="contact-btn" href="#">Entre em Contato</a>
            </div>
            <div class="items-menu-mobile">
              <i className="fa fa-bars" aria-hidden="true" onClick={toggleMenu}></i>
              <div className={`menu-mobile ${isMenuVisible ? 'show' : 'hide'}`}>
                <a href="#">Início</a>
                <a href="#">Por que nós?</a>
                <a href="#">Depoimentos</a>
              </div>
            </div>
          </div>

          <div class="mockup">
            <h1>Promova experiências aos seus clientes</h1>
            <br />
            <p>E veja resultados expressivos dia após dia</p>
            <br />
            <img src={mockup} alt="Mockup" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu;
